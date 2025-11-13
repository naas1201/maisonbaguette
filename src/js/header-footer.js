(function() {
  /* --- Embedded CSS for Header & Footer --- */
  var css = `
    /* General Reset */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    /* Favicon is handled separately */
    
    /* Header Styles */
    header {
      background-color: #1e293b; /* Dark slate blue for professional look */
      color: #fff;
      padding: 15px 20px;
      font-family: 'Inter', sans-serif;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .header-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .logo {
      font-size: 1.8em;
      font-weight: 700;
      color: #dc2626;
      text-decoration: none;
      font-family: 'Poppins', sans-serif;
    }
    .logo:hover {
      color: #b91c1c;
    }
    .nav-menu ul {
      list-style: none;
      display: flex;
      gap: 30px;
      align-items: center;
      margin: 0;
    }
    .nav-menu ul li a {
      color: #cbd5e1;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95em;
      transition: color 0.3s ease;
    }
    .nav-menu ul li a:hover {
      color: #dc2626;
    }
    .cta-contact {
      background-color: #dc2626; /* Primary red */
      color: #fff;
      padding: 12px 24px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      font-size: 0.95em;
    }
    .cta-contact:hover {
      background-color: #b91c1c;
      transform: translateY(-1px);
      box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
    }
    @media (max-width: 768px) {
      .header-container {
        flex-direction: column;
        gap: 15px;
      }
      .nav-menu ul {
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }
    }
    
    /* Footer Styles */
    footer {
      background-color: #020617; /* Darker background */
      color: #cbd5e1;
      padding: 40px 20px 20px;
      font-family: 'Inter', sans-serif;
      border-top: 1px solid #1e293b;
    }
    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-bottom: 20px;
    }
    .footer-section h4 {
      color: #f1f5f9;
      margin-bottom: 15px;
      font-size: 1.1em;
      font-weight: 600;
    }
    .footer-section ul {
      list-style: none;
      padding: 0;
    }
    .footer-section ul li {
      margin-bottom: 10px;
    }
    .footer-section ul li a {
      color: #94a3b8;
      text-decoration: none;
      font-weight: 400;
      transition: color 0.3s ease;
      font-size: 0.9em;
    }
    .footer-section ul li a:hover {
      color: #dc2626;
    }
    .footer-section p {
      margin: 8px 0;
      font-size: 0.9em;
      color: #94a3b8;
      line-height: 1.5;
    }
    .footer-section a {
      color: #dc2626;
      text-decoration: none;
      font-weight: 500;
    }
    .footer-section a:hover {
      color: #b91c1c;
    }
    .social-links {
      margin-top: 15px;
      display: flex;
      gap: 15px;
    }
    .social-links a {
      color: #94a3b8;
      text-decoration: none;
      font-size: 1.1em;
      padding: 8px;
      border-radius: 6px;
      background: #1e293b;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .social-links a:hover {
      color: #fff;
      background: #dc2626;
      transform: translateY(-1px);
    }
    .footer-bottom {
      border-top: 1px solid #1e293b;
      padding-top: 20px;
      text-align: center;
      color: #64748b;
      font-size: 0.85em;
    }
    .contact-info {
      background: #1e293b;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 15px;
    }
    .contact-info h4 {
      color: #dc2626;
      margin-bottom: 10px;
    }
    .contact-item {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 8px 0;
      color: #cbd5e1;
      font-size: 0.9em;
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
    faviconLink.type = 'image/x-icon';
    faviconLink.href = '/images/favicon.ico';
    document.head.appendChild(faviconLink);
  }

  /* --- Inject Header HTML --- */
  var headerHTML = `
    <div class="header-container">
      <a href="/index.html" class="logo">
        BaguetteMaison Properties
      </a>
      <nav class="nav-menu">
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="#units">Available Units</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      <a href="#contact" class="cta-contact">📞 Contact Owner</a>
    </div>
  `;
  var headerEl = document.getElementById('header');
  if (headerEl) {
    headerEl.innerHTML = headerHTML;
  }

  /* --- Inject Footer HTML --- */
  var footerHTML = `
    <div class="footer-container">
      <!-- Property Information -->
      <div class="footer-section">
        <h4>🏢 Property Details</h4>
        <ul>
          <li><a href="#units">Available Units</a></li>
          <li><a href="#pricing">Rental Rates</a></li>
          <li><a href="#location">Location Map</a></li>
          <li><a href="#amenities">Utilities & Services</a></li>
          <li><a href="#gallery">Photo Gallery</a></li>
        </ul>
      </div>
      
      <!-- Business Services -->
      <div class="footer-section">
        <h4>🎯 Perfect For</h4>
        <ul>
          <li><a href="#food-business">Food Stalls & Restaurants</a></li>
          <li><a href="#retail">Retail Shops</a></li>
          <li><a href="#auto-services">Auto Repair & Services</a></li>
          <li><a href="#storage">Storage & Warehousing</a></li>
          <li><a href="#truck-parking">Truck Parking</a></li>
        </ul>
      </div>
      
      <!-- Contact Information -->
      <div class="footer-section">
        <div class="contact-info">
          <h4>📍 Property Location</h4>
          <div class="contact-item">
            <span>📍</span>
            <span>Airport Road, Laoag City, Ilocos Norte</span>
          </div>
          <div class="contact-item">
            <span>🏢</span>
            <span>5 minutes from SM City Laoag</span>
          </div>
          <div class="contact-item">
            <span>📏</span>
            <span>231 sqm total area, 11 units available</span>
          </div>
          <div class="contact-item">
            <span>💰</span>
            <span>From ₱2,200/month</span>
          </div>
        </div>
      </div>
      
      <!-- Owner Contact -->
      <div class="footer-section">
        <h4>📞 Direct Contact</h4>
        <p><strong>Property Owner:</strong> BaguetteMaison Properties</p>
        <p>📧 Email: info@baguettemaison.com</p>
        <p>📱 Mobile: Available via Facebook</p>
        <p>🕒 Viewing Hours: Daily 8AM-6PM</p>
        
        <div class="social-links">
          <a href="https://facebook.com/BaguetteMaisonProperties" target="_blank">
            📘 Facebook
          </a>
          <a href="https://wa.me/639260488976" target="_blank">
            💬 WhatsApp
          </a>
        </div>
        
        <p style="margin-top: 15px; font-size: 0.85em; color: #64748b;">
          <strong>Why Choose Us:</strong><br>
          ✓ Direct owner - no broker fees<br>
          ✓ Flexible payment terms<br>
          ✓ Same-day viewing available<br>
          ✓ Professional property management
        </p>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2025 BaguetteMaison Properties. Premier Commercial Lots in Laoag City. 
      Property managed by LPP Group. All rights reserved.</p>
      <p style="margin-top: 5px;">
        <a href="/pages/legal.html">Legal</a> | 
        <a href="/pages/terms.html">Rental Terms</a> | 
        <a href="/pages/privacy.html">Privacy</a> |
        <a href="/pages/sitemap.html">Sitemap</a>
      </p>
    </div>
  `;
  var footerEl = document.getElementById('footer');
  if (footerEl) {
    footerEl.innerHTML = footerHTML;
  }
})();
