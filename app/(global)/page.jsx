import Hero from '@/components/(hero)/Hero'
import About from '@/components/(about)/About'
import Socials from '@/components/(socials)/Socials'
import Inquiries from '@/components/(inquiries)/Inquiries'

export default function Home() {
  return (
    <main className='mx-auto flex max-w-7xl flex-col px-2 sm:px-4'>
      <label className='sr-only'>Home Page</label>
      <Hero />
      <hr className='m-2 mx-auto w-full border-2 border-purple-800/50 sm:container' />
      <About />
      <hr className='m-2 mx-auto w-full border-2 border-purple-800/50 sm:container' />
      <Socials />
      <hr className='m-2 mx-auto w-full border-2 border-purple-800/50 sm:container' />
      <Inquiries />
    </main>
  )
}
