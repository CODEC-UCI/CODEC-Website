document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header>
        <a href="index.html" class="header-logo">
            <img src="images/logos/OFFICIAL_LOGO.png" alt="CODEC Home">
        </a>
        
        <button class="menu-toggle" aria-label="Toggle navigation">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>

        <div class="nav-links">
            <a href="about-us.html" class="header-glow">About Us</a>
            <a href="events.html" class="header-glow">Events</a>
            <a href="https://codec.clotho.ics.uci.edu/" class="header-glow">Club Hub</a>
            <a href="contact-us.html" class="header-glow">Contact Us</a>
        </div>
    </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // MOBILE DRAWER TOGGLE ENGINE
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // Adds/removes active classes to animate the hamburger bars and show/hide the menu
            menuToggle.classList.toggle('is-active');
            navLinks.classList.toggle('menu-open');
        });
    }
});