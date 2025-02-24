document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
        <footer>
            <div class="footer-wrapper">
                <div class="footer-brand">
                    <h2>Baguette Maison FOOD OPC</h2>
                    <p><strong>French Sushi™</strong></p>
                    <p>Subsidiary of LPP Inc. - FR40981307655</p>
                </div>
                <div class="footer-cta">
                    <p class="trust-indicator">Trusted by 500+ satisfied customers</p>
                    <a href="/order" class="cta-btn">Place Your Order Now</a>
                    <p class="security-note">No obligation | Secure &amp; Confidential</p>
                </div>
                <nav class="footer-nav">
                    <ul>
                        <li><a href="legal.html">Legal</a></li>
                        <li><a href="https://career.baguettemaison.com">Careers</a></li>
                        <li><a href="pages/contact.html">Contact Us</a></li>
                        <li><a href="pages/cookies.html">Cookies</a></li>
                    </ul>
                </nav>
                <div class="footer-contact">
                    <a href="mailto:info@baguettemaison.com" class="email-btn">✉️ info@baguettemaison.com</a>
                </div>
            </div>
            <style>
                footer {
                    background: #111;
                    color: #fff;
                    padding: 20px 5%;
                    box-shadow: 0 -4px 10px rgba(0,0,0,0.1);
                }
                .footer-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                    max-width: 1200px;
                    margin: 0 auto;
                    text-align: center;
                }
                .footer-brand h2 {
                    font-size: 20px;
                    margin-bottom: 5px;
                    color: #ff6600;
                }
                .footer-brand p {
                    margin: 0;
                    opacity: 0.8;
                    font-size: 13px;
                }
                .footer-cta .trust-indicator {
                    font-size: 14px;
                    margin-bottom: 5px;
                    color: #ccc;
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
                    margin-bottom: 5px;
                }
                .cta-btn:hover {
                    background: #e55b00;
                }
                .security-note {
                    font-size: 12px;
                    color: #bbb;
                    margin: 0;
                }
                .footer-nav ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 15px;
                }
                .footer-nav ul li a {
                    text-decoration: none;
                    color: #ff6600;
                    font-weight: 600;
                    transition: color 0.3s;
                }
                .footer-nav ul li a:hover {
                    color: #ffa366;
                }
                .footer-contact .email-btn {
                    background: #ff6600;
                    color: #fff;
                    padding: 10px 15px;
                    border-radius: 5px;
                    font-weight: bold;
                    text-decoration: none;
                    transition: background 0.3s;
                }
                .footer-contact .email-btn:hover {
                    background: #e55b00;
                }
                @media screen and (min-width: 768px) {
                    .footer-wrapper {
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        text-align: left;
                    }
                    .footer-brand, .footer-cta, .footer-nav, .footer-contact {
                        flex: 1;
                    }
                    .footer-cta {
                        text-align: center;
                    }
                }
            </style>
        </footer>
    `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});
