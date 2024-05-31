export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/about', '/blog', '/calendar'],
    },
    sitemap: 'https://swaybae.net/sitemap.xml',
  }
}
