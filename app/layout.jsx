"use client";
import "../styles/globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";
import Loading from "./loading";
import Nav from "../components/Nav";
import Foot from "../components/Foot";

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
      <body
        className="h-screen pb-14 bg-cover bg-right"
        style={{ backgroundImage: "url('/images/bg.svg')" }}
      >
        <main className="h-full">
          <ThemeProvider defaultTheme="mytheme">
            <Nav />
            <Providers>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </Providers>
            <Foot />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}

{
  /* <main className=" app relative z-10 flex justify-center items-center justify-content-center flex-col w-screen min-h-screen max-w-7xl mx-auto sm:px-16 px-6"></main> */
}

// style={{
//   backgroundImage: `url("https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
// height: "100%",
// width: "100%",
// backgroundPosition: "center",
// backgroundRepeat: "no-repeat",
// backgroundSize: "cover",
// backgroundAttachment: "fixed",
//   backgroundColor: "#008080",
// }}

// https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80

// https://images.unsplash.com/photo-1528731708534-816fe59f90cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80

// https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80
