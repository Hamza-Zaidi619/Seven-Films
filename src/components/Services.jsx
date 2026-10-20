import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/siteData'
import Reveal from './Reveal'
import SectionEyebrow from './SectionEyebrow'

export default function Services() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="services-hero">
          <Reveal direction="left" distance={22}>
            <SectionEyebrow>04 / Services</SectionEyebrow>
            <h2 className="display-heading" id="services-title">Works<br /><span>globally.</span></h2>
          </Reveal>
          <Reveal className="services-hero__side" direction="right" distance={22} delay={0.08}>
            <span className="micro-label">Full-service production consultancy</span>
            <p>Headquartered in Karachi, Seven Films draws on decades of production experience to create compelling work across formats, platforms and markets.</p>
            <a href="#contact" className="text-link">Discuss a project <ArrowUpRight size={16}/></a>
          </Reveal>
        </div>

        <Reveal className="services-collection" direction="up" distance={16}>
          <div className="services-collection__intro">
            <span>Our expertise</span>
            <span>01—12 / Production disciplines</span>
          </div>
          <div className="services-list">
            {services.map((title, index) => (
              <div className="services-list__item" key={title}>
                <span className="services-list__index">{String(index + 1).padStart(2,'0')}</span>
                <h3>{title}</h3>
                <ArrowUpRight size={20} aria-hidden="true" />
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="services-outro" direction="up" distance={14}>
          <span>From brief to broadcast.</span>
          <p>Let our production experience guide and shape your video so it connects with your audience and stands apart.</p>
        </Reveal>
      </div>
    </section>
  )
}
