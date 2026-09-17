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

## GitHub Issue Workflow

### 1. Understand and Implement

- Read the GitHub issue carefully.
- Inspect the relevant parts of the repository before making changes.
- Implement the smallest appropriate change.
- Avoid unrelated refactoring.

### 2. Validate

- Run the relevant repository validation before publishing.
- For UI changes, also perform browser verification when the existing environment/tooling supports it.
- Attach a demo or screenshot if possible.
- If a validation step cannot be performed because of an environment limitation:
  - Do not install unrelated dependencies solely to perform the check.
  - Continue with the draft PR if the implementation is otherwise complete.
  - Clearly document the unperformed validation and its reason in the draft PR description.

### 3. Create a Dedicated Branch

- Use a descriptive branch name related to the issue.

### 4. Commit the Change

### 5. Verify GitHub Remote

- Ensure the GitHub remote is available before publishing.
- Restore it if necessary:
  `https://github.com/Aashishkumar-07/thicket-storefront.git`

### 6. Push the Branch

### 7. Create the Draft Pull Request

- Target the repository's default branch.
- The draft PR description must include:
  - A concise summary of what changed.
  - How the change was validated.
  - Any validation that could not be performed and why.
  - `Closes #<issue-number>`
- Do not wait for the user to separately ask for the draft pull request to be created.

### 8. Pull Request Safety

- Never merge the draft pull request.
- Never push directly to the default branch.
- Do not modify unrelated files.

## Definition of Done for GitHub Issues

- A GitHub issue task is considered complete only after the branch is pushed and the draft pull request is successfully created.
- If pushing the branch or creating the draft PR fails, report the exact failure instead of claiming the task is complete.
