import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { brandLogos, partnerLogos, siteConfig } from '../data/siteData'
import Reveal from './Reveal'

/**
 * Lightweight, Swiper-style carousel. Native scroll snap makes touch/trackpad swipes
 * feel natural, without introducing another JS dependency or risking the Vite build.
 */
function PartnerCarousel() {
  const trackRef = useRef(null)
  const [position, setPosition] = useState({ index: 1, previous: false, next: true, progress: 0 })

  const updatePosition = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const item = track.querySelector('.partner-logo')
    const width = item?.getBoundingClientRect().width || track.clientWidth
    const max = Math.max(0, track.scrollWidth - track.clientWidth)
    const offset = Math.max(0, track.scrollLeft)
    setPosition({
      index: Math.min(partnerLogos.length, 1 + Math.round(offset / Math.max(1, width))),
      previous: offset > 3,
      next: offset < max - 3,
      progress: max ? offset / max : 1,
    })
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    updatePosition()
    track.addEventListener('scroll', updatePosition, { passive: true })
    const resize = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updatePosition) : null
    resize?.observe(track)
    window.addEventListener('resize', updatePosition)
    return () => {
      track.removeEventListener('scroll', updatePosition)
      resize?.disconnect()
      window.removeEventListener('resize', updatePosition)
    }
  }, [updatePosition])

  const move = (direction) => {
    const track = trackRef.current
    if (!track) return
    const item = track.querySelector('.partner-logo')
    if (!item) return
    const nextLeft = track.scrollLeft + direction * item.getBoundingClientRect().width
    track.scrollTo({ left: nextLeft, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1) }
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) }
  }

  return (
    <>
      <Reveal className="partner-strip__header partner-strip__header--carousel">
        <span>Production partners</span>
        <div className="partner-carousel__tools">
          <span className="partner-carousel__context">Collaboration network</span>
          <span className="partner-carousel__count" aria-live="off">
            {String(position.index).padStart(2, '0')} <i aria-hidden="true">/</i> {String(partnerLogos.length).padStart(2, '0')}
          </span>
          <div className="partner-carousel__actions" aria-label="Production partner carousel controls">
            <button type="button" className="partner-carousel__arrow" onClick={() => move(-1)} disabled={!position.previous} aria-label="Previous production partner">
              <ArrowLeft size={16} strokeWidth={1.8} aria-hidden="true" />
            </button>
            <button type="button" className="partner-carousel__arrow" onClick={() => move(1)} disabled={!position.next} aria-label="Next production partner">
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>
        </div>
      </Reveal>
      <div
        className="partner-strip__logos partner-carousel__track"
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Production partners. Swipe or use the arrow buttons to explore."
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {partnerLogos.map((partner, index) => (
          <div className="partner-logo" key={partner.alt} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${partnerLogos.length}: ${partner.alt}`}>
            <span className="partner-logo__index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            {partner.url ? (
              <a className="partner-logo__plate partner-logo__plate--link" href={partner.url} target="_blank" rel="noopener noreferrer" aria-label={`${partner.alt} — opens external website`}>
                <img src={partner.src} alt={partner.alt} loading="lazy" decoding="async" />
                <ArrowUpRight className="partner-logo__launch" size={14} aria-hidden="true" />
              </a>
            ) : (
              <div className="partner-logo__plate"><img src={partner.src} alt={partner.alt} loading="lazy" decoding="async" /></div>
            )}
          </div>
        ))}
      </div>
      <div className="partner-carousel__rail" aria-hidden="true">
        <div className="partner-carousel__rail-fill" style={{ transform: `scaleX(${Math.max(.08, position.progress)})` }} />
      </div>
      <p className="partner-carousel__hint">Drag or swipe to explore <span aria-hidden="true">↗</span></p>
    </>
  )
}

export default function BrandStrip() {
  return (
    <section className={`relationships${siteConfig.showProductionPartners ? '' : ' relationships--standalone'}`} aria-label="Brands we work with">
      <div className="container">
        <Reveal className="relationships__header">
          <span>Brands we work with</span>
          <span>Selected client relationships</span>
        </Reveal>
        <div className="brand-strip__logos">
          {brandLogos.map((brand) => (
            <div className="brand-logo" key={brand.alt}>
              <img src={brand.src} alt={brand.alt} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
      {siteConfig.showProductionPartners && (
        <div className="partner-panel">
          <div className="container">
            <PartnerCarousel />
          </div>
        </div>
      )}
    </section>
  )
}
