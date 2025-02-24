document.addEventListener("DOMContentLoaded", () => {
  // Dynamically load header.css from src/css/header.css if not already loaded
  if (!document.querySelector('link[href="src/css/header.css"]')) {
    const headerCSSLink = document.createElement("link");
    headerCSSLink.rel = "stylesheet";
    headerCSSLink.href = "src/css/header.css";
    document.head.appendChild(headerCSSLink);
  }

  // Define the header HTML structure
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
          <p class="header-tagline">
            Experience Authentic Parisian Flavors – Fast, Secure & Trusted by 500+ Customers
          </p>
          <a href="/order" class="cta-btn">Order Now</a>
          <p class="trust-text">No obligation | Secure & Confidential</p>
        </div>
      </div>
    </header>
  `;

  // Create a container element and set its innerHTML to the header structure
  const headerContainer = document.createElement("div");
  headerContainer.innerHTML = headerHTML;

  // Prepend the header container to the body
  document.body.prepend(headerContainer);
});
