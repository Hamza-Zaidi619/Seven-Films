import { useMemo, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { works } from '../data/siteData'
import Reveal from './Reveal'
import SectionEyebrow from './SectionEyebrow'
import WorkCard from './WorkCard'
import WorkVideoModal from './WorkVideoModal'

export default function WorkGrid() {
  const [expanded, setExpanded] = useState(false)
  const [activePreview, setActivePreview] = useState(null)
  const [playing, setPlaying] = useState(null)
  const visible = useMemo(() => expanded ? works : works.slice(0, 9), [expanded])

  return (
    <>
    <section className="section section--dark work-section" id="work">
      <div className="container">
        <div className="work-heading">
          <Reveal direction="left" distance={24}>
            <SectionEyebrow dark>03 / Selected work</SectionEyebrow>
            <h2 className="display-heading display-heading--light">Made to move.<br /><span>Built to remember.</span></h2>
          </Reveal>

          <Reveal className="work-heading__editorial" direction="right" distance={22} delay={0.1}>
            <span className="micro-label micro-label--light">Latest releases</span>
            <p>
              Commercials, entertainment and branded stories from Seven Films on Vimeo,
              presented from newest to oldest.
            </p>
            <div className="work-heading__stats"><strong>{String(works.length).padStart(2, '0')}</strong><span>Films from our Vimeo channel</span></div>
          </Reveal>
        </div>

        <div className="work-grid">
          {visible.map((work, index) => (
            <WorkCard
              key={work.id}
              work={work}
              index={index}
              previewActive={!playing && activePreview === index}
              onPreview={setActivePreview}
              onOpen={(selectedWork, selectedIndex) => {
                setActivePreview(null)
                setPlaying({ work: selectedWork, index: selectedIndex })
              }}
            />
          ))}
        </div>

        {!expanded && works.length > 9 && (
          <button type="button" className="button button--outline button--center" onClick={() => setExpanded(true)}>
            View full filmography <ArrowDown size={15} />
          </button>
        )}
      </div>
    </section>
    {playing && <WorkVideoModal selection={playing} onClose={() => setPlaying(null)} />}
    </>
  )
}
