import React, { useState } from 'react'
import { Menu, X, ShoppingBag, Moon, Sun, Search } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

const NAV_LINKS = ['Shop', 'Care guides', 'About']

export default function Navbar({ theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { items, setDrawerOpen } = useCart()

  // BUG (cart-badge-count): this counts the number of distinct product
  // rows in the cart, not the total quantity of items. Add two of the
  // same plant and the badge still reads "1".
  const cartCount = items.length

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__logo" href="#top">
          Thicket
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#shop" onClick={() => setMobileOpen(false)}>
              {link}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button className="icon-btn" aria-label="Search">
            <Search size={19} />
          </button>
          <button
            className="icon-btn"
            aria-label="Toggle dark mode"
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            className="icon-btn navbar__cart"
            aria-label="Open cart"
            onClick={() => setDrawerOpen(true)}
          >
            <ShoppingBag size={19} />
            {cartCount > 0 && <span className="navbar__badge">{cartCount}</span>}
          </button>
          <button
            className="icon-btn navbar__menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="navbar__mobile" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            // BUG (mobile-menu-stays-open): tapping a link scrolls to the
            // section but the mobile menu panel never closes, so it stays
            // open over the content underneath.
            <a key={link} href="#shop">
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
