document.addEventListener("DOMContentLoaded", function () {
    // Load Header and Footer from HTML files
    loadComponent("header", "/src/components/header.html");
    loadComponent("footer", "/src/components/footer.html");

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

    // Utility Function to Load External HTML Components
    function loadComponent(id, file) {
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${file}`);
                }
                return response.text();
            })
            .then(html => {
                document.getElementById(id).innerHTML = html;
            })
            .catch(error => console.error(error));
    }
});
