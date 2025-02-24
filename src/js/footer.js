(() => {
  // Function to load footer.css dynamically if not already loaded
  const loadFooterCSS = () => {
    if (!document.querySelector('link[href="src/css/footer.css"]')) {
      const footerCSSLink = document.createElement("link");
      footerCSSLink.rel = "stylesheet";
      footerCSSLink.href = "/src/css/footer.css";
      document.head.appendChild(footerCSSLink);
    }
  };

  // Function to insert the footer HTML structure
  const insertFooterHTML = () => {
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
      </footer>
    `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  };

  // Initialize footer when DOM is ready
  const initFooter = () => {
    loadFooterCSS();
    insertFooterHTML();
  };

  // Execute immediately if DOM is ready, otherwise wait for DOMContentLoaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFooter);
  } else {
    initFooter();
  }
})();
