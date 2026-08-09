import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null); const inView = useInView(ref, { once: true }); const count = useMotionValue(0)
  const rounded = useTransform(count, latest => value % 1 ? latest.toFixed(1) : Math.round(latest).toString())
  useEffect(() => { if (inView) { const controls = animate(count, value, { duration: 1.5, ease: 'easeOut' }); return controls.stop } }, [count, inView, value])
  return <span ref={ref}><motion.span>{rounded}</motion.span>{suffix}</span>
}
