import { brandLogos, partnerLogos } from '../data/siteData'
import Reveal from './Reveal'

export default function BrandStrip() {
  return (
    <section className="relationships" aria-label="Brands and production partners">
      <div className="container">
        <Reveal className="relationships__header">
          <span>Brands we work with</span>
          <span>Selected client relationships</span>
        </Reveal>

        <div className="brand-strip__logos">
          {brandLogos.map((brand) => (
            <div className="brand-logo" key={brand.alt}>
              <img src={brand.src} alt={brand.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="partner-panel">
        <div className="container">
          <Reveal className="partner-strip__header">
            <span>Production partners</span>
            <span>Collaboration network</span>
          </Reveal>
          <div className="partner-strip__logos">
            {partnerLogos.map((partner, index) => (
              <div className="partner-logo" key={partner.src}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div className="partner-logo__plate">
                  <img src={partner.src} alt={partner.alt} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
