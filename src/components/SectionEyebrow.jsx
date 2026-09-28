export default function SectionEyebrow({ children, dark = false }) {
  return (
    <div className={`section-eyebrow ${dark ? 'section-eyebrow--dark' : ''}`}>
      <span className="section-eyebrow__line" />
      <span>{children}</span>
    </div>
  )
}
