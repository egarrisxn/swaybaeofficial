"use client";
import "../styles/globals.css";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";
import Loading from "./loading";
// import Nav from "../components/Nav";
// import Foot from "../components/Foot";

export const metadata = {
  title: "Swaybae",
  description: "This is the official site for Swaybae!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>

      <body
      // className="grid transition-colors duration-300 ease-in-out"
      // style={{
      //   backgroundImage: `url("https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
      //   height: "100%",
      //   width: "100%",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundAttachment: "fixed",
      //   backgroundColor: "#008080",
      // }}
      >
        <main className="">
          <ThemeProvider defaultTheme="mytheme">
            {/* <Nav /> */}
            <Providers>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </Providers>
            {/* <Foot /> */}
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
//   height: "100%",
//   width: "100%",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   backgroundAttachment: "fixed",
//   backgroundColor: "#008080",
// }}

// https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80

// https://images.unsplash.com/photo-1528731708534-816fe59f90cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80

// https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80
