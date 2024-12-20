import Hero from '@/containers/home-page/Hero'
import About from '@/containers/home-page/About'
import Socials from '@/containers/home-page/Socials'
import {Contact} from '@/containers/home-page/Contact'

// ! Test Loader
// function loadingPage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Loading...')
//     }, 3000)
//   })
// }
// export default async function Home() {
//   const load = await loadingPage()
//   console.log({load})

export default function Home() {
  return (
    <main className='mx-auto w-full sm:container'>
      <div className='flex flex-col px-2 sm:px-4 3xl:px-20 4xl:px-40'>
        <Hero />
        <About />
        <Socials />
        <section id='contact'>
          <Contact />
        </section>
      </div>
    </main>
  )
}
