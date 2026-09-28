import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

function easeOutQuint(t) {
  return 1 - Math.pow(1 - t, 5)
}

export default function AnimatedMetric({
  value,
  target,
  suffix = '',
  prefix = '',
  pad = 0,
  duration = 1750,
  className = '',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5, margin: '-8% 0px' })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(target == null ? value : 0)

  useEffect(() => {
    if (target == null || !inView) return
    if (reduceMotion) {
      setDisplay(target)
      return
    }

    let frame = 0
    const startedAt = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      setDisplay(Math.round(target * easeOutQuint(progress)))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [duration, inView, reduceMotion, target])

  const rendered = target == null
    ? value
    : `${prefix}${String(display).padStart(pad, '0')}${suffix}`

  return <span ref={ref} className={className}>{rendered}</span>
}
