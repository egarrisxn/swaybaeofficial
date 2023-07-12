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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="mytheme"
      className={`${inter.variable} ${roboto_mono.variable}`}
      suppressHydrationWarning
    >
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
