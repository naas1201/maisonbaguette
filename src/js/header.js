document.addEventListener("DOMContentLoaded", function() {
    // Debug: Log to confirm the DOM is loaded and script is running
    console.log("Header script loaded: DOMContentLoaded fired.");

    const headerHTML = `
        <header>
            <div class="container">
                <a href="index.html" class="logo">
                    <img src="public/images/logo.png" alt="Baguette Maison Logo">
                </a>
                <nav>
                    <ul>
                        <li><a href="pages/about.html">About</a></li>
                        <li><a href="pages/menu.html">Menu</a></li>
                        <li><a href="pages/contact.html">Contact</a></li>
                        <li><a href="https://order.baguettemaison.com" class="order-btn">Order Now</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    `;

    // Insert the header into the page
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
    console.log("Header HTML inserted into the DOM.");
});
