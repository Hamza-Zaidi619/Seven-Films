import { ArrowUpRight, Globe2, Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaVimeoV } from 'react-icons/fa'
import { contact } from '../data/siteData'
import BrandLockup from './BrandLockup'
import Reveal from './Reveal'
import { premiumEase } from '../motion/presets'

const socialChannels = [
  { Icon: FaFacebookF, label: 'Facebook' },
  { Icon: FaInstagram, label: 'Instagram' },
  { Icon: FaLinkedinIn, label: 'LinkedIn' },
  { Icon: FaVimeoV, label: 'Vimeo' },
]

const details = [
  {
    icon: Phone,
    label: 'Hello',
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: Globe2,
    label: 'Website',
    value: contact.website,
    href: `https://${contact.website}`,
    external: true,
  },
  {
    icon: MapPin,
    label: 'Karachi office',
    value: contact.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`,
    external: true,
  },
]

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact__media" aria-hidden="true">
        <img src="/assets/contact-film.jpeg" alt="" />
      </div>
      <div className="contact__red-wash" aria-hidden="true" />

      <div className="container contact__inner">
        <div className="contact__intro">
          <Reveal direction="left" distance={24}>
            <span className="contact__eyebrow">04 / Contact</span>
            <h2>Bring us the brief.<br /><span>We&apos;ll bring it to life.</span></h2>
          </Reveal>

          <Reveal className="contact__intro-note" direction="right" distance={20} delay={0.1}>
            <span>Karachi / Pakistan</span>
            <strong className="contact__question">Do you have any questions?</strong>
            <p>Your local and global film &amp; video production partner.</p>
          </Reveal>
        </div>

        <div className="contact__panel contact__panel--compact">
          <Reveal className="contact__primary" direction="left" distance={20} delay={0.04}>
            <span className="contact__primary-kicker">Start a production enquiry</span>
            <a className="contact__email" href={`mailto:${contact.email}`}>
              <span>{contact.email}</span>
              <ArrowUpRight />
            </a>
            <p>Commercials, branded content, film and international production support from Karachi.</p>
          </Reveal>

          <div className="contact__directory contact__directory--rows">
            {details.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.label}
                  className="contact__detail contact__detail--row"
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.62, delay: 0.08 + index * 0.055, ease: premiumEase }}
                >
                  <div className="contact__detail-icon"><Icon size={16} /></div>
                  <div className="contact__detail-copy">
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </div>
                  <ArrowUpRight className="contact__detail-arrow" size={16} />
                </motion.a>
              )
            })}
          </div>
        </div>

        <Reveal className="contact__socials contact__socials--rail" delay={0.08}>
          <div className="contact__socials-copy">
            <span>Connect / Social</span>
            <p>Facebook, Instagram, LinkedIn and Vimeo.</p>
          </div>
          <div className="contact__social-icons" aria-label="Social platforms shown in the Seven Films company profile">
            {socialChannels.map(({ Icon, label }) => (
              <span className="contact__social-icon" key={label} title={`${label} company URL to be connected`}>
                <Icon aria-hidden="true" />
                <small>{label}</small>
              </span>
            ))}
          </div>
        </Reveal>

        <div className="contact__bottom">
          <div>
            <BrandLockup compact light />
            <span className="contact__tagline">Your local and global production partner</span>
          </div>
          <span>© {new Date().getFullYear()} Seven Films</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
