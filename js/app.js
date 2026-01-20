// Header & Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active'); // hamburger animation
});

// Header shrink on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        navLinks.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        navLinks.classList.remove('scrolled');
    }
});

// Mobile dropdown toggle
const dropdowns = document.querySelectorAll('.dropdown');

// // Function to handle dropdown clicks on mobile
// function handleMobileDropdowns() {
//     if (window.innerWidth <= 900) {
//         dropdowns.forEach(dropdown => {
//             const toggle = dropdown.querySelector('.dropdown-toggle');
            
//             // Clone to remove existing listeners
//             const newToggle = toggle.cloneNode(true);
//             toggle.parentNode.replaceChild(newToggle, toggle);
            
//             newToggle.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 e.stopPropagation();
                
//                 // Close other dropdowns
//                 dropdowns.forEach(d => {
//                     if (d !== dropdown) {
//                         d.classList.remove('active');
//                     }
//                 });
                
//                 // Toggle current dropdown
//                 dropdown.classList.toggle('active');
//             });
//         });
//     } else {
//         // Desktop: remove active class and allow hover
//         dropdowns.forEach(dropdown => {
//             dropdown.classList.remove('active');
//         });
//     }
// }

// // Initialize on load
// handleMobileDropdowns();

// // Re-initialize on resize
// let resizeTimer;
// window.addEventListener('resize', () => {
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(() => {
//         handleMobileDropdowns();
//     }, 250);
// });

// Close dropdowns when clicking outside (mobile only)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    }
});

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