"use client";
import "../styles/globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";
import Loading from "./loading";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

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
      <body className="w-full h-full bg-[url('/images/mountains.png')] bg-cover bg-center">
        <main className="container w-full h-full place-content-center justify-center items-center backdrop-brightness-50">
          <ThemeProvider defaultTheme="mytheme">
            <Nav />
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
