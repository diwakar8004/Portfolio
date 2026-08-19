# Neural Command Center — Portfolio

A cyber‑themed, static HTML/CSS/JavaScript portfolio showcasing the classified neural command center of Dhyanchand Gond.

## Features

- **HTML5** — modern structure with semantic markup
- **Vanilla CSS** — hand‑written styles in inline `<style>` blocks per page (no Tailwind CLI build step)
- **Responsive Design** — mobile‑first layouts across desktop, tablet, and mobile
- **Interactive JS** — cursor trails, scroll‑reveal animations, counter animations, heatmap, and project filtering
- **Static & Deployable** — no build step required; open `index.html` directly or host on any static server

## Prerequisites

- A modern browser (Chrome, Firefox, Safari, Edge)
- No Node.js required for viewing the site

## Project Structure

```
Portfolio/
├── index.html                       # Entry point (loader → redirects to hero_laboratory.html)
├── pages/
│   ├── hero_laboratory.html         # Home / landing page
│   ├── about_dimension.html          # About / dossier
│   ├── skills_universe.html          # Skills matrix
│   ├── project_galaxy.html           # Projects showcase
│   ├── achievement_timeline.html     # Timeline / mission log
│   ├── contact_portal.html           # Contact form (Web3Forms)
│   └── diwakar-avatar.jpg            # Avatar image
├── public/
│   ├── favicon.ico                   # Site favicon
│   ├── manifest.json                 # Web app manifest
│   └── Dhyanchand_Gond_Resume.pdf    # Downloadable resume
├── package.json                      # Dependency manifest (legacy Tailwind config — not used at runtime)
├── tailwind.config.js                # Tailwind configuration (legacy — not used at runtime)
└── README.md
```

## Styling

All styles are written as hand‑crafted CSS in `<style>` blocks within each HTML file. The `package.json` and `tailwind.config.js` are legacy artifacts from the original template scaffold and are **not** used by the current pages — no build step is needed.

## Deployment

This is a static site. Simply serve the directory with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

Or open `index.html` directly in a browser for local preview.

## Integrations

- **GitHub** — profile and repository links
- **Web3Forms** — contact form submission (`contact_portal.html`)
- **LinkedIn** — professional profile link

## Acknowledgements

Built with ❤️ by Dhyanchand Gond.
