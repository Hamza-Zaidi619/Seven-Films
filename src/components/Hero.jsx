import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'
import { motionTiming, premiumEase } from '../motion/presets'

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const videoRef = useRef(null)
  const [videoPlaying, setVideoPlaying] = useState(false)

  useEffect(() => {
    if (reduceMotion) return undefined

    const onMessage = (message) => {
      if (message.origin !== 'https://player.vimeo.com' || message.source !== videoRef.current?.contentWindow) return
      let data = message.data
      if (typeof data === 'string') {
        try { data = JSON.parse(data) } catch { return }
      }
      if (data?.event === 'ready') {
        videoRef.current?.contentWindow?.postMessage({ method: 'addEventListener', value: 'play' }, 'https://player.vimeo.com')
        videoRef.current?.contentWindow?.postMessage({ method: 'getPaused' }, 'https://player.vimeo.com')
      }
      if (data?.event === 'play') setVideoPlaying(true)
      if (data?.method === 'getPaused' && data.value === false) setVideoPlaying(true)
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [reduceMotion])

  const subscribeToPlayback = () => {
    videoRef.current?.contentWindow?.postMessage({ method: 'addEventListener', value: 'play' }, 'https://player.vimeo.com')
    videoRef.current?.contentWindow?.postMessage({ method: 'getPaused' }, 'https://player.vimeo.com')
  }
  const enter = (initial, delay, duration = motionTiming.heroSupport) => ({
    initial: reduceMotion ? false : initial,
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration: reduceMotion ? 0 : duration, delay: reduceMotion ? 0 : delay, ease: premiumEase },
  })

  return (
    <section className="hero" id="top">
      <motion.div
        className="hero__media"
        initial={reduceMotion ? false : { scale: 1.065, opacity: 0.84 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : motionTiming.heroMedia, ease: premiumEase }}
        aria-hidden="true"
      >
        {!reduceMotion && (
          <iframe
            ref={videoRef}
            className={`hero__video${videoPlaying ? ' hero__video--playing' : ''}`}
            src="https://player.vimeo.com/video/1238799755?h=ecdead48b5&background=1&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0&dnt=1"
            title="Seven Films showreel"
            allow="autoplay; fullscreen; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            tabIndex="-1"
            onLoad={subscribeToPlayback}
          />
        )}
        <div className={`hero__standby${videoPlaying ? ' hero__standby--hidden' : ''}`}>
          <div className="hero__standby-line" />
        </div>
        <div className="hero__scrim" />
        <div className="hero__grain" />
      </motion.div>

      <div className="hero__edge-type" aria-hidden="true">SEVEN / FILMS / PRODUCTION</div>

      <div className="container hero__content">
        <div className="hero__copy">
          <motion.div
            className="hero__kicker-row"
            {...enter({ opacity: 0, x: -18, y: 0 }, 0.24, 0.76)}
          >
            <span className="hero__kicker">A Video Production Consultant Company.</span>
            <span className="hero__edition">Creative consultancy / International network</span>
          </motion.div>

          <motion.h1
            {...enter({ opacity: 0, x: -30, y: 10 }, 0.38, motionTiming.heroTitle)}
          >
            Stories built<br />
            <span>to travel.</span>
          </motion.h1>

          <motion.div
            className="hero__lower"
            {...enter({ opacity: 0, x: 0, y: 24 }, 0.64, 0.92)}
          >
            <p>
              Full Service Content Production Consultancy Providers, connected to International Production Network.
            </p>
            <div className="hero__actions">
              <a className="button button--light hero__primary-action" href="#work">
                <Play size={14} fill="currentColor" />
                <span>View selected work</span>
              </a>
              <a className="hero__secondary-action" href="#about">
                <span>Discover Seven Films</span>
                <ArrowDown size={16} />
              </a>
            </div>
            <p className="hero__group-note">Macaw Post Production &amp; Spice Studio are part of the Seven Films Group.</p>
          </motion.div>
        </div>

        <motion.aside
          className="hero__sidecard"
          initial={reduceMotion ? false : { opacity: 0, x: 34, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 1.08, delay: reduceMotion ? 0 : 0.76, ease: premiumEase }}
        >
          <div className="hero__sidecard-top">
            <span>SF / Group</span>
            <span>Production network</span>
          </div>
          <div className="hero__sidecard-studios">
            <strong>Macaw<br />Post Production</strong>
            <span className="hero__sidecard-divider" aria-hidden="true" />
            <strong>Spice Studio</strong>
          </div>
          <p className="hero__sidecard-caption">Part of the Seven Films Group.</p>
        </motion.aside>
      </div>

      <motion.div
        className="hero__bottomline"
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.76, delay: reduceMotion ? 0 : 1.02, ease: premiumEase }}
      >
        <span>Your global video production partner</span>
        <span>Scroll to explore ↓</span>
      </motion.div>
    </section>
  )
}
