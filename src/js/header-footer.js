(function() {
  /* --- Embedded CSS for Header & Footer --- */
  var css = `
    /* General Reset */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    /* Favicon is handled separately */
    
    /* Header Styles */
    header {
      background-color: #264653; /* Dark slate */
      color: #fff;
      padding: 10px 20px;
      font-family: 'Montserrat', sans-serif;
    }
    .header-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .logo img {
      max-height: 60px;
      width: auto;
      display: block;
    }
    .nav-menu ul {
      list-style: none;
      display: flex;
      gap: 20px;
      align-items: center;
      margin: 0;
    }
    .nav-menu ul li a {
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
    }
    .nav-menu ul li a:hover {
      color: #e76f51;
    }
    .cta-order {
      background-color: #e76f51; /* Accent color */
      color: #fff;
      padding: 10px 20px;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 700;
      transition: background 0.3s ease;
    }
    .cta-order:hover {
      background-color: #d65a43;
    }
    @media (max-width: 768px) {
      .header-container {
        flex-direction: column;
        gap: 10px;
      }
      .nav-menu ul {
        flex-direction: column;
        align-items: center;
      }
    }
    
    /* Footer Styles */
    footer {
      background-color: #264653;
      color: #fff;
      padding: 20px;
      font-family: 'Montserrat', sans-serif;
    }
    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .footer-left, .footer-middle, .footer-right {
      flex: 1;
      min-width: 200px;
      margin: 10px 0;
    }
    .footer-left ul,
    .footer-middle ul {
      list-style: none;
      padding: 0;
    }
    .footer-left ul li,
    .footer-middle ul li {
      margin-bottom: 8px;
    }
    .footer-left ul li a,
    .footer-middle ul li a {
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
    }
    .footer-left ul li a:hover,
    .footer-middle ul li a:hover {
      color: #e76f51;
    }
    .footer-right p {
      margin: 5px 0;
      font-size: 0.9em;
    }
    .footer-right a {
      color: #e76f51;
      text-decoration: none;
      font-weight: 600;
    }
    .social-links {
      margin-top: 10px;
    }
    .social-links a {
      margin-right: 10px;
      color: #fff;
      text-decoration: none;
      font-size: 1.2em;
      transition: color 0.3s ease;
    }
    .social-links a:hover {
      color: #e76f51;
    }
  `;
  var styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.appendChild(document.createTextNode(css));
  document.head.appendChild(styleEl);

  /* --- Ensure Favicon is Loaded --- */
  if (!document.querySelector('link[rel="icon"]')) {
    var faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.type = '/image/x-icon';
    faviconLink.href = '/images/favicon.ico';
    document.head.appendChild(faviconLink);
  }

  /* --- Inject Header HTML --- */
  var headerHTML = `
    <div class="header-container">
      <a href="/index.html" class="logo">
        <img src="/images/logo.png" alt="Baguette Maison Logo">
      </a>
      <nav class="nav-menu">
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/pages/about.html">About</a></li>
          <li><a href="/pages/menu.html">Menu</a></li>
          <li><a href="https://academy.baguettemaison.com" target="_blank">Academy</a></li>
          <li><a href="https://blog.baguettemaison.com" target="_blank">Blog</a></li>
          <li><a href="/pages/contact.html">Contact</a></li>
        </ul>
      </nav>
      <a href="https://wa.me/639260488976" class="cta-order" target="_blank">Order Now</a>
    </div>
  `;
  var headerEl = document.getElementById('header');
  if (headerEl) {
    headerEl.innerHTML = headerHTML;
  }

  /* --- Inject Footer HTML --- */
  var footerHTML = `
    <div class="footer-container">
      <!-- Left Column: Repeated Header Links -->
      <div class="footer-left">
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/pages/about.html">About</a></li>
          <li><a href="/pages/menu.html">Menu</a></li>
          <li><a href="https://blog.baguettemaison.com" target="_blank">Blog</a></li>
          <li><a href="/pages/contact.html">Contact</a></li>
        </ul>
      </div>
      <!-- Middle Column: Additional Pages -->
      <div class="footer-middle">
        <ul>
          <li><a href="/pages/legal.html">Legal</a></li>
          <li><a href="/pages/terms.html">Terms</a></li>
          <li><a href="/pages/careers.html">Careers</a></li>
          <li><a href="/pages/cookies.html">Cookies</a></li>
        </ul>
      </div>
      <!-- Right Column: Company Info & Social Links -->
      <div class="footer-right">
        <p>Baguette Maison FOOD OPC<br>French Sushi™</p>
        <p>Subsidiary of <a href="https://lpp.ovh" target="_blank">LPP Inc. - FR40981307655</a></p>
        <p>SEC Company registration number 2025020190665</p>
        <div class="social-links">
          <a href="https://instagram.com/thebaguettemaison" target="_blank">Instagram</a>
          <a href="https://wa.me/639260488976" target="_blank">WhatsApp</a>
          <a href="https://facebook.com/thebaguettemaison" target="_blank">Facebook</a>
        </div>
      </div>
    </div>
  `;
  var footerEl = document.getElementById('footer');
  if (footerEl) {
    footerEl.innerHTML = footerHTML;
  }
})();
