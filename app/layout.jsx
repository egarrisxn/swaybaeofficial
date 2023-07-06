import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Foot from "@/components/Foot";

export const metadata = {
  title: "Swaybae9000",
  description: "This is the official website of Swaybae9000",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="mytheme">
      <head>
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

      <body
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
          height: "100%",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundColor: "#008080",
        }}
      >
        <main className="app relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
          <Nav />
          {children}
          <Foot />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

// https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80

// https://images.unsplash.com/photo-1528731708534-816fe59f90cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80

// https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80
