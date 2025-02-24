document.addEventListener("DOMContentLoaded", function () {
    // Load Header and Footer from HTML files
    loadHTML("/header.html", "header");
    loadHTML("/footer.html", "footer");

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

    // Function to load external HTML components
    function loadHTML(file, elementId) {
        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load ${file}`);
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error("Error loading component:", error));
    }
});
