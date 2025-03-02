const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://swaybae.net'

export const site = {
  name: 'Sway Bae',
  description: 'The official page for Sway Bae & The Bae Squad!',
  url: siteUrl,
  ogImage: `${siteUrl}/opengraph-image.png`,
  social: '@sway_baeTV',
}
