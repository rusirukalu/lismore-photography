document.addEventListener("DOMContentLoaded", function() {
    // Animate navbar links on hover
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.3s ease";
        });
        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
        });
    });

    // Fade-in effect for About page image
    const aboutImage = document.querySelector(".about-image");
    if (aboutImage) {
        aboutImage.style.opacity = 0;
        aboutImage.style.transform = "scale(0.8)";
        setTimeout(() => {
            aboutImage.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            aboutImage.style.opacity = 1;
            aboutImage.style.transform = "scale(1)";
        }, 200);
    }

    // Button hover animation
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.3)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.boxShadow = "none";
        });
    });
});
