import React from 'react'

export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="filters" role="tablist" aria-label="Filter by category">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          className={`filters__chip ${active === cat ? 'filters__chip--active' : ''}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
