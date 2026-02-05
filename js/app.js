const BACKEND_BASE_URL = "https://api.nextopdf.com";

// Load header
fetch('/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
        // Initialize all header-related functionality after header loads
        initializeHeader();
    })
    .catch(error => console.error('Error loading header:', error));

// Load footer
fetch('/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));

// Initialize all header functionality
function initializeHeader() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Hamburger menu toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Header shrink on scroll
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
                navLinks.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
                navLinks.classList.remove('scrolled');
            }
        });
    }

    // Close mobile menu when clicking on a dropdown item
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
            if (e.target.closest('.dropdown-menu a')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        }
    });
}

// Optional: Mobile dropdown toggle functionality (currently commented out in your code)
// Uncomment if you need it
/*
function handleMobileDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (window.innerWidth <= 900) {
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            
            // Clone to remove existing listeners
            const newToggle = toggle.cloneNode(true);
            toggle.parentNode.replaceChild(newToggle, toggle);
            
            newToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Close other dropdowns
                dropdowns.forEach(d => {
                    if (d !== dropdown) {
                        d.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                dropdown.classList.toggle('active');
            });
        });
    } else {
        // Desktop: remove active class and allow hover
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
}

// Close dropdowns when clicking outside (mobile only)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
        if (!e.target.closest('.dropdown')) {
            const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    }
});
*/