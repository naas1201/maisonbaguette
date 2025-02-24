document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <header>
            <div class="header-wrapper">
                <div class="logo">
                    <a href="/"><img src="/images/logo.png" alt="Baguette Maison Logo"></a>
                </div>
                <nav class="main-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <div class="cta-container">
                    <p class="header-tagline">Experience Authentic Parisian Flavors – Fast, Secure & Trusted by 500+ Customers</p>
                    <a href="/order" class="cta-btn">Order Now</a>
                    <p class="trust-text">No obligation | Secure & Confidential</p>
                </div>
            </div>
            <style>
                /* Mobile-first Styles */
                header {
                    width: 100%;
                    background: #fff;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    padding: 10px 5%;
                }
                .header-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                }
                .logo img {
                    max-width: 140px;
                    height: auto;
                }
                .main-nav ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                }
                .main-nav ul li a {
                    text-decoration: none;
                    font-size: 16px;
                    font-weight: 600;
                    color: #333;
                    transition: color 0.3s ease;
                }
                .main-nav ul li a:hover {
                    color: #ff6600;
                }
                .cta-container {
                    text-align: center;
                }
                .header-tagline {
                    font-size: 14px;
                    color: #555;
                    margin: 0 0 5px;
                    line-height: 1.3;
                }
                .cta-btn {
                    background: #ff6600;
                    color: #fff;
                    padding: 10px 20px;
                    border-radius: 5px;
                    font-weight: bold;
                    text-decoration: none;
                    transition: background 0.3s ease;
                    display: inline-block;
                }
                .cta-btn:hover {
                    background: #e55b00;
                }
                .trust-text {
                    font-size: 12px;
                    color: #777;
                    margin-top: 5px;
                }
                /* Desktop Styles */
                @media screen and (min-width: 768px) {
                    .header-wrapper {
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                    }
                    .main-nav ul {
                        flex-direction: row;
                        gap: 20px;
                    }
                    .cta-container {
                        text-align: right;
                    }
                    .header-tagline {
                        font-size: 16px;
                        margin: 0 0 8px;
                    }
                }
            </style>
        </header>
    `;

    const headerContainer = document.createElement("div");
    headerContainer.innerHTML = headerHTML;
    document.body.prepend(headerContainer);
});
