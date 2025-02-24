document.addEventListener("DOMContentLoaded", function () {
    // Load Header and Footer from .js files
    loadScript("src/js/header.js");
    loadScript("src/js/footer.js");

    // Mobile Menu Toggle
    document.addEventListener("click", function (event) {
        if (event.target.matches(".menu-toggle")) {
            document.querySelector(".nav-links").classList.toggle("active");
        }
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    // Utility Function to Load External JS Components
    function loadScript(scriptPath) {
        const script = document.createElement("script");
        script.src = scriptPath;
        script.defer = true;
        document.body.appendChild(script);
    }
});
