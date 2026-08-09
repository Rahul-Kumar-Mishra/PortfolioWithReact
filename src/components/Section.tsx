import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function Section({ id, eyebrow, title, children, className = '' }: { id: string; eyebrow: string; title: ReactNode; children: ReactNode; className?: string }) {
  return <section id={id} className={`section ${className}`}>
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .55 }}>
      <p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>
    </motion.div>{children}
  </section>
}
