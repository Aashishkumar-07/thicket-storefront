import React from 'react'
import { Leaf, Sprout, Flower2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1>
            Plants that make
            <br />
            themselves at home.
          </h1>
          <p>
            Healthy, well-rooted houseplants and hand-glazed pots, chosen for
            apartments, offices, and windowsills with opinions of their own.
          </p>
          <a className="btn-primary hero__cta" href="#shop">
            Shop the collection
          </a>
        </div>
        <div className="hero__art" aria-hidden="true">
          <div className="hero__art-tile hero__art-tile--large">
            <Leaf size={46} />
          </div>
          <div className="hero__art-tile">
            <Sprout size={30} />
          </div>
          <div className="hero__art-tile">
            <Flower2 size={30} />
          </div>
        </div>
      </div>
    </section>
  )
}
