"use client";
import "../styles/globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";
import Loading from "./loading";
import ThemedNavbar from "../components/ThemedNavbar";
import Footer from "../components/Footer";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "SwayBae | Streaming, Gaming, and More!",
  description: "Here you will find everything there is to know about Sway!",
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: false,
    noimageindex: true,
    nocache: true,
    notranslate: false,
    maxSnippet: -1,
    maxImagePreview: "standard",
    maxVideoPreview: "standard",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.swaybae.net",
    title: "SwayBae",
    description:
      "Here you will find everything there is to know about Swaybae!",
    keywords: [
      "swaybae, sway_bae, sway, bae, swaybae.net, swaybae.com, baesquad, bae_squad, swaybae twitch, swaybae twitter, swaybae youtube, swaybae discord, swaybae instagram, swaybae tiktok, swaybae merch, swaybae store, swaybae shop, swaybae gaming",
    ],
    viewport: "width=device-width, initial-scale=1.0",
    colorScheme: "dark",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="mytheme"
      className={`${inter.variable} ${roboto_mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <title>{metadata.title}</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </head>

      <body className="relative w-full h-full bg-gradient-to-l from-slate-500 to-black-500 bg-no-repeat bg-fixed bg-cover bg-center">
        <Image
          src="/images/mountains.png"
          alt="mountains"
          quality={100}
          fill
          className="absolute object-cover mix-blend-overlay"
        />

        <main className="backdrop-brightness-75">
          <ThemeProvider defaultTheme="mytheme">
            <ThemedNavbar />
            <Providers>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </Providers>
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
