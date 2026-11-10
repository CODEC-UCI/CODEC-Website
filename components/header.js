document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header>
        <a href="index.html" class="header-logo">
            <img src="images/logos/logo2.png" alt="CODEC Home Button">
        </a>
        
        <button class="menu-toggle" aria-label="Toggle navigation">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>

        <div class="nav-links">
            <div class="nav-dropdown">
                <button class="header-glow nav-dropdown-toggle" aria-expanded="false" aria-controls="about-submenu">About</button>
                <div class="nav-submenu" id="about-submenu">
                    <a href="what-we-do.html" class="header-glow">What We Do</a>
                    <a href="board-members.html" class="header-glow">Board Members</a>
                    <!-- <a href="history.html" class="header-glow">History</a> -->
                </div>
            </div>
            <a href="events.html" class="header-glow">Events</a>
            <a href="resources.html" class="header-glow">Resources</a>
            <a href="https://codec.clotho.ics.uci.edu/" class="header-glow">CODEC Hub</a>
            <a href="contact-us.html" class="header-glow">Contact Us</a>
        </div>
    </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // MOBILE DRAWER TOGGLE ENGINE
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const aboutDropdown = document.querySelector('.nav-dropdown');
    const aboutToggle = document.querySelector('.nav-dropdown-toggle');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // Adds/removes active classes to animate the hamburger bars and show/hide the menu
            menuToggle.classList.toggle('is-active');
            navLinks.classList.toggle('menu-open');
        });
    }

    if (aboutDropdown && aboutToggle) {
        aboutToggle.addEventListener('click', function() {
            const isOpen = aboutDropdown.classList.toggle('is-open');
            aboutToggle.setAttribute('aria-expanded', String(isOpen));
        });

        document.addEventListener('click', function(event) {
            if (!aboutDropdown.contains(event.target)) {
                aboutDropdown.classList.remove('is-open');
                aboutToggle.setAttribute('aria-expanded', 'false');
            }
        });

        aboutDropdown.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                aboutDropdown.classList.remove('is-open');
                aboutToggle.setAttribute('aria-expanded', 'false');
                aboutToggle.focus();
            }
        });
    }
});
