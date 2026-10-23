/**
 * Safely translate the studio's existing Vimeo / YouTube links into embeddable
 * players. No third-party scripts are loaded before a visitor previews a card.
 * Unlisted Vimeo hashes (?h=...) are retained if supplied in the source link.
 */
export function parseWorkVideo(url) {
  try {
    const source = new URL(url)
    const host = source.hostname.toLowerCase().replace(/^www\./, '')
    const parts = source.pathname.split('/').filter(Boolean)

    if (host === 'vimeo.com' || host === 'player.vimeo.com') {
      const id = parts.findLast((part) => /^\d+$/.test(part))
      if (!id) return null
      const hash = source.searchParams.get('h') || (parts[parts.indexOf(id) + 1] || '')
      const base = `https://player.vimeo.com/video/${id}`
      const params = new URLSearchParams()
      if (/^[a-f\d]{8,32}$/i.test(hash)) params.set('h', hash)
      return { platform: 'vimeo', base, params }
    }

    if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com' || host === 'youtu.be') {
      const id = host === 'youtu.be' ? parts[0] : (source.searchParams.get('v') || (['embed', 'shorts', 'live'].includes(parts[0]) ? parts[1] : null))
      if (!id || !/^[a-z\d_-]{6,20}$/i.test(id)) return null
      return { platform: 'youtube', id, base: `https://www.youtube-nocookie.com/embed/${id}` }
    }
  } catch { /* Unsupported/malformed link: only the original URL remains available. */ }
  return null
}

export function getWorkEmbedUrl(url, { preview = false } = {}) {
  const video = parseWorkVideo(url)
  if (!video) return null

  const params = video.params || new URLSearchParams()
  if (video.platform === 'vimeo') {
    params.set('autoplay', '1')
    params.set('muted', preview ? '1' : '0')
    params.set('autopause', '1')
    params.set('dnt', '1')
    params.set('title', '0')
    params.set('byline', '0')
    params.set('portrait', '0')
    if (preview) {
      params.set('background', '1')
      params.set('loop', '1')
    } else {
      params.set('controls', '1')
    }
  } else {
    params.set('autoplay', '1')
    params.set('mute', preview ? '1' : '0')
    params.set('playsinline', '1')
    params.set('rel', '0')
    if (preview) {
      params.set('controls', '0')
      params.set('loop', '1')
      params.set('playlist', video.id)
    }
  }
  return `${video.base}?${params.toString()}`
}
