# 📦 āxōlōtl (a TEAStack)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Netlify Status](https://api.netlify.com/api/v1/badges/3977c82e-5762-4615-b921-72660a1d9945/deploy-status)](https://app.netlify.com/sites/hilarious-lily-fe1a3b/deploys)

[11ty](https://www.11ty.dev/), powered by [Vite](https://vitejs.dev/)
with [Tailwind CSS](https://tailwindcss.com) and
[Alpine.js](https://github.com/alpinejs/alpine/).

This starter is based on a number of other similar starters found around Github. Thanks to all the people everywhere for it!

## Install Dependencies

First, make sure you have `npm` (packaged with
[Node.js](https://nodejs.org)) installed, then run `npm run setup` to install
the dependencies and validate that everything is running correctly.

## Available Scripts

### Development

```bash
# runs the app in the development mode.
npm run dev
```

Open http://localhost:3000/ to view it in your browser.

The page will reload if you make file changes.

### Production

```bash
# builds a static copy of your site to the `dist/` folder.
npm run build
```

```bash
# serve the content from the `dist/` folder.
npm run preview
```

Open http://localhost:5000/ to view it in your browser.

Your code is now ready to be deployed!



## Code Quality

By default `CSS` and `JavaScript` is getting linted with every commit.

You can lint manually by running `npm run lint` and if errors occur you can try to fix them automatically by running `npm run format`.

With every pull request, the code is checked to if the site can be built without errors and afterwards `CSS` and `JavaScript` is getting linted.

Additionally each page is audited by Lighthouse which can take some time. You can find the performance budget for this audit in the file `./budget.json`.

## License

This project is open source and available under the [MIT License](LICENSE).
