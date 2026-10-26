import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'
import { motionTiming, premiumEase } from '../motion/presets'

export default function Hero() {
  const reduceMotion = useReducedMotion()
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
        <picture>
          <source media="(max-width: 720px)" srcSet="/assets/behind-the-scenes-mobile.jpeg" />
          <img src="/assets/behind-the-scenes.jpeg" alt="" />
        </picture>
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
          </motion.div>
        </div>

        <motion.aside
          className="hero__sidecard"
          initial={reduceMotion ? false : { opacity: 0, x: 34, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 1.08, delay: reduceMotion ? 0 : 0.76, ease: premiumEase }}
        >
          <div className="hero__sidecard-top">
            <span>SF / Profile</span>
            <span>Est. Pakistan</span>
          </div>
          <strong className="hero__sidecard-title">
            <span>Local</span>
            <span className="hero__sidecard-global"><em>+</em> Global</span>
          </strong>
          <div className="hero__sidecard-bottom">
            <span>Film</span><span>TVC</span><span>Content</span><span>Production support</span>
          </div>
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
