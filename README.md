# SK.sys — Sanjay Karki's Personal Portfolio

> Personal portfolio website for **Sanjay Karki**. Built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies.

🌐 **Live site:** [sanjaykarki.com.np](https://sanjaykarki.com.np)

---

## Overview

A dark-themed, single-page portfolio webiste. Designed for performance and readability, with zero runtime dependencies.

---

## Features

- **Animated terminal** in the hero section with a typewriter effect
- **Smooth scroll** navigation with active section tracking
- **Scroll progress bar** along the top of the viewport
- **Fade-up animations** powered by IntersectionObserver
- **Fully responsive** — mobile-first layout with a hamburger menu
- **Email obfuscation** — contact address rendered via unicode escape sequences to deter scrapers
- **Back-to-top button** that appears on scroll
- Google Fonts loaded via `preconnect` for performance

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | About | Bio, background, and career stats |
| 02 | Skills | Technical toolkit across 8 skill categories |
| 03 | Experience | Full work history |
| 04 | Certifications | Red Hat, VMware, Microsoft Azure, and more |
| 05 | Contact | Email, website, LinkedIn, and GitHub links |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styles | CSS3 (custom properties, grid, flexbox) |
| Scripts | Vanilla JavaScript (ES5-compatible) |
| Fonts | [Syne](https://fonts.google.com/specimen/Syne), [DM Mono](https://fonts.google.com/specimen/DM+Mono), [Lora](https://fonts.google.com/specimen/Lora) via Google Fonts |
| Hosting | GitHub Pages |

---

## File Structure

```
/
├── index.html      # Page structure and content
├── style.css       # All styles and responsive rules
├── script.js       # Terminal animation, menu, scroll, observers
└── README.md
```

---

## Getting Started

No build step required. Clone and open directly in a browser:

```bash
git clone https://github.com/sanjaykarki/sanjaykarki.git
cd sanjaykarki
open index.html
```

Or just serve it locally with any static server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## Deployment

The site is deployed via **GitHub Pages** from the `main` branch.

To deploy your own fork:

1. Go to **Settings → Pages** in your GitHub repository
2. Set source to `Deploy from a branch` → `main` → `/ (root)`
3. Save — GitHub will publish the site and provide a `*.github.io` URL

For a custom domain, add a `CNAME` file to the root with your domain name, then configure your DNS with the appropriate `A` or `CNAME` records as per [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## Browser Support

Works in all modern browsers. The CSS uses `100svh` (small viewport height) for the mobile hero — supported in Safari 15.4+, Chrome 108+, Firefox 101+. Older browsers fall back gracefully to standard block layout.

---

## License

This project is personal and not intended as a template. Feel free to draw inspiration, but please don't copy it wholesale and present it as your own work.

---

*Built with care - no frameworks were harmed in the making of this site.*