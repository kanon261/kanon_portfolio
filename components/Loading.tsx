'use client'

import { useEffect, useState } from 'react'

export default function Loading() {
  const [fadeOut, setFadeOut] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 1500)
    const t2 = setTimeout(() => setRemoved(true), 2300)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (removed) return null

  return (
    <div className={`loading-screen${fadeOut ? ' fade-out' : ''}`}>
      <div className="loading-apples-container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://kanon261.github.io/images/loading_apples.png"
          alt="Loading"
          className="loading-apples"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://kanon261.github.io/images/icon_shimaenaga.png"
          alt="Shimaenaga"
          className="loading-bird"
        />
      </div>
    </div>
  )
}
