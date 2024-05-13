export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/about', '/blog', '/contact', '/calendar'],
    },
    sitemap: 'https://swaybae.net/sitemap.xml',
  }
}
