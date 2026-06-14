/* FC Inclusif - Main JavaScript */

document.addEventListener('DOMContentLoaded', function() {
    // Active nav link detection
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop() || 'index.html';
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.getElementById('nav-mobile');
    
    if (hamburger && navMobile) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMobile.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const mobileLinks = navMobile.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMobile.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('header')) {
                hamburger.classList.remove('active');
                navMobile.classList.remove('active');
            }
        });
    }

    // Contact form handling (only on contact page, NOT on admin pages)
    const pageUrl = window.location.pathname;
    if (!pageUrl.includes('login') && !pageUrl.includes('admin')) {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Merci pour votre message ! Nous vous recontacterons rapidement.');
                contactForm.reset();
            });
        }
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
