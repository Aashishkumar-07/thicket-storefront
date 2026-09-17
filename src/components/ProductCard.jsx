import React from 'react'
import * as Icons from 'lucide-react'

export default function ProductCard({ product, onOpen, onAdd }) {
  const Icon = Icons[product.icon] || Icons.Leaf

  return (
    <article className="product-card">
      <button
        className="product-card__image"
        style={{ background: product.gradient }}
        onClick={() => onOpen(product)}
        aria-label={`View ${product.name}`}
      >
        <Icon size={40} color="#F4F6EE" strokeWidth={1.5} />
        {product.badge && <span className="product-card__badge">{product.badge}</span>}
      </button>

      <div className="product-card__body">
        <button className="product-card__name" onClick={() => onOpen(product)}>
          {product.name}
        </button>
        <div className="product-card__row">
          <span className="product-card__price">${product.price}</span>
          <button className="product-card__add" onClick={() => onAdd(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}
