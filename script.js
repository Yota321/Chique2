document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('nav');
    const lightBulbIcon = document.querySelector('.light-bulb-icon');
    const chiqueHeader = document.querySelector('#chique-header');
    const backToTopButton = document.querySelector('#back-to-top');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Light bulb icon for dark mode toggle
    lightBulbIcon.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    // Scroll to top when clicking "Chique"
    chiqueHeader.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show back-to-top button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Back to top button functionality
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
