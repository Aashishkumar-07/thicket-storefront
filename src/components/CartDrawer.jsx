import React from 'react'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

export default function CartDrawer({ onCheckout }) {
  const { items, isDrawerOpen, setDrawerOpen, updateQty, removeFromCart, subtotal } =
    useCart()

  if (!isDrawerOpen) return null

  return (
    <div className="drawer-overlay" onClick={() => setDrawerOpen(false)}>
      <aside
        className="cart-drawer"
        onClick={(e) => e.stopPropagation()}
        aria-label="Shopping cart"
      >
        <div className="cart-drawer__header">
          <h2>Your cart</h2>
          <button aria-label="Close cart" onClick={() => setDrawerOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="cart-drawer__items">
          {items.length === 0 && <p className="cart-drawer__empty">Your cart is empty.</p>}
          {items.map((item) => (
            <div key={item.id} className="cart-drawer__item">
              <div className="cart-drawer__item-swatch" style={{ background: item.gradient }} />
              <div className="cart-drawer__item-info">
                <p className="cart-drawer__item-name">{item.name}</p>
                <p className="cart-drawer__item-price">${item.price}</p>
                <div className="cart-drawer__item-qty">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    aria-label={`Decrease ${item.name} quantity`}
                  >
                    <Minus size={14} />
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    aria-label={`Increase ${item.name} quantity`}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <button
                className="cart-drawer__item-remove"
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remove ${item.name}`}
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="cart-drawer__footer">
          <div className="cart-drawer__subtotal">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button
            className="btn-primary cart-drawer__checkout"
            disabled={items.length === 0}
            onClick={onCheckout}
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
