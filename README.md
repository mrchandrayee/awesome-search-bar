# Awesome Search Bar

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/awesome-search-bar/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 5.77-second screen recording.

## What the video shows

- A dark charcoal/purple tutorial canvas.
- A compact pink gradient square with a search icon.
- On focus/click, the square smoothly expands into a long search input.
- The placeholder reads **Search**.
- The demo types “Coding stella” into the field and then collapses back to the search icon.
- A large heading reads **Awesome Search Bar**, with “Awesome” in bright green.
- Floating `index.html` and two `style.css` code panels.

## Implemented behavior

- Click or focus the search icon to expand the field.
- Type a query and press Enter or click the magnifier to submit.
- Submit displays a local “Searching for: …” message; connect your own search route/API for real search.
- Empty input focuses the field.
- Blur collapses the search when the field is empty.
- Responsive layout and reduced-motion support.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

No npm install or build step required.

## Project structure

```text
awesome-search-bar/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Source accuracy

The video clearly shows the interaction and overall layout. The code panels are small and only partly legible; the project is a functional reconstruction of the visible UI, not a verbatim copy of the creator's original source.
