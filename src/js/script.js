document.addEventListener("DOMContentLoaded", function () {
    // Load Header and Footer
    loadComponent("header", "src/js/header.html");
    loadComponent("footer", "src/js/footer.html");

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

    // Utility Function to Load External Components
    function loadComponent(tag, filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                document.querySelector(tag).innerHTML = data;
            })
            .catch(error => console.error(`Error loading ${filePath}:`, error));
    }
});
