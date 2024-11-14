import '../styles/globals.css'
import {Poppins, Sansita} from 'next/font/google'
import {ThemeProvider} from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import {Analytics} from '@vercel/analytics/react'
import {SpeedInsights} from '@vercel/speed-insights/next'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  style: ['normal', 'italic'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

const sansita = Sansita({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sansita',
  style: ['normal', 'italic'],
  weight: ['400', '700', '800', '900'],
})

export const metadata = {
  metadataBase: new URL('https://swaybae.net'),
  title: 'Sway Bae | Creator of Chaos',
  description: 'The official page for Sway Bae & The Bae Squad!',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'swaybae, sway_bae, swaybaetv, sway, bae, swaybaenet, swaybaecom, thebaesquad, the-bae-squad, baesquad, bae_squad, swaybae-twitch, swaybae-twitter, swaybae-youtube, swaybae-discord, swaybae-instagram, swaybae-tiktok, swaybae-merch, swaybae-store, swaybae-shop, swaybae-gaming, hearthstone, blizzard, streamer, stream, twitch, twitch-streamer, twitchtv, blog, swaybae-blog',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Sway Bae | Creator of Chaos',
    url: 'https://swaybae.net',
    siteName: 'Swaybae.net',
    images: [
      {
        url: `https://swaybae.net/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'The official page for Sway Bae & The Bae Squad!',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    creator: '@sway_baeTV',
    site: '@sway_baeTV',
    title: 'Sway Bae | Creator of Chaos',
    images: [
      {
        url: `https://swaybae.net/twitter-image.png`,
        width: 1200,
        height: 630,
        alt: 'The official page for Sway Bae & The Bae Squad!',
      },
    ],
  },
  icons: {
    shortcut: 'https://swaybae.net/favicon.ico',
  },
}

export const viewport = {
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: '#f8f8f8'},
    {media: '(prefers-color-scheme: dark)', color: '#121313'},
  ],
}

export default function RootLayout({children}) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${sansita.variable} grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto] overflow-x-hidden overscroll-contain bg-myGradient bg-cover bg-no-repeat font-sans text-foreground antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
