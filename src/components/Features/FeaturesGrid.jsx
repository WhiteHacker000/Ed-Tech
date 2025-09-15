import React from 'react'
import './features.css'

export function FeatureCard({ icon, title, description }) {
  return (
    <div className='feature-card'>
      <div className='feature-icon'>{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function FeaturesGrid({ items = [] }) {
  return (
    <section className='features'>
      <div className='grid'>
        {items.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  )
}

