import '../../../styles/studio.css'

export default function StudioLayout({children}) {
  return (
    <html lang='en'>
      <body id='app'>{children}</body>
    </html>
  )
}

// #app {
//   height: 100vh;
//   max-height: 100dvh;
//   overscroll-behavior: none;
//   -webkit-font-smoothing: antialiased;
//   overflow: auto;
// }
