document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header>
        <a href="index.html" class="header-logo">
            <img src="images/OFFICAL_LOGO.png" alt="CODEC Home">
        </a>
        <div class="nav-links">
            <a href="about_us.html" class="header-glow">About Us</a>
            <a href="events.html" class="header-glow">Events</a>
            <a href="https://codec.clotho.ics.uci.edu/" class="header-glow">Club Hub</a>
            <a href="contact.html" class="header-glow">Contact Us</a>
        </div>
    </header>
    `;

    const footerHTML = `
    <footer>
        <div class="footer-content">
            <a href="index.html">
                <img src="images/CODEC.jpg" alt="CODEC Logo" class="footer-logo">
            </a>
            <div class="footer-links-stack">
                <a href="contact.html" class="contact-text-link">Contact Us</a>
                <a href="https://discord.gg/QSYSCFb" target="_blank" class="glow-link">Discord</a>
                <a href="https://www.instagram.com/codec.uci/" target="_blank" class="glow-link">Instagram</a>
            </div>
        </div>
        <p class="copyright">© 2026 CODEC | Community of Diverse Empowerment in Computing</p>
    </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
