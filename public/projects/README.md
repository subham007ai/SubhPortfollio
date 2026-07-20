# Project screenshots

Drop project covers and screenshots here. The site uses a generative SVG mesh cover by default — supplying a real image overrides it.

## Covers (single hero image per project)

Set `cover: "/projects/<id>.jpg"` on the project in `content/projects.ts`.

Suggested filenames:
- `face-mask-detection.jpg`
- `sitora.jpg`
- `kalinga-fitness.jpg`
- `utkal-dental.jpg`

## Screenshots (expanded view, opens in lightbox)

Add a `screenshots` array on the project:

```ts
screenshots: [
  { src: "/projects/sitora-1.jpg", caption: "Home — Aurora hero" },
  { src: "/projects/sitora-2.jpg", caption: "Pricing — interactive estimator" }
]
```

Aspect: 16:9 covers look best; 4:3 for thumbs. Rendered B&W → colour on hover.
