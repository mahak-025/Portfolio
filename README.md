# Mahak Chouhan — Portfolio Website

A dark, IDE-themed React portfolio. The whole page looks like a code editor —
file tabs at the top (Hero.jsx, About.jsx, Skills.json, Projects.jsx, Contact.txt),
syntax-highlighted code blocks, and a VS Code–style status bar.

## 1. Run it locally

You need [Node.js](https://nodejs.org) installed (v18+).

```bash
cd portfolio-mahak
npm install
npm run dev
```

This opens the site at `http://localhost:5173`. Edit `src/App.jsx` and it
will hot-reload automatically.

## 2. Before you deploy — update these placeholders

Open `src/App.jsx` and search for:

- `mahak.chouhan@example.com` → your real email
- `/in/mahak-chouhan` (LinkedIn) → your real LinkedIn URL
- `/mahak-chouhan` (GitHub) → your real GitHub URL
- `add repo link` (in each project card) → link to that project's repo
- "Download Resume" button → currently does nothing (`href="#"`). Put your
  resume PDF in the `public/` folder (e.g. `public/resume.pdf`) and change
  the button to `<a className="btn" href="/resume.pdf" download>`

## 3. Build for production

```bash
npm run build
```

This creates a `dist/` folder with the final static site.

## 4. Deploy (free options)

**Vercel (easiest):**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo.
3. Framework preset: Vite. Click Deploy.

**Netlify:**
1. Push to GitHub.
2. netlify.com → "Add new site" → import from Git.
3. Build command: `npm run build`, Publish directory: `dist`.

**GitHub Pages:**
1. `npm install --save-dev gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Set `base: '/your-repo-name/'` in `vite.config.js`
4. `npm run build && npm run deploy`

## File structure

```
portfolio-mahak/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx       — React entry point
    ├── App.jsx        — all content + sections (edit this for content changes)
    └── index.css      — all styling (edit this for design/color changes)
```
