document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active"); // Add class when element is in the viewport
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    elementsToAnimate.forEach((element) => {
        observer.observe(element); // Observe each element
    });
});
