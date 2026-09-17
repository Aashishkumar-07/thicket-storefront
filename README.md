# Thicket — demo storefront (buggy, on purpose)

A small React + Vite storefront for houseplants and pots, built as a **target
repo**

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Project shape

```
src/
  components/    Navbar, Hero, ProductGrid, ProductCard, ProductModal,
                 CartDrawer, CheckoutForm, Footer, CategoryFilter
  context/       CartContext.jsx — cart state (add/remove/update qty)
  data/          products.js — sample product catalog
  App.jsx        page composition + view switching (shop / checkout)
  App.css        component styles (this is where most of the bugs live)
  index.css      design tokens (light + dark mode CSS variables)
```

No backend, no real payments — `CheckoutForm` just fakes a successful order.
