import ScrollToTop from '@/components/(ui)/ScrollToTop'
import Navbar from '@/components/(other)/Navbar'
import Footer from '@/components/(other)/Footer'

export default function AppLayout({children}) {
  return (
    <main>
      <Navbar />
      {children}
      <ScrollToTop />
      <Footer />
    </main>
  )
}
