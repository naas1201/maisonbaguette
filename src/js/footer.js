document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
        <footer>
            <div class="footer-container">
                <div class="footer-brand">
                    <h2>Baguette Maison FOOD OPC</h2>
                    <p><strong>French Sushi™</strong></p>
                    <p>Subsidiary of LPP Inc. - FR40981307655</p>
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
                /* Footer Styling */
                footer {
                    background: #111;
                    color: #fff;
                    text-align: center;
                    padding: 20px 5%;
                    font-size: 14px;
                    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
                }

                .footer-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    max-width: 1200px;
                    margin: 0 auto;
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

                /* Footer Navigation */
                .footer-nav ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    gap: 15px;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .footer-nav ul li {
                    display: inline-block;
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

                /* Email Contact Button */
                .email-btn {
                    background: #ff6600;
                    color: white;
                    padding: 10px 15px;
                    border-radius: 5px;
                    font-weight: bold;
                    text-decoration: none;
                    display: inline-block;
                    transition: background 0.3s;
                }

                .email-btn:hover {
                    background: #e55b00;
                }

                /* Responsive Design */
                @media screen and (min-width: 768px) {
                    .footer-container {
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        text-align: left;
                    }

                    .footer-nav ul {
                        gap: 20px;
                    }
                }
            </style>
        </footer>
    `;

    // Append the footer to the page
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});
