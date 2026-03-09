# Emma Abraham — Personal Portfolio

A personal portfolio website built with React and Vite, hosted on GitHub Pages.

🔗 **Live site**: [emmaabraham04.github.io](https://emmaabraham04.github.io/)

---

## About

This site showcases my experience, campus involvement, projects, and skills as a Computer Science student at Clemson University with minors in Cybersecurity and Artificial Intelligence.

---

## Built With

- [React 19](https://react.dev/) — UI framework
- [Vite 7](https://vitejs.dev/) — build tool and dev server
- [gh-pages](https://github.com/tschaub/gh-pages) — GitHub Pages deployment
- [ESLint](https://eslint.org/) — code linting

---

## Project Structure

```
my-portfolio/
├── public/
│   ├── Best.jpg                  # Profile photo
│   └── EmmaAbrahamResume.pdf     # Resume download
├── src/
│   ├── App.jsx                   # Main component (entire site)
│   └── main.jsx                  # React entry point
├── index.html                    # HTML shell
├── vite.config.js                # Vite configuration
├── package.json                  # Dependencies and scripts
└── eslint.config.js              # ESLint configuration
```

---

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/emmaabraham04/emmaabraham04.github.io.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

The dev server supports hot module replacement — changes appear instantly without a full reload.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start local dev server at `localhost:5173` |
| `npm run build` | Build production-ready files into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |
| `npm run deploy` | Build and deploy to GitHub Pages |

---

## Deployment

This site is deployed to GitHub Pages using the `gh-pages` package.

### First-time setup

1. Make sure your repo is pushed to GitHub.

2. In your repo on GitHub, go to **Settings → Pages** and set the source branch to `gh-pages`.

3. Confirm `vite.config.js` has the correct base path:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/',
   })
   ```

### Deploy

```bash
npm run deploy
```

This runs `npm run build` first (via the `predeploy` script), then pushes the `dist/` folder to the `gh-pages` branch. GitHub Pages serves from that branch automatically.

Your site will be live at `https://emmaabraham04.github.io` within a minute or two.

---

## Customization

All content lives in `src/App.jsx`. To update:

- **Color palette** — edit the `c` object at the top of `App.jsx`
- **Personal info** — update the name, tagline, and links in the left sidebar section
- **Experience / Projects / etc.** — find the relevant `<Section>` block and edit the text
- **Skills** — update the `LANGUAGES`, `TOOLS`, and `SOFT_SKILLS` arrays at the top of the file
- **Profile photo** — replace `public/Best.jpg` (keep the same filename, or update the `src` in the `<img>` tag)
- **Resume** — replace `public/EmmaAbrahamResume.pdf`

---

## Layout

The site uses a three-column fixed layout:

| Column | Width | Contents |
|--------|-------|----------|
| Left sidebar | 230px | Photo, name, nav links, external links |
| Main content | fluid | About, Experience, Involvement, Awards, Projects |
| Right sidebar | 200px | Skills (Languages, Tools, Soft Skills) |

On screens narrower than 900px, both sidebars hide and the main content goes full width.

---

## License

[MIT](http://kopplin.mit-license.org/)
