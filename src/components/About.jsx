import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { studioFacts } from '../data/siteData'
import Reveal from './Reveal'
import SectionEyebrow from './SectionEyebrow'
import AnimatedMetric from './AnimatedMetric'

export default function About() {
  return (
    <section className="section section--paper about-section" id="about">
      <div className="container">
        <div className="about-intro">
          <Reveal direction="left" distance={24}>
            <SectionEyebrow>01 / Studio</SectionEyebrow>
            <h2 className="display-heading about-title">Local instinct.<br /><span>Global reach.</span></h2>
          </Reveal>

          <Reveal className="about-intro__copy" direction="right" distance={22} delay={0.1}>
            <p className="about-lead">
              We bridge local creativity with global expertise, streamlining film, TV commercial
              and video production across multiple international markets.
            </p>
            <p className="about-body">
              Based in Karachi, our model brings directors, producers, cinematographers, animators,
              editors and designers together around one goal: create compelling work that connects
              brand objectives with the right audience.
            </p>
            <span className="about-signoff">From script to screen, effortlessly.</span>
            <a className="text-link" href="#global">Explore the production network <ArrowUpRight size={15} /></a>
          </Reveal>
        </div>

        <div className="studio-facts">
          {studioFacts.map((fact, index) => (
            <Reveal className="studio-fact" delay={index * 0.06} key={fact.label}>
              <div className="studio-fact__top">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <motion.i
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.85, delay: index * 0.06 + 0.16, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <strong>
                <AnimatedMetric value={fact.value} target={fact.target} suffix={fact.suffix} pad={fact.pad} />
              </strong>
              <small>{fact.label}</small>
            </Reveal>
          ))}
        </div>

        <div className="principles" aria-label="Seven Films working approach and strength">
          <Reveal className="principles__strap">
            <span>Your Local and Global Production Partner</span>
          </Reveal>

          <div className="principles__grid">
            <Reveal className="principle-card principle-card--paper" direction="left" distance={22} delay={0.04}>
              <div className="principle-card__meta">
                <span>02</span>
                <span>The Way We Work</span>
              </div>
              <div className="principle-card__copy">
                <h3>Ideas first.<br />Collaboration always.</h3>
                <p>
                  Our goal is to create impactful stories that get to the heart of your brand and its
                  message, connecting it with the right audience. We tell compelling stories, collaborate
                  with great thinkers and connect ideas with people.
                </p>
                <p>
                  Collaborative partnerships matter to us because it is not about being right — it is
                  about discovering the right idea.
                </p>
              </div>
              <span className="principle-card__foot">Stories / people / ideas</span>
            </Reveal>

            <Reveal className="principle-card principle-card--ink" direction="right" distance={22} delay={0.1}>
              <div className="principle-card__meta">
                <span>03</span>
                <span>Our Strength</span>
              </div>
              <div className="principle-card__copy">
                <h3>One team.<br />Built for the job.</h3>
                <p>
                  We specialise in TV commercials, documentaries, corporate videos, animation and
                  international production support — integrating brand objectives into entertaining video
                  content.
                </p>
                <p>
                  Our local and global partners bring together directors, producers, animators,
                  cinematographers, editors and designers so each project can scale efficiently without
                  losing craft.
                </p>
              </div>
              <span className="principle-card__foot">Local team / global partners</span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
