import { useMemo, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { works } from '../data/siteData'
import Reveal from './Reveal'
import SectionEyebrow from './SectionEyebrow'
import WorkCard from './WorkCard'

export default function WorkGrid() {
  const [expanded, setExpanded] = useState(false)
  const visible = useMemo(() => expanded ? works : works.slice(0, 9), [expanded])

  return (
    <section className="section section--dark work-section" id="work">
      <div className="container">
        <div className="work-heading">
          <Reveal direction="left" distance={24}>
            <SectionEyebrow dark>03 / Selected work</SectionEyebrow>
            <h2 className="display-heading display-heading--light">Made to move.<br /><span>Built to remember.</span></h2>
          </Reveal>

          <Reveal className="work-heading__editorial" direction="right" distance={22} delay={0.1}>
            <span className="micro-label micro-label--light">Profile selection</span>
            <p>
              A curated selection of commercials, entertainment and branded stories produced with
              leading talent and brands.
            </p>
            <div className="work-heading__stats"><strong>{String(works.length).padStart(2, '0')}</strong><span>Projects shown in this profile</span></div>
          </Reveal>
        </div>

        <div className="work-grid">
          {visible.map((work, index) => <WorkCard key={`${work.title}-${index}`} work={work} index={index} />)}
        </div>

        {!expanded && (
          <button type="button" className="button button--outline button--center" onClick={() => setExpanded(true)}>
            View full filmography <ArrowDown size={15} />
          </button>
        )}
      </div>
    </section>
  )
}
