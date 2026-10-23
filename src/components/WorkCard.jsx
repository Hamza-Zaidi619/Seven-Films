import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { premiumEase } from '../motion/presets'
import { getWorkEmbedUrl } from '../utils/video'

export default function WorkCard({ work, index, previewActive, onPreview, onOpen }) {
  const previewTimer = useRef(null)
  const previewSrc = previewActive ? getWorkEmbedUrl(work.url, { preview: true }) : null

  const clearPreview = () => {
    if (previewTimer.current) window.clearTimeout(previewTimer.current)
    previewTimer.current = null
    onPreview(null)
  }

  useEffect(() => () => {
    if (previewTimer.current) window.clearTimeout(previewTimer.current)
  }, [])

  const onPointerEnter = (event) => {
    // No auto-play on touch devices or when the visitor requests reduced motion.
    if (event.pointerType !== 'mouse' ||
        !window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    previewTimer.current = window.setTimeout(() => {
      onPreview(index)
      previewTimer.current = null
    }, 350)
  }

  const openPlayer = () => {
    clearPreview()
    onOpen(work, index)
  }

  return (
    <motion.article
      className={`work-card${previewSrc ? ' work-card--previewing' : ''}`}
      onPointerEnter={onPointerEnter}
      onPointerLeave={clearPreview}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.74, delay: (index % 3) * 0.07, ease: premiumEase }}
    >
      <div className="work-card__image-wrap">
        <img className="work-card__image" src={work.image} alt="" loading="lazy" />
        {previewSrc && (
          <iframe
            className="work-card__preview"
            src={previewSrc}
            title={`Muted preview: ${work.title}`}
            allow="autoplay; fullscreen; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            tabIndex={-1}
            aria-hidden="true"
          />
        )}
        <div className="work-card__shade" />
        <span className="work-card__index">{String(index + 1).padStart(2, '0')}</span>
        <span className="work-card__play"><Play size={20} fill="currentColor" /></span>
        {previewSrc && <span className="work-card__preview-label">Muted preview</span>}
      </div>
      <div className="work-card__meta">
        <div className="work-card__title-wrap">
          <span>{work.type}</span>
          <h3>{work.title}</h3>
        </div>
        <p>{work.credit}</p>
      </div>
      <button
        type="button"
        className="work-card__trigger"
        aria-label={`Play ${work.title} video on this website`}
        onClick={openPlayer}
      />
    </motion.article>
  )
}
