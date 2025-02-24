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
        </footer>
    `;

    // Append the footer to the page
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});
