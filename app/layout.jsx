import { Poppins, Sansita } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import { site } from "@/utils/config";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const sansita = Sansita({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sansita",
  style: ["normal", "italic"],
  weight: ["400", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Creator of Chaos`,
    template: `${site.name} | %s`,
  },
  description: site.description,
  applicationName: site.name,
  referrer: "origin-when-cross-origin",
  creator: "https://egxo.dev.",
  keywords: [
    "swaybae, sway_bae, swaybaetv, sway, bae, swaybaenet, swaybaecom, thebaesquad, the-bae-squad, baesquad, bae_squad, swaybae-twitch, swaybae-twitter, swaybae-youtube, swaybae-discord, swaybae-instagram, swaybae-tiktok, swaybae-merch, swaybae-store, swaybae-shop, swaybae-gaming, hearthstone, blizzard, streamer, stream, twitch, twitch-streamer, twitchtv, blog, swaybae-blog",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: "Swaybae.net",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    creator: site.social,
    site: site.social,
  },
  appleWebApp: {
    capable: true,
    title: site.name,
    startupImage: site.ogImage,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  appLinks: {},
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f8f8" },
    { media: "(prefers-color-scheme: dark)", color: "#121313" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${sansita.variable}`}>
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
  );
}
