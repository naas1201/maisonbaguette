(() => {
  const loadFooterCSS = () => {
    if (!document.querySelector('link[href^="/src/css/footer.css"]')) {
      const footerCSSLink = document.createElement("link");
      footerCSSLink.rel = "stylesheet";
      footerCSSLink.href = "/src/css/footer.css?v=" + new Date().getTime(); // Cache Busting
      document.head.appendChild(footerCSSLink);
      console.log("Footer CSS loaded:", footerCSSLink.href);
    }
  };

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
              <li><a href="/legal.html">Legal</a></li>
              <li><a href="https://career.baguettemaison.com">Careers</a></li>
              <li><a href="/pages/contact.html">Contact Us</a></li>
              <li><a href="/pages/cookies.html">Cookies</a></li>
            </ul>
          </nav>
          <div class="footer-contact">
            <a href="mailto:info@baguettemaison.com" class="email-btn">✉️ info@baguettemaison.com</a>
          </div>
        </div>
      </footer>
    `;

    document.body.insertAdjacentHTML("beforeend", footerHTML);
    console.log("Footer inserted successfully.");
  };

  const initFooter = () => {
    loadFooterCSS();
    insertFooterHTML();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(initFooter, 0));
  } else {
    setTimeout(initFooter, 0);
  }
})();
