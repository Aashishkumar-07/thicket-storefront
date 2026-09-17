import React, { useState } from 'react'
import { CartProvider, useCart } from './context/CartContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CategoryFilter from './components/CategoryFilter.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import ProductModal from './components/ProductModal.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import CheckoutForm from './components/CheckoutForm.jsx'
import Footer from './components/Footer.jsx'
import { categories, products } from './data/products.js'
import './App.css'

function ShopView({ activeProduct, setActiveProduct, view, setView }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const { addToCart, setDrawerOpen } = useCart()

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.tags.includes(activeCategory))

  return (
    <>
      <Hero />
      <section className="container shop-section">
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
        <ProductGrid
          products={filtered}
          onOpen={setActiveProduct}
          onAdd={(product) => addToCart(product, 1)}
        />
      </section>

      {activeProduct && (
        <ProductModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
          onAdd={addToCart}
        />
      )}

      <CartDrawer
        onCheckout={() => {
          setDrawerOpen(false)
          setView('checkout')
        }}
      />
    </>
  )
}

function AppShell() {
  const [theme, setTheme] = useState('light')
  const [view, setView] = useState('shop')
  const [activeProduct, setActiveProduct] = useState(null)

  function toggleTheme() {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  }

  return (
    <div data-theme={theme}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {view === 'shop' ? (
        <ShopView
          activeProduct={activeProduct}
          setActiveProduct={setActiveProduct}
          view={view}
          setView={setView}
        />
      ) : (
        <div className="container">
          <CheckoutForm onBack={() => setView('shop')} />
        </div>
      )}

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <AppShell />
    </CartProvider>
  )
}
