import { motion } from 'framer-motion'
import { markets } from '../data/siteData'
import Reveal from './Reveal'
import SectionEyebrow from './SectionEyebrow'
import AnimatedMetric from './AnimatedMetric'
import { premiumEase } from '../motion/presets'

export default function GlobalReach() {
  return (
    <section className="section network-section" id="global">
      <div className="network-glow" aria-hidden="true" />
      <div className="container network-shell">
        <div className="network-heading">
          <Reveal direction="left" distance={24}>
            <SectionEyebrow dark>05 / Production network</SectionEyebrow>
            <h2 className="display-heading display-heading--light">
              Add one partner.<br /><span>Win multiple markets.</span>
            </h2>
          </Reveal>

          <Reveal className="network-heading__copy" direction="right" distance={22} delay={0.1}>
            <span className="network-heading__index">{String(markets.length).padStart(2, '0')} / markets</span>
            <p>
              Strategic production relationships across Asia, the Middle East and Europe help Seven Films
              coordinate crews, locations and production support beyond Pakistan.
            </p>
          </Reveal>
        </div>

        <div className="network-stage">
          <Reveal className="network-metric" direction="left" distance={20}>
            <div className="network-metric__top">
              <span>Production markets</span>
              <span>Local craft / global support</span>
            </div>
            <AnimatedMetric target={markets.length} pad={2} className="network-metric__number" />
            <div className="network-metric__bottom">
              <span>Pakistan</span>
              <span>Asia / Middle East / Europe</span>
            </div>
          </Reveal>

          <div className="market-list">
            {markets.map((market, index) => (
              <motion.div
                className="market-list__item"
                key={market}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: index * 0.055, ease: premiumEase }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{market}</strong>
                <i aria-hidden="true" />
              </motion.div>
            ))}
          </div>
        </div>

        <Reveal className="network-statement" y={18}>
          <div className="network-statement__metric">
            <AnimatedMetric target={100} suffix="+" />
          </div>
          <p>TVCs, corporate events and reality shows across different countries.</p>
          <span className="network-statement__rule" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  )
}
