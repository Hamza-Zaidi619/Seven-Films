import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, X } from 'lucide-react'
import { getWorkEmbedUrl } from '../utils/video'

export default function WorkVideoModal({ selection, onClose }) {
  const closeRef = useRef(null)
  const previousFocus = useRef(null)
  const { work, index } = selection
  const embedUrl = getWorkEmbedUrl(work.url)

  useEffect(() => {
    previousFocus.current = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'Tab') {
        // Keep keyboard focus inside the player overlay while it is open.
        const elements = Array.from(document.querySelectorAll('.work-player [href], .work-player button, .work-player iframe'))
          .filter((element) => element.getAttribute('tabindex') !== '-1')
        if (!elements.length) return
        const first = elements[0]
        const last = elements[elements.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus.current?.focus?.()
    }
  }, [onClose])

  return createPortal(
    <div className="work-player" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <div className="work-player__dialog" role="dialog" aria-modal="true" aria-labelledby="work-player-title">
        <div className="work-player__topline">
          <div className="work-player__eyebrow"><span>{String(index + 1).padStart(2, '0')}</span> / Selected work</div>
          <button className="work-player__close" type="button" ref={closeRef} onClick={onClose} aria-label="Close video player">
            <span>Close</span><X size={18} />
          </button>
        </div>
        <div className="work-player__video">
          {embedUrl ? (
            <iframe
              title={`${work.title} — video player`}
              src={embedUrl}
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="work-player__unavailable">This project has no embeddable video URL.</div>
          )}
        </div>
        <div className="work-player__details">
          <div>
            <span className="work-player__type">{work.type}</span>
            <h3 id="work-player-title">{work.title}</h3>
            <p>{work.credit}</p>
          </div>
          <a className="work-player__fallback" href={work.url} target="_blank" rel="noopener noreferrer">
            Playback unavailable? Open original <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>,
    document.body,
  )
}
