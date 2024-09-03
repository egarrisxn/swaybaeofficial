import {Hero} from '@/components/Hero'
import {About} from '@/components/About'
import {Socials} from '@/components/Socials'
import {Contact} from '@/components/Contact'

export default function Home() {
  return (
    <main className='mx-auto w-full sm:container'>
      <div className='flex flex-col px-2 sm:px-4 3xl:px-20 4xl:px-40'>
        <Hero />
        <About />
        <Socials />
        <Contact />
      </div>
    </main>
  )
}
