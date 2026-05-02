document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.getElementById('scroll-btn');
    const detailsSection = document.getElementById('details');

    // Smooth scroll to details
    scrollBtn.addEventListener('click', () => {
        detailsSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Add animation classes and observe
    const animatedElements = [
        document.querySelector('.hero-title'),
        document.querySelector('.heart-icon'),
        document.querySelector('.section-heading'),
        document.querySelector('.cta-button'),
        document.querySelector('.footer-text')
    ];

    animatedElements.forEach(el => {
        if (el) {
            el.classList.add('fade-in-up');
            observer.observe(el);
        }
    });
});
