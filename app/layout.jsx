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
    locale: "en_US",
    type: "website",
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    creator: site.social,
    site: site.social,
  },
  icons: {
    icon: {
      url: "/icons/icon.png",
      sizes: "192x192",
      type: "image/png",
    },
    apple: {
      url: "/icons/apple-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: {
      rel: "icon",
      url: "/icons/icon.svg",
      type: "image/svg+xml",
    },
  },
  verification: {},
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f8f8" },
    { media: "(prefers-color-scheme: dark)", color: "#121313" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${sansita.variable} grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto] overflow-x-hidden overscroll-contain scroll-smooth bg-myGradient bg-cover bg-no-repeat font-sans antialiased`}
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
  );
}
