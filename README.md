# 💻 Ben Brady - Personal Portfolio

A professional personal portfolio webpage showcasing my projects, career history, and tech stack — built with React & Vite, featuring a dynamic theme system and live project demos.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- 🎨 **Dynamic Theme System** — Toggle between dark and light mode with 5 accent colour palettes (Teal, Purple, Blue, Orange, Pink), persisted to `localStorage`
- 🌟 **Interactive Particle Hero** — Custom HTML5 Canvas particle network that dynamically matches the active theme and repels away from the user's cursor
- 🧭 **Sticky Navigation** — Glassmorphism navbar with section links, palette switcher dots, and responsive mobile hamburger menu
- 📜 **Scroll Fade-In Animations** — Sections and cards elegantly fade into view as you scroll, powered by `IntersectionObserver` with `MutationObserver` re-observation
- 📱 **Fully Responsive** — Optimised for desktop, tablet, and mobile viewports
- 🚀 **Project Showcases** — Full-width alternating layout sections with live iframe demos for React projects and inline YouTube video demos for Discord bots
- 🛠️ **Tech Stack Grid** — 2×2 categorised layout with Devicon logos and "Used in" project cross-references
- 💼 **Career Timeline** — Vertical timeline with company logos, role details, dates, and detailed bullet-point descriptions
- 👤 **GitHub Profile Picture** — Circular avatar with accent-coloured gradient glow border
- ⚡ **Fast & Lightweight** — Built with Vite for instant HMR and optimised production bundles

---

## 📜 Live Demo

[![About Me Webpage Showcase](src/assets/About%20Me%20Webpage%20Showcase.png)](https://benbrady96.is-a.dev/)

---

## 🖥️ Sections

| Section | Description |
|---------|-------------|
| **Navbar** | Sticky navigation with section links, 5 colour palette dots, dark/light toggle, and mobile hamburger menu |
| **Hero** | Full-viewport intro with profile picture, name, tagline, GitHub/LinkedIn CTAs, and scroll indicator |
| **About** | Professional summary with 2×2 highlight cards (automation, cost savings, AI, analytics) |
| **Career Timeline** | Vertical timeline of 3 roles with company logos — Zencargo, Travis Perkins, Ladbrokes Coral |
| **Skills** | 2×2 tech stack grid with Devicon icons across Languages, AI & Automation, Front-End / UI, and Tools & Infrastructure |
| **Projects** | 7 full-width project showcases with live iframe demos, YouTube video embeds, feature lists, and tech tags |
| **Contact** | Footer with social links and location |

---

## 🚀 Featured Projects

| Project | Description | Demo |
|---------|-------------|------|
| [📄 Invoice Generator](https://github.com/BenBrady96/invoice-generator) | Professional client-side PDF invoice generator with 6 premium templates | [🔗 Live](https://benbrady96.github.io/invoice-generator/) |
| [🤖 Agentic Discord Admin](https://github.com/BenBrady96/agentic-discord-admin) | Autonomous Discord admin bot with ReAct agentic loop | [▶ YouTube](https://www.youtube.com/watch?v=BwE0c9SxiMs) |
| [📊 Discord AI Raid Reporter](https://github.com/BenBrady96/discord-fflogs-ai-raid-reporter) | AI-powered raid performance reports from FFLogs | [▶ YouTube](https://www.youtube.com/watch?v=sjbn3MEzjg4) |
| [🔥 React Fire Embers](https://github.com/BenBrady96/react-fire-embers) | Mesmerising fire particle effect — pure CSS keyframes | [🔗 Live](https://benbrady96.github.io/react-fire-embers/) |
| [✨ React Starfield](https://github.com/BenBrady96/react-starfield) | Twinkling starfield with 2000 stars on HTML5 Canvas | [🔗 Live](https://benbrady96.github.io/react-starfield/) |
| [❄️ React Snowfall](https://github.com/BenBrady96/react-snowfall) | Gentle snowfall with 100 glowing snowflakes | [🔗 Live](https://benbrady96.github.io/react-snowfall/) |
| [⛄ React Talking Snowman](https://github.com/BenBrady96/react-talking-snowman) | Animated CSS-only snowman with cycling speech bubbles | [🔗 Live](https://benbrady96.github.io/react-talking-snowman/) |

---

## 📦 Setup

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/BenBrady96/about-me-webpage.git
cd about-me-webpage
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173/about-me-webpage/](http://localhost:5173/about-me-webpage/) in your browser.

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 🏗️ Project Structure

```
about-me-webpage/
├── index.html                          # HTML entry with SEO meta tags
├── vite.config.js                      # Vite config (GitHub Pages base URL)
├── package.json                        # Dependencies & deploy scripts
├── public/
│   └── vite.svg
└── src/
    ├── main.jsx                        # React entry point (ThemeProvider wrapper)
    ├── App.jsx                         # Root component — assembles all sections
    ├── index.css                       # Global design system & CSS variables (dark/light)
    ├── context/
    │   └── ThemeContext.jsx            # Dark/light mode & 5 colour palette state
    ├── hooks/
    │   └── useScrollFadeIn.js          # IntersectionObserver + MutationObserver fade-in
    └── components/
        ├── Navbar.jsx / Navbar.css     # Sticky navbar with palette dots & mobile menu
        ├── Hero.jsx / Hero.css         # Full-viewport hero with avatar & scroll indicator
        ├── About.jsx / About.css       # Professional summary & 2×2 highlight cards
        ├── Timeline.jsx / Timeline.css # Career timeline with company logos
        ├── Skills.jsx / Skills.css     # 2×2 tech stack grid with Devicon icons
        ├── Projects.jsx / Projects.css # Full-width project showcases with iframe/YouTube demos
        └── Contact.jsx / Contact.css   # Footer with social links
```

---

## 🛠️ Built With

- **[React](https://react.dev/)** — Component-based UI
- **[Vite](https://vite.dev/)** — Lightning-fast dev server & build tool
- **[gh-pages](https://www.npmjs.com/package/gh-pages)** — GitHub Pages deployment
- **[Google Fonts](https://fonts.google.com/)** — Inter & Outfit typefaces
- **[Devicon](https://devicon.dev/)** — Technology logos for the skills section

---

## 📄 License

MIT - see [LICENSE](LICENSE) for details.

---

## 📧 Contact

- [GitHub](https://github.com/BenBrady96)
- [LinkedIn](https://www.linkedin.com/in/ben-brady-b241642b4/)
