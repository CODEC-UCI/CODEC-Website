# CODEC Website Documentation

This document is a short guide for anyone who needs to understand, update, or maintain the CODEC website.

## What this site is

The CODEC website is a simple static website built with:
- **HTML5** for page structure
- **CSS** for styling
- **JavaScript** for shared component injection (header/footer) and dynamic mobile animations (mobile hamburger menu)
- **JSON and CSV files** for event and resource data

There is no complex build step, package install, or framework required. The site is mostly edited by changing files directly.

---

## Main parts of the website

### 1. Page files
These are the main pages visitors see:
- `index.html` — homepage
- `about-us.html` — about page
- `events.html` — event listing page
- `event-detail.html` — individual event details page
- `resources.html` — resources page
- `contact-us.html` — contact information page

### 2. Shared styling
- `style.css` — the main stylesheet for the whole site. Contains styling variables (`--dark-blue`, `--light-blue`, `--cream`) and responsive breakpoints at `768px`.

### 3. Shared UI components (JavaScript)
- `components/header.js` — inserts the navigation header and controls the mobile dropdown.
- `components/footer.js` — inserts the footer.

> ⚠️ **IMPORTANT:** To make changes to the header or footer, update *only* these JavaScript files. The changes will automatically apply across all pages. You do not need to edit headers and footers individually on each HTML file.

### 4. Data files
- `events.json` — stores event information shown on the Events page.
- `resources.csv` — stores resource information shown on the Resources page.

### 5. Images and media
- `images/` — site images, logos, event photos, and board photos.
- `fonts/` — custom fonts used by the site.

---

## Hosting & Technical Ecosystem

- **Domain & Subdomain:** The website is hosted under the `ics.uci.edu` subdomain.
- **Hosting Pipeline:** The code repository is managed and deployed through GitHub Pages / Web servers, which serve the files to the active UCI subdomain.
- **Administrative Access:** Managing DNS records or major server permissions is coordinated through the UCI ICS Tech Help Desk.

### Key Contacts
| Name / Department | Role / Purpose | Email |
| :--- | :--- | :--- |
| **Professor Alberto Krone-Martins** | Club Advisor / Faculty Contact | `algol@uci.edu` |
| **UCI ICS Help Desk** | Subdomain Management / Server Hosting | `helpdesk@ics.uci.edu` |

---

## How to run the site locally

Because this is a static website, you can usually view it by opening the HTML files directly in a browser. However, to ensure the JavaScript shared components (headers/footers) render correctly, you should run a local server:

### Option A: Python (Terminal)
Run a local server from your root project folder:
```bash
python -m http.server 8000
```
Then open: http://localhost:8000

### Option B: VS Code Extension (Recommended)
1. Install the **"Live Server"** extension in VS Code.
2. Click the **"Go Live"** button located at the bottom right corner of VS Code to spin up the local server automatically.

## How to update common content

### Update the homepage
Edit `index.html`.

### Update the header or footer
Edit `components/header.js` or `components/footer.js`.

### Add or edit an event
Refer to the detailed guide on our Google Drive for formatting the `events.json` data structure.

### Add or edit a resource
This process is automated! Updates sync on a weekly schedule pulling from the Resources Google Sheet Script straight into `resources.csv`.

### Update general page text
Edit the relevant HTML page directly, such as `about-us.html` or `contact-us.html`.

## Good maintenance practices
- **Asset Optimization:** Compress all images before uploading them. Large file sizes (above 1MB) slow down mobile loading times. Keep filenames descriptive and clean (e.g., `images/board/board-2026.png`).

- **Mobile Menu Safeguards:** Avoid changing navbar structural classes (`.menu-toggle` or `.nav-links`) without testing them on mobile viewports.

- **Check Your Links:** Verify that internal and external paths work correctly on a local server before deploying.

- Keep the repository organized so future maintainers can find content quickly.

## Keeping track of changes
This site is simple, so the easiest way to track updates is:
- Keep all modifications managed via Git.

- Write clear, active-voice commit messages (e.g., `Add mobile dropdown menu logic`).

- Log major content updates in the Website Google Doc.