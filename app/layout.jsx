import '@/styles/globals.css'
import Nav from '@/components/Nav'
import Foot from '@/components/Foot'

export const metadata = {
  title: 'Swaybae9000',
  description: 'This is the official website of Swaybae9000',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>

      <head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </head>

      <body>
        <main className='app relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6'>
          <Nav />
          {children}
          <Foot />
        </main>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>

    </html>
  )
}

export default RootLayout;
