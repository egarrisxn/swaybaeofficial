export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/about', '/blog', '/inquiries', '/calendar'],
    },
    sitemap: 'https://swaybae.net/sitemap.xml',
  }
}
