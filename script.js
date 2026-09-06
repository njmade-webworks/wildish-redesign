// =========================================
// 1. STICKY NAVBAR SCROLL EFFECT
// =========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    // When the user scrolls down 50px, add the 'scrolled' class
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// =========================================
// 2. MOBILE MENU TOGGLE
// =========================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Toggle the menu open/close when the hamburger is clicked
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close the mobile menu when a link inside it is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// =========================================
// 3. SCROLL ANIMATIONS (Intersection Observer)
// =========================================
// This makes elements fade in smoothly as they enter the viewport
const observerOptions = {
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: stop observing once it's animated (saves performance)
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Select the elements we want to animate and add the 'fade-in' class
const animatedElements = document.querySelectorAll('.menu-card, .story-text, .story-image, .footer-col, .section-header');

animatedElements.forEach((el, index) => {
    el.classList.add('fade-in');
    // Add a slight delay to each card so they animate in one by one (stagger effect)
    if (el.classList.contains('menu-card')) {
        el.style.transitionDelay = `${index * 0.15}s`; 
    }
    observer.observe(el);
});