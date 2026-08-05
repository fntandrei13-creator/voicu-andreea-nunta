document.addEventListener("DOMContentLoaded", () => {

    // Redirect după 5 secunde
    setTimeout(() => {
        window.location.href = "https://storage.rcs-rds.ro/receive/fa70a871-0b54-4c53-b7c3-4aaca8804730";
    }, 5000);

    // Elemente
    const scrollBtn = document.getElementById("scroll-btn");
    const detailsSection = document.getElementById("details");

    // Scroll
    if (scrollBtn && detailsSection) {
        scrollBtn.addEventListener("click", () => {
            detailsSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // Observer pentru animații
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, {
        threshold: 0.1
    });

    // Elemente animate
    const animatedElements = [
        document.querySelector(".hero-title"),
        document.querySelector(".heart-icon"),
        document.querySelector(".section-heading"),
        document.querySelector(".cta-button"),
        document.querySelector(".footer-text")
    ];

    animatedElements.forEach((el) => {
        if (el) {
            el.classList.add("fade-in-up");
            observer.observe(el);
        }
    });

});
