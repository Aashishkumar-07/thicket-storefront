import React from 'react'
import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ products, onOpen, onAdd }) {
  return (
    <div className="product-grid" id="shop">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onOpen={onOpen}
          onAdd={onAdd}
        />
      ))}
      {products.length === 0 && (
        <p className="product-grid__empty">
          Nothing in this category yet — check back soon.
        </p>
      )}
    </div>
  )
}
