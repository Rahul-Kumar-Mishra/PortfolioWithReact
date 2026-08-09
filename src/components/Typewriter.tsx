import { useEffect, useState } from 'react'

const words = ['reliable APIs.', 'distributed systems.', 'payment infrastructure.', 'high-performance services.']

/** A small dependency-free typing effect for the hero statement. */
export function Typewriter() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  useEffect(() => {
    const target = words[index]
    if (text.length < target.length) {
      const timer = window.setTimeout(() => setText(target.slice(0, text.length + 1)), 52)
      return () => clearTimeout(timer)
    }
    const timer = window.setTimeout(() => { setText(''); setIndex(current => (current + 1) % words.length) }, 1800)
    return () => clearTimeout(timer)
  }, [index, text])
  return <span className="typed">{text}<i aria-hidden="true" /></span>
}
