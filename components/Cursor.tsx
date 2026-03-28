'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mx = useRef(0)
  const my = useRef(0)
  const rx = useRef(0)
  const ry = useRef(0)

  useEffect(() => {
    const updatePos = (x: number, y: number) => {
      mx.current = x
      my.current = y
      if (cursorRef.current) {
        cursorRef.current.style.left = x - 6 + 'px'
        cursorRef.current.style.top = y - 6 + 'px'
      }
    }

    const onMove = (e: MouseEvent) => updatePos(e.clientX, e.clientY)

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0]
      updatePos(t.clientX, t.clientY)
      if (cursorRef.current) cursorRef.current.style.opacity = '1'
      if (ringRef.current) ringRef.current.style.opacity = '0.5'
    }

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0]
      // リングをタッチ位置に即ジャンプ（初回ズレ防止）
      rx.current = t.clientX
      ry.current = t.clientY
      updatePos(t.clientX, t.clientY)
      if (cursorRef.current) cursorRef.current.style.opacity = '1'
      if (ringRef.current) ringRef.current.style.opacity = '0.5'
    }

    const onTouchEnd = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0'
      if (ringRef.current) ringRef.current.style.opacity = '0'
    }

    let raf: number
    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.12
      ry.current += (my.current - ry.current) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx.current - 18 + 'px'
        ringRef.current.style.top = ry.current - 18 + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    const onEnter = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'scale(2.2)'
      if (ringRef.current) ringRef.current.style.opacity = '0'
    }
    const onLeave = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'scale(1)'
      if (ringRef.current) ringRef.current.style.opacity = '0.5'
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('touchmove', onTouchMove, { passive: true })
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('touchend', onTouchEnd)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchend', onTouchEnd)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
