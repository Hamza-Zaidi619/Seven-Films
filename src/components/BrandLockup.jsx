export default function BrandLockup({ compact = false, light = false }) {
  return (
    <span className={`brand-lockup ${compact ? 'brand-lockup--compact' : ''} ${light ? 'brand-lockup--light' : ''}`} aria-label="Seven Films">
      <span className="brand-lockup__monogram" aria-hidden="true">SF</span>
      <span className="brand-lockup__copy">
        <strong>Seven Films</strong>
        <small>Production Studio</small>
      </span>
    </span>
  )
}
