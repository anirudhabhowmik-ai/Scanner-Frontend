const BACKEND_BASE_URL = "https://api.nextopdf.com";

// Load header
fetch("/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;
    initializeHeader();
  })
  .catch((error) => console.error("Error loading header:", error));

// Load footer
fetch("/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error loading footer:", error));

function initializeHeader() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const header = document.querySelector("header");
  const dropdowns = document.querySelectorAll(".dropdown");

  // ── Hamburger menu toggle ───────────────────────────────────────────────
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }

  // ── Header shrink on scroll ─────────────────────────────────────────────
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
        navLinks.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
        navLinks.classList.remove("scrolled");
      }
    });
  }

  // ── Close mobile menu when clicking a dropdown item ─────────────────────
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 900) {
      if (e.target.closest(".dropdown-menu a")) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        dropdowns.forEach((d) => d.classList.remove("active"));
      }
    }
  });

  // ── Smart dropdown scroll: fix overflow on short screens ────────────────
  function adjustDropdownHeight(dropdownMenu) {
    // Reset first so we get accurate measurements
    dropdownMenu.style.maxHeight = "";
    dropdownMenu.style.overflowY = "";

    const rect = dropdownMenu.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const PADDING = 35; // breathing room from bottom of screen

    if (rect.bottom > viewportHeight - PADDING) {
      // Dropdown overflows — clamp it and add scrollbar
      const availableHeight = viewportHeight - rect.top - PADDING;
      dropdownMenu.style.maxHeight = Math.max(availableHeight, 120) + "px";
      dropdownMenu.style.overflowY = "auto";
    }
  }

  // Apply on hover (desktop only)
  dropdowns.forEach((dropdown) => {
    const menu = dropdown.querySelector(".dropdown-menu");
    if (!menu) return;

    dropdown.addEventListener("mouseenter", () => {
      if (window.innerWidth <= 900) return; // skip on mobile
      // Let CSS show the menu first, then measure
      requestAnimationFrame(() => {
        adjustDropdownHeight(menu);
      });
    });

    dropdown.addEventListener("mouseleave", () => {
      // Reset when closed
      menu.style.maxHeight = "";
      menu.style.overflowY = "";
    });
  });

  // Re-check on window resize (in case user resizes while a dropdown is open)
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 900) return;
    dropdowns.forEach((dropdown) => {
      const menu = dropdown.querySelector(".dropdown-menu");
      if (!menu) return;
      // Only adjust if currently visible
      if (menu.offsetParent !== null) {
        adjustDropdownHeight(menu);
      }
    });
  });
}
