import './globals.css'
import {Poppins, Sansita} from 'next/font/google'
import {ThemeProvider} from 'next-themes'
import {Navbar} from '@/components/Navbar.jsx'
import {Footer} from '@/components/Footer.jsx'
import {Scroll2Top} from '@/components/ui/Scroll2Top.jsx'
import {Analytics} from '@vercel/analytics/react'
import {SpeedInsights} from '@vercel/speed-insights/next'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
  title: 'Sway Bae | Streaming, Gaming, & So Much More!',
  description: 'The Official Website for Sway Bae & The Bae Squad!',
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
    title: 'Sway Bae | Streaming, Gaming, & So Much More!',
    description: 'The Official Website for Sway Bae & The Bae Squad!',
    url: 'https://swaybae.net',
    siteName: 'Swaybae.net',
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: '@sway_baeTV',
    site: '@sway_baeTV',
    title: 'Sway Bae | Streaming, Gaming, & So Much More!',
    description: 'The Official Website for Sway Bae & The Bae Squad!',
  },
}

export default function RootLayout({children}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={` ${poppins.variable} ${sansita.variable} grid min-h-[100dvh] grid-rows-[auto_1fr_auto] overflow-x-hidden overscroll-contain scroll-smooth bg-cover bg-no-repeat font-sans text-foreground antialiased`}
      >
        <ThemeProvider
          enableSystem
          disableTransitionOnChange
          attribute='class'
          defaultTheme='system'
        >
          <Navbar />
          {children}
          <Scroll2Top />
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
