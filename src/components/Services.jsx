import { services } from '../data/siteData'
import SectionEyebrow from './SectionEyebrow'

export default function Services() {
  return (
    <section className="section section--paper" id="services">
      <div className="container">
        <SectionEyebrow>Capabilities</SectionEyebrow>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
