# AGENTS.md

Guidance for coding agents working in this repository.

## Project Overview

Thicket is a small React + Vite demo storefront for houseplants and pots. It has no backend, no real payment processing, and a deliberately compact codebase intended for bug-fix and feature-addition tasks.

The main app flow is:

- `src/App.jsx` composes the shop and checkout views.
- `src/context/CartContext.jsx` owns cart state, quantities, drawer state, and subtotal.
- `src/data/products.js` contains the sample product catalog and categories.
- `src/components/` contains UI components for navigation, product browsing, cart, modal, checkout, and footer.
- `src/index.css` defines global tokens and base styles.
- `src/App.css` contains most component styles

## Commands

Use npm, because this repo includes `package-lock.json`.

```bash
npm install
npm run dev
npm run build
npm run preview
```

There is no test suite or lint script at the moment. For every change, run `npm run build` before finishing. For UI changes, also run the dev server and manually verify the changed flow in a browser.

## Development Practices

- Make the smallest coherent change that fixes the bug or implements the requested feature.
- Prefer existing patterns over new abstractions. This app uses plain React state, context, CSS classes, and lucide-react icons.
- Keep UI state local unless it is shared across cart, drawer, or checkout behavior.
- Preserve the no-backend demo nature of the app. Do not add API clients, databases, payment SDKs, routing libraries, or state-management libraries unless the task explicitly requires it.
- Use `package-lock.json` as the dependency source of truth. Avoid adding dependencies for small UI or state changes.
- Do not rewrite broad styling systems while fixing a targeted issue.
- Keep public-facing text concise and consistent with the warm storefront tone already in the app.

## Pull Requests

When changes originate from a GitHub issue:

- Create a dedicated branch.
- Do not merge the pull request.
- Include the issue number in the PR description.
- Include `Closes #<issue-number>`.
- Explain what changed.
- Explain how the change was validated.
