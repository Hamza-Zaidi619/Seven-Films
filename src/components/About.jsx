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
            <SectionEyebrow>01 / What we do</SectionEyebrow>
            <h2 className="display-heading about-title">Effective Flair.<br /><span>Global Reach.</span></h2>
          </Reveal>

          <Reveal className="about-intro__copy" direction="right" distance={22} delay={0.1}>
            <p className="about-lead">
              We bridge creativity with global expertise, streamlining film, TV commercial
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


        <div className="studio-story" aria-label="What we do and who we are">
          <Reveal className="studio-story__what" direction="left" distance={20}>
            <div className="studio-story__heading">
              <span className="micro-label">01A / Our approach</span>
              <h3>What<br /><em>we do.</em></h3>
            </div>
            <div className="studio-story__narrative">
              <p className="studio-story__lead">Your vision. Our commitment.</p>
              <p>Your vision is enhanced with Seven Films as your partner. We are more than a video production company: we are a collaborative partner adept at solving problems while guiding your project to completion. We have seen it all, and that experience helps us navigate pitfalls within the video production process. Your project is safe with us. This is what we do.</p>
              <p>By applying decades of expertise in all areas of video production, we are the ideal partner to harness your creative vision and transform it into reality, saving you time, effort and stress.</p>
              <p>With over 20 years of experience, you can trust Seven Films as your production consultant partner to streamline the complicated nature of video production, coordinating all the services necessary for a successful shoot, including scriptwriters, producers, directors, cinematographers, editors, casting directors, location scouts, beauty consultants, hair and makeup artists, and more.</p>
            </div>
          </Reveal>

          <Reveal className="studio-story__who" direction="right" distance={20} delay={0.08}>
            <div className="studio-story__who-head">
              <span className="micro-label">01B / Who we are</span>
              <h3>Creative minds.<br /><span>Production people.</span></h3>
            </div>
            <div className="studio-story__who-body">
              <strong>Your Global Production Partner.</strong>
              <p>Our top-tier team comprises premium talent throughout the industry!</p>
              <p>We have expertise in both creative and technical capacities, delivering exceptional content across television, brand videos, pitch videos, corporate videos, documentaries, music videos and designer social media videos.</p>
              <p>At Seven Films we have made video production an art form, allowing our producers and support staff to manage logistics and preparation so our creative team can deliver an outstanding production.</p>
              <span>From first concept to final frame.</span>
            </div>
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
            <span>Your Global Production Partner</span>
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
                  Our goal is to create impactful stories that carry your brand and its message,
                  connecting it with the right audience. We tell compelling stories, collaborate
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
                <h3>One team.<br />More partners.</h3>
                <p>
                  Our local and global partners bring together directors, producers, animators,
                  cinematographers, editors and designers so each project can scale efficiently without
                  losing aesthetic craft.
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
