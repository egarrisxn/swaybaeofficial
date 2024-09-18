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
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
