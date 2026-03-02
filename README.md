# 💻 Ben Brady — Personal Portfolio

A professional personal portfolio webpage showcasing my projects, tech stack, and professional experience — built with React & Vite.

**[🌐 View Live Site →](https://benbrady96.github.io/about-me-webpage/)**

React Vite JavaScript License

---

## ✨ Features

- 🎨 **Dark Navy & Teal Theme** — Professional dark mode design with a sleek `#0a192f` / `#64ffda` colour palette
- 📜 **Scroll Fade-In Animations** — Sections and cards elegantly fade into view as you scroll, powered by `IntersectionObserver`
- 📱 **Fully Responsive** — Optimised for desktop, tablet, and mobile viewports
- 🚀 **Project Showcase** — Interactive cards linking to all featured GitHub repositories
- 🛠️ **Tech Stack Grid** — Categorised skill tags across Languages, AI, Front-End, and Data
- 👤 **GitHub Profile Picture** — Circular avatar with a teal gradient glow border
- ⚡ **Fast & Lightweight** — Built with Vite for instant HMR and optimised production bundles

---

## 🖥️ Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-viewport intro with profile picture, name, tagline, and GitHub/LinkedIn CTAs |
| **About** | Professional summary with highlight cards (automation, cost savings, AI, analytics) |
| **Skills** | Tech stack grid with pill-style tags across 4 categories |
| **Projects** | 6 interactive project cards with descriptions, tech tags, and GitHub links |
| **Contact** | Footer with social links and location |

---

## 🚀 Featured Projects

| Project | Description | Tech |
|---------|-------------|------|
| [🤖 Agentic Discord Admin](https://github.com/BenBrady96/agentic-discord-admin) | Autonomous Discord admin bot with ReAct agentic loop | Python, Gemini API |
| [📊 Discord AI Raid Reporter](https://github.com/BenBrady96/discord-fflogs-ai-raid-reporter) | AI-powered raid performance reports from FFLogs | Python, Gemini API |
| [🔥 React Fire Embers](https://github.com/BenBrady96/react-fire-embers) | Mesmerising fire particle effect — pure CSS keyframes | React, CSS |
| [✨ React Starfield](https://github.com/BenBrady96/react-starfield) | Twinkling starfield with 2000 stars on HTML5 Canvas | React, Canvas |
| [❄️ React Snowfall](https://github.com/BenBrady96/react-snowfall) | Gentle snowfall with 100 glowing snowflakes | React, CSS |
| [⛄ React Talking Snowman](https://github.com/BenBrady96/react-talking-snowman) | Animated CSS-only snowman with cycling speech bubbles | React, CSS |

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
    ├── main.jsx                        # React entry point
    ├── App.jsx                         # Root component — assembles all sections
    ├── index.css                       # Global design system & CSS variables
    ├── hooks/
    │   └── useScrollFadeIn.js          # IntersectionObserver fade-in hook
    └── components/
        ├── Hero.jsx / Hero.css         # Full-viewport hero with avatar
        ├── About.jsx / About.css       # Professional summary & highlights
        ├── Skills.jsx / Skills.css     # Tech stack grid with tags
        ├── Projects.jsx / Projects.css # Project cards showcase
        └── Contact.jsx / Contact.css   # Footer with social links
```

---

## 🛠️ Built With

- **[React](https://react.dev/)** — Component-based UI
- **[Vite](https://vite.dev/)** — Lightning-fast dev server & build tool
- **[gh-pages](https://www.npmjs.com/package/gh-pages)** — GitHub Pages deployment
- **[Google Fonts](https://fonts.google.com/)** — Inter & Outfit typefaces

---

## 📄 License

MIT - see [LICENSE](LICENSE) for details.

---

## 📧 Contact

- [GitHub](https://github.com/BenBrady96)
- [LinkedIn](https://www.linkedin.com/in/ben-brady-b241642b4/)
