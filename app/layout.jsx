import { Inter, Roboto_Mono } from "next/font/google";
import ThemedNavbar from "../components/ThemedNavbar";
import { Providers } from "./providers";
import { Suspense } from "react";
import Loading from "./loading";
import MyFooter from "../components/MyFooter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
// import Image from "next/image";

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
  metadataBase: new URL("https://swaybae.net"),
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

      <body className="relative w-full h-full bg-gradient-to-bl from-slate-700 to-black-500 bg-no-repeat bg-fixed bg-cover">
        {/* <Image
          src="/images/tpsway.png"
          quality={100}
          fill
          className="absolute object-cover mix-blend-overlay "
          priority
        /> */}

        <main className="backdrop-brightness-50">
          <Providers>
            <ThemedNavbar />
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <ToastContainer />
            <MyFooter />
          </Providers>
        </main>
      </body>
    </html>
  );
}
