import {Hero} from '@/components/Hero'
import {About} from '@/components/About'
import {Socials} from '@/components/Socials'
import {Contact} from '@/components/Contact'

export default function Home() {
  return (
    <div className='mx-auto w-full px-2 sm:container sm:px-4 3xl:px-20 4xl:px-40'>
      <div className='flex flex-col'>
        <Hero />
        <About />
        <Socials />
        <Contact />
      </div>
    </div>
  )
}
