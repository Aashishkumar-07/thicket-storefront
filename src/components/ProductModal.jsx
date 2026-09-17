import React, { useState } from 'react'
import * as Icons from 'lucide-react'
import { X, Minus, Plus } from 'lucide-react'

export default function ProductModal({ product, onClose, onAdd }) {
  const [qty, setQty] = useState(1)
  if (!product) return null
  const Icon = Icons[product.icon] || Icons.Leaf

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/*
        BUG (product-modal-mobile-overflow): the modal panel is centered
        with position: fixed + top: 50% / left: 50% / translate(-50%, -50%)
        and has no max-height or overflow-y set. On short mobile viewports,
        taller product descriptions push the panel's top (including the
        close button) above y=0, off the visible screen, with no way to
        scroll up to reach it.
      */}
      <div
        className="modal-panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
      >
        <button className="modal-panel__close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div className="modal-panel__image" style={{ background: product.gradient }}>
          <Icon size={64} color="#F4F6EE" strokeWidth={1.4} />
        </div>

        <div className="modal-panel__body">
          <h2>{product.name}</h2>
          <p className="modal-panel__price">${product.price}</p>
          <p className="modal-panel__desc">{product.description}</p>

          <div className="modal-panel__qty">
            <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
              <Minus size={16} />
            </button>
            <span>{qty}</span>
            <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">
              <Plus size={16} />
            </button>
          </div>

          <button
            className="btn-primary modal-panel__add"
            onClick={() => {
              onAdd(product, qty)
              onClose()
            }}
          >
            Add {qty > 1 ? `${qty} ` : ''}to cart
          </button>
        </div>
      </div>
    </div>
  )
}
