import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { premiumEase } from '../motion/presets'

export default function WorkCard({ work, index }) {
  return (
    <motion.a
      className="work-card"
      href={work.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Watch ${work.title}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.74, delay: (index % 3) * 0.07, ease: premiumEase }}
    >
      <div className="work-card__image-wrap">
        <img className="work-card__image" src={work.image} alt={work.title} loading="lazy" />
        <div className="work-card__shade" />
        <span className="work-card__index">{String(index + 1).padStart(2, '0')}</span>
        <span className="work-card__open"><ArrowUpRight size={18} /></span>
      </div>
      <div className="work-card__meta">
        <div className="work-card__title-wrap">
          <span>{work.type}</span>
          <h3>{work.title}</h3>
        </div>
        <p>{work.credit}</p>
      </div>
    </motion.a>
  )
}
