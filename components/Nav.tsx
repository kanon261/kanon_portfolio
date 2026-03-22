'use client'

import { useState } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://kanon261.github.io/images/icon_shimaenaga.png" alt="icon" className="nav-icon" />
          MyPortfolio
        </a>

        <ul className={`nav-menu${menuOpen ? ' active' : ''}`}>
          <li><img src="https://kanon261.github.io/images/birds.gif" alt="birds" className="nav-birds-left" /></li>
          <li><a href="#home" onClick={closeMenu}>HOME</a></li>
          <li><a href="#about" onClick={closeMenu}>ABOUT</a></li>
          <li><a href="#products" onClick={closeMenu}>PRODUCTS</a></li>
          <li><a href="#contact" onClick={closeMenu}>CONTACT</a></li>
          <li><img src="https://kanon261.github.io/images/birds_huwahuwa.png" alt="birds" className="nav-birds" /></li>
        </ul>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
