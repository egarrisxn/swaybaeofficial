'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <main className='min-h-screen w-full p-0 4xl:min-h-fit'>
      <label className='sr-only'>Hero</label>
      <section className='z-30 mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl items-center justify-center'>
        <motion.div
          className='z-30 flex max-w-3xl items-center justify-center xl:max-w-4xl 4xl:max-w-[96rem]'
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
        >
          <Image
            src='/herologo.png'
            quality={100}
            width={1450}
            height={900}
            alt='Hero'
            className='flex h-full w-full flex-shrink'
            priority
          />
        </motion.div>
      </section>
    </main>
  )
}
