window.onload = function () {

    // Redirect după 3 secunde
    setTimeout(function () {
        window.location.replace("https://storage.rcs-rds.ro/receive/fa70a871-0b54-4c53-b7c3-4aaca8804730");
    }, 3000);

    // Elemente
    const scrollBtn = document.getElementById("scroll-btn");
    const detailsSection = document.getElementById("details");

    // Scroll lin
    if (scrollBtn && detailsSection) {
        scrollBtn.addEventListener("click", function () {
            detailsSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // Observer pentru animații
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
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

    animatedElements.forEach(function (el) {
        if (el) {
            el.classList.add("fade-in-up");
            observer.observe(el);
        }
    });

};
