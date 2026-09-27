'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    setEnabled(isFinePointer)
    if (!isFinePointer) return

    document.documentElement.classList.add('custom-cursor')

    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
      }
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [role="button"]')
      if (ringRef.current) {
        ringRef.current.style.width = interactive ? '48px' : '28px'
        ringRef.current.style.height = interactive ? '48px' : '28px'
        ringRef.current.style.opacity = interactive ? '1' : '0.6'
      }
    }

    let frame: number
    const loop = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      }
      frame = requestAnimationFrame(loop)
    }
    frame = requestAnimationFrame(loop)

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
      document.documentElement.classList.remove('custom-cursor')
    }
  }, [])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 size-1.5 rounded-full bg-accent"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border border-accent/70 transition-[width,height,opacity] duration-200"
        style={{ transform: 'translate3d(-100px, -100px, 0)', width: 28, height: 28 }}
      />
    </div>
  )
}
