import './globals.css'
import {draftMode} from 'next/headers'
import LiveVisualEditing from '@/components/blog/LiveVisualEditing.jsx'
import {Poppins, Sansita} from 'next/font/google'
import {ThemeProvider} from 'next-themes'
import {Navbar} from '@/components/Navbar.jsx'
import {Footer} from '@/components/Footer.jsx'
import {ScrollToTop} from '@/components/ui/ScrollToTop.jsx'
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
    <html lang='en' className='scroll-smooth antialiased' suppressHydrationWarning>
      <body className={`${poppins.variable} ${sansita.variable} flex min-h-dvh flex-col`}>
        <ThemeProvider enableSystem attribute='class' defaultTheme='system'>
          <Navbar />
          <main className='grow'>{children}</main>
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  )
}
