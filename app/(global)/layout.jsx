import '../../styles/globals.css'
import {draftMode} from 'next/headers'
import LiveVisualEditing from '@/sanity/lib/LiveVisualEditing'
import {Lobster, Poppins} from 'next/font/google'
import {ThemeProvider} from './providers'
import {Analytics} from '@vercel/analytics/react'
import {SpeedInsights} from '@vercel/speed-insights/next'
import ScrollToTop from '@/components/(ui)/ScrollToTop'
import Navbar from '@/components/(other)/Navbar'
import Footer from '@/components/(other)/Footer'

const lobster = Lobster({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lobster',
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: '400',
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
    <html lang='en' suppressHydrationWarning className='scroll-smooth antialiased'>
      <body
        className={`${lobster.variable} ${poppins.variable} m-0 overflow-x-hidden overscroll-x-none p-0`}
      >
        <ThemeProvider attribute='class' defaultTheme='system'>
          <main className='bg-light text-dark transition-colors duration-200 ease-in dark:bg-dark dark:text-light'>
            <Navbar />
            {children}
            <ScrollToTop />
            <Footer />
          </main>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  )
}
