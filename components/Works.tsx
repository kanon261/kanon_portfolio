'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import type { Work } from '@/types'

type Props = { works: Work[] }

export default function Works({ works }: Props) {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const cards = gridRef.current?.querySelectorAll('.product-card')
    cards?.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" className="products">
      <div className="container">
        <h2 className="section-title">Coding Products</h2>
        <div className="products-grid" ref={gridRef}>
          {works.map((work) => (
            <Link
              key={work.id}
              href={`/works/${work.id}`}
              className="product-card"
            >
              <div className="product-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={work.thumbnail} alt={work.title} />
                <span className="product-badge">{work.category}</span>
              </div>
              <div className="product-info">
                <h3>{work.title}</h3>
                <p className="product-date">{work.date}</p>
                <p className="product-type">{work.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
