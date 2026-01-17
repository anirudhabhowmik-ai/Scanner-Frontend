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
