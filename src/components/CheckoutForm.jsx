import React, { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'

const initialForm = { name: '', email: '', address: '', city: '', zip: '' }

export default function CheckoutForm({ onBack }) {
  const { items, subtotal } = useCart()
  const [form, setForm] = useState(initialForm)
  const [placed, setPlaced] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  // BUG (checkout-no-validation): this submits successfully no matter what
  // is in the form. Required fields have no `required` attribute, there's
  // no check for empty/invalid values before setPlaced(true), and no error
  // messaging is ever shown to the shopper.
  function handleSubmit(e) {
    e.preventDefault()
    setPlaced(true)
  }

  if (placed) {
    return (
      <div className="checkout checkout--confirmation">
        <h2>Order placed</h2>
        <p>Thanks, {form.name || 'friend'} — a confirmation is on its way.</p>
        <button className="btn-secondary" onClick={onBack}>
          Back to shop
        </button>
      </div>
    )
  }

  return (
    <div className="checkout">
      <button className="checkout__back" onClick={onBack}>
        ← Back to shop
      </button>
      <h2>Checkout</h2>

      <form className="checkout__form" onSubmit={handleSubmit}>
        <label>
          Full name
          <input name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
          Address
          <input name="address" value={form.address} onChange={handleChange} />
        </label>
        <div className="checkout__row">
          <label>
            City
            <input name="city" value={form.city} onChange={handleChange} />
          </label>
          <label>
            ZIP
            <input name="zip" value={form.zip} onChange={handleChange} />
          </label>
        </div>

        <div className="checkout__summary">
          <span>{items.reduce((n, i) => n + i.qty, 0)} items</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <button className="btn-primary checkout__submit" type="submit">
          Place order
        </button>
      </form>
    </div>
  )
}
