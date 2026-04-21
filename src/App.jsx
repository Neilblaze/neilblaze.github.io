import { useEffect, useRef } from 'react'
import './App.css'

const REDIRECT_URL = 'https://neilblaze.live'
const STAR_COUNT = 60

export default function App() {
  const sceneRef = useRef(null)

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return

    const stars = []
    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement('i')
      const x = Math.floor(Math.random() * window.innerWidth)
      const duration = Math.random() * 1.2 + 0.3
      const h = Math.random() * 100

      star.style.left = x + 'px'
      star.style.width = '1px'
      star.style.height = h + 'px'
      star.style.animationDuration = duration + 's'

      scene.appendChild(star)
      stars.push(star)
    }

    const timer = setTimeout(() => {
      window.location.href = REDIRECT_URL
    }, 1000)

    return () => {
      clearTimeout(timer)
      stars.forEach(s => s.remove())
    }
  }, [])

  return (
    <div className="scene" ref={sceneRef}>
      <div className="rocket">
        <img
          src="https://res.cloudinary.com/dmlwye965/image/upload/v1776789280/black-and-white-rocket_uss3gj.png"
          alt="Rocket launching"
        />
      </div>
      <p className="label">
        Redirecting to{' '}
        <a href={REDIRECT_URL}>neilblaze.live</a>…
      </p>
    </div>
  )
}
