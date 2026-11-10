# Tone theme switcher

A small, dependency-free demo of **Light / Dark / System** theme switching. It uses CSS custom properties, remembers the selection in `localStorage`, and follows `prefers-color-scheme` when System is selected.

## Run locally

Open `index.html` in a browser, or serve this folder with any static file server, for example:

```sh
npx serve .
```

## Try it in an online sandbox

This project is plain HTML, CSS, and JavaScript, so it can be imported directly into StackBlitz or CodeSandbox. To create a shareable live sandbox, first push this folder to a GitHub repository, then use the provider's GitHub import flow. No public repository URL or hosted sandbox has been created yet.

## Screenshot

See [`screenshot.svg`](./screenshot.svg) for a responsive selector preview. The page itself switches between the light and dark palettes; the SVG is a static presentation image.

## Files

- `index.html` — accessible theme selector and demo content
- `styles.css` — responsive layout and theme palettes
- `theme.js` — system preference, persistence, and selection behavior
