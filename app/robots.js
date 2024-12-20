export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: 'https://swaybae.net/sitemap.xml',
    host: 'https://swaybae.net',
  }
}
