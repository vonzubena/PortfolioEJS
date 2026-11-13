# Andrew Von Zuben – Express Portfolio

**INFR3120 – Web and Scripting Programming | Assignment 2 | Ontario Tech University**

My personal portfolio website rebuilt with **Node.js**, **Express** and the **EJS** templating engine.
It is styled with **Bootstrap 5** and **Font Awesome Free**, using my Assignment 1 cyberpunk colours.

- **Live site:** [No link yet]
- **Repository:** https://github.com/vonzubena/PortfolioEJS

---

## Pages and Routes

Every page is an EJS view rendered by its own Express route in `routes/index.js`, using
`router.get(path, function(req, res, next))` and `res.render(view, locals)`.

| Page | Route | View | `title` passed in |
|------|-------|------|-------------------|
| Home | `/` | `views/index.ejs` | `Home` |
| About Me | `/about` | `views/about.ejs` | `About Me` |
| Projects | `/projects` | `views/projects.ejs` | `Projects` |
| Contact Me | `/contact` | `views/contact.ejs` | `Contact Me` |

`router.get()` works the same way as `app.get()`: the router is connected to the app in `app.js` with `app.use('/', indexRouter)`.

### Layout template (partials)
Each view includes a shared header and footer:

```html
<%- include('partials/header') %>
   ...page content...
<%- include('partials/footer') %>
```

- `views/partials/header.ejs` – `<head>` with Bootstrap, Font Awesome, `app.css` and `app.js`; the Bootstrap navbar.
  The current page is highlighted using the route's `title` and a ternary operator.
- `views/partials/footer.ejs` – links to my **GitHub** and **LinkedIn** (with Font Awesome icons), email and copyright.

---

## How the Project Was Created and Configured

1. Installed Express Generator globally: `npm install -g express-generator`
2. Generated the project with EJS views: `express --view=ejs portfolioEJS`
3. Installed packages: `npm install`
4. Added a `.gitignore` containing `node_modules/`
5. Following the class method:
   - Moved `bin/www` to the project root, renamed it **`server.js`**, deleted the `bin` folder,
     and changed its import to `require('./app')`
   - Updated `package.json`: `"start": "node ./server.js"`
   - Changed `var` to `let` in `app.js` and `server.js`
   - Renamed the public folders: `stylesheets` → **Content** (`style.css` → `app.css`),
     `javascripts` → **Script**, `images` → **Assets**
6. Installed Bootstrap and Font Awesome Free into the project:
   `npm install bootstrap @fortawesome/fontawesome-free`
7. Served `node_modules` as a static folder in `app.js`, so Bootstrap and Font Awesome can be linked
   without `node_modules` in the path:
   ```js
   app.use(express.static(path.join(__dirname, 'node_modules')));
   ```

### Run it locally
```
npm install
npm start
```
Then open http://localhost:3000

---

## Folder Structure

```
portfolioEJS/
├── server.js            → starts the server (moved from bin/www)
├── app.js               → Express setup: EJS view engine, static folders, routes, errors
├── package.json         → dependencies and the "npm start" script
├── routes/
│   └── index.js         → one route per page
├── views/
│   ├── partials/
│   │   ├── header.ejs   → shared head and navbar
│   │   └── footer.ejs   → shared footer (GitHub, LinkedIn)
│   ├── index.ejs, about.ejs, projects.ejs, contact.ejs
│   └── error.ejs        → error page from Express Generator
└── public/
    ├── Content/app.css  → my styles on top of Bootstrap
    ├── Script/app.js    → client-side IIFE (class method)
    ├── Script/video.js  → play/pause button (Week 2 lecture)
    └── Assets/          → profile photo, video poster, intro video
```

---

## Bootstrap and Font Awesome

- **Bootstrap 5.3** is used on every page: `container`, the grid (`row`, `col-md-4`, `col-lg-8`),
  the responsive `navbar`, `card`, `btn`, `badge`, `form-control` / `form-select`, spacing utilities,
  and Bootstrap's dark mode (`data-bs-theme="dark"`).
- **Font Awesome Free** provides the GitHub and LinkedIn icons in the footer
  (`fa-brands fa-github`, `fa-brands fa-linkedin`).
- `public/Content/app.css` loads after Bootstrap and changes its colours to my Assignment 1 palette:
  `#FCEE0A` yellow, `#00F0FF` cyan, `#FF003C` red, `#0A0A0F` black, `#12121C` dark grey.

---

## External Code (10% Rule)

Code not covered in the course is marked `EXTRA` in comments:

| Code | Where | What it does | Lines |
|------|-------|--------------|------:|
| CSS variables (`:root`, `--bs-...`) | `app.css`, colour block | Replaces Bootstrap's colours with my palette | 12 |
| `--bs-card-bg` | `app.css`, `.card` | Dark grey card background | 1 |
| Bootstrap button variables (`--bs-btn-...`) | `app.css`, 4 button rules | Yellow / cyan buttons and hover colours | 20 |
| `data-bs-theme="dark"` | `header.ejs` | Bootstrap's dark mode (readable form placeholders) | 1 |
| **Total** | | | **34** |

**34 lines ÷ 534 lines of code ≈ 6.4%**

---

## Citations

- **Express Generator** – generated the starting project structure.
  https://expressjs.com/en/starter/generator.html
- **Express** – web framework for Node.js. https://expressjs.com/
- **EJS** – templating engine. https://ejs.co/
- **Bootstrap 5.3** – CSS framework (grid, navbar, cards, buttons, forms, dark mode, CSS variables).
  https://getbootstrap.com/
- **Font Awesome Free** – icon library. https://fontawesome.com/
- **Overriding Bootstrap styles** (method shared in class)
  https://stackoverflow.com/questions/20721248/how-can-i-override-bootstrap-css-styles
- **Bootstrap CSS variables** – https://getbootstrap.com/docs/5.3/customize/css-variables/
- **video.js** – play/pause function from the INFR3120 Week 2 lecture ("Using JavaScript Controls").
- **Script/app.js** – IIFE start-up script from the INFR3120 class Express demo.
- **Profile photo** – my own.
- **Intro video** – my own.

---

© 2026 Andrew Von Zuben
