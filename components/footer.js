document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <footer>
        <div class="footer-content">
            <a href="index.html">
                <img src="images/logos/CODEC.jpg" alt="CODEC Logo" class="footer-logo">
            </a>
            <div class="footer-links-stack">
                <a href="contact-us.html" class="glow-link">Contact Us</a>
                <a href="https://discord.gg/QSYSCFb" target="_blank" class="glow-link">Discord</a>
                <a href="https://www.instagram.com/codec.uci/" target="_blank" class="glow-link">Instagram</a>
                <a href="https://www.linkedin.com/company/codec-uci/posts/?feedView=all" target="_blank" class="glow-link">LinkedIn</a>
                <a href="https://linktr.ee/codec.uci" target="_blank" class="glow-link">LinkTree</a>
            </div>
        </div>
        <p class="copyright">© 2026 CODEC | Community of Diverse Empowerment in Computing</p>
    </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
