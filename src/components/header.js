document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header>
        <a href="index.html" class="header-logo">
            <img src="images/logos/OFFICIAL_LOGO.png" alt="CODEC Home">
        </a>
        <div class="nav-links">
            <a href="about-us.html" class="header-glow">About Us</a>
            <a href="events.html" class="header-glow">Events</a>
            <a href="contact-us.html" class="header-glow">Contact Us</a>
        </div>
    </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
