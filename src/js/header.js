document.addEventListener("DOMContentLoaded", function () {
    // Insert the header into the page
    const headerHTML = `
        <header>
            <div class="logo">
                <a href="/"><img src="src/images/logo.png" alt="Logo"></a>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/order" class="order-btn">Order Now</a></li>
                </ul>
            </nav>
        </header>
        <style>
            /* Ensure the header is responsive */
            header {
                width: 100%;
                padding: 10px 5%;
                background: #fff;
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
            }

            /* Make sure the logo scales correctly */
            .logo img {
                max-width: 150px;
                height: auto;
                display: block;
            }

            /* Navigation menu */
            nav ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                gap: 15px;
            }

            nav ul li {
                display: inline-block;
            }

            nav ul li a {
                text-decoration: none;
                font-size: 16px;
                font-weight: 600;
                color: #333;
                transition: color 0.3s ease-in-out;
            }

            nav ul li a:hover {
                color: #ff6600;
            }

            /* Order button for CTA */
            .order-btn {
                background: #ff6600;
                color: white;
                padding: 8px 12px;
                border-radius: 5px;
                font-weight: bold;
                transition: background 0.3s ease;
            }

            .order-btn:hover {
                background: #e55b00;
            }

            /* Mobile Menu - Stack the items */
            @media screen and (max-width: 768px) {
                header {
                    flex-direction: column;
                    text-align: center;
                    padding: 10px 2%;
                }

                .logo img {
                    max-width: 120px;
                }

                nav ul {
                    flex-direction: column;
                    gap: 10px;
                    margin-top: 10px;
                }

                .order-btn {
                    display: inline-block;
                    padding: 10px 16px;
                }
            }
        </style>
    `;

    // Append the header to the page
    const headerContainer = document.createElement("div");
    headerContainer.innerHTML = headerHTML;
    document.body.prepend(headerContainer);
});
