import { motion, useReducedMotion } from 'framer-motion'
import { directionOffset, motionTiming, premiumEase } from '../motion/presets'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y,
  direction = 'up',
  distance,
  duration = motionTiming.reveal,
  amount = 0.2,
}) {
  const reduceMotion = useReducedMotion()
  const base = directionOffset[direction] || directionOffset.up
  const scale = distance == null ? 1 : distance / 30
  const offset = {
    x: base.x * scale,
    y: y ?? base.y * scale,
  }

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduceMotion ? 0 : duration, delay: reduceMotion ? 0 : delay, ease: premiumEase }}
    >
      {children}
    </motion.div>
  )
}
