/** Supplied client artwork. Two assets use the same letterforms and red brand mark;
 * the dark-background version lifts the dark-grey letters for readable contrast. */
export default function BrandLockup({ compact = false, light = false }) {
  return (
    <span className={`brand-lockup brand-lockup--official ${compact ? 'brand-lockup--compact' : ''} ${light ? 'brand-lockup--light' : ''}`}>
      <picture>
        {light && <source srcSet="/assets/seven-films-logo-on-dark.png" />}
        <img src="/assets/seven-films-logo-official.png" width="2048" height="279" alt="Seven Films" />
      </picture>
    </span>
  )
}
