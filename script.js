let lastScrollTop = 0;
let header = document.querySelector(".discovery-header");
let logo = document.querySelector(".logo");

const originalLogo = "logo-light.svg"; // Black background logo
const scrolledLogo = "logo-dark.svg";  // White background logo

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 50) { // If scrolled down more than 50px
        header.classList.add("scrolled");
        logo.src = scrolledLogo;
    } else {
        header.classList.remove("scrolled");
        logo.src = originalLogo;
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
