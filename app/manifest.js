export default function manifest() {
  return {
    name: 'Sway Bae Official',
    short_name: 'Sway Bae',
    description: 'The official Page for Sway Bae & The Bae Squad!',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-icon-180.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/chrome-icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/chrome-icon-384.png',
        sizes: '384x384',
        type: 'image/png',
      },
    ],
  }
}
