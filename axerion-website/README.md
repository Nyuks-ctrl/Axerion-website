# Axerion (Pty) Ltd — Portfolio Website

> Official portfolio and contact site for Axerion (Pty) Ltd.  
> Built and maintained by **Comfort Minyuku** and **Tshegofatso Marema**.

---

## 📁 Folder Structure

```
axerion-website/
├── index.html              # Main HTML file (all sections live here)
├── css/
│   └── styles.css          # All styles — variables, layout, components, responsive
├── js/
│   └── main.js             # Nav toggle + contact form logic
├── assets/
│   ├── images/             # Logo, team photos, project screenshots
│   │   └── Axerion_Logo.png
│   └── icons/              # Any custom SVG icons (if needed)
└── sections/               # (Future) break-out HTML partials if the project grows
```

---

## 🚀 Getting Started

No build tools needed — this is plain HTML, CSS, and JavaScript.

1. Clone the repo:
   ```bash
   git clone https://github.com/your-org/axerion-website.git
   cd axerion-website
   ```

2. Open `index.html` in your browser, or use a local server:
   ```bash
   # Python (built-in)
   python3 -m http.server 3000

   # OR with Node / npx
   npx serve .
   ```

3. Visit `http://localhost:3000`

---

## ✏️ Common Edits

### Adding a portfolio project
Find the `<!-- ─── PORTFOLIO ───  -->` section in `index.html`.  
Duplicate any `.project-card` block and update:
- The gradient or background image on `.project-thumb`
- `.project-label` (overlay title)
- `.project-tag` (category badge)
- `h3` (client/project name)
- `p` (short description)

To use a real screenshot instead of a gradient:
```html
style="background: url('assets/images/your-screenshot.jpg') center/cover no-repeat;"
```

### Updating contact details
Search for `hello@axerion.co.za` and `+27 60 000 0000` in `index.html` and replace with real info.

### Wiring up the contact form
Open `js/main.js` and follow the `TODO` comment inside `handleSubmit()`.  
Recommended: [Formspree](https://formspree.io) (free tier, no backend needed).

---

## 🌐 Deployment

This site is static and can be hosted anywhere:

| Platform | Notes |
|----------|-------|
| **Netlify** | Drag & drop the folder, or connect GitHub |
| **Vercel** | `vercel deploy` from the project root |
| **GitHub Pages** | Push to `main`, enable Pages in repo settings |
| **cPanel / shared hosting** | Upload via FTP to `public_html/` |

---

## 🤝 Working Together (Git Workflow)

```bash
# Always pull before starting work
git pull origin main

# Create a branch for your changes
git checkout -b feature/your-feature-name

# Commit often with clear messages
git add .
git commit -m "feat: add new project card for ClientX"

# Push and open a Pull Request
git push origin feature/your-feature-name
```

**Branch naming:**
- `feature/` — new sections or functionality
- `fix/` — bug fixes
- `content/` — copy, images, portfolio updates

---

## 📄 Licence

Private — all rights reserved. © 2025 Axerion (Pty) Ltd.
