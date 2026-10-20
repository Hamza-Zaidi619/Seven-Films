import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navItems } from '../data/siteData'
import BrandLockup from './BrandLockup'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 150, damping: 24, mass: 0.25 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <a className="navbar__brand" href="#top" aria-label="Seven Films home">
          <BrandLockup compact light />
        </a>

        <nav className="navbar__links" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <a className="button button--compact navbar__cta" href="#contact">
          Start a production <ArrowUpRight size={14} />
        </a>

        <button className="navbar__menu" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>

        {open && (
          <div className="mobile-menu" id="mobile-nav" role="navigation" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            ))}
            <a className="button" href="#contact" onClick={() => setOpen(false)}>Start a production</a>
          </div>
        )}
      </header>
    </>
  )
}
