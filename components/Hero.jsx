import Image from 'next/image'

export function Hero() {
  return (
    <section className='w-full' aria-labelledby='hero-heading'>
      <h1 id='hero-heading' className='sr-only'>
        Hero Section
      </h1>
      <figure className='relative z-10 mx-auto max-w-screen-3xl px-4 pb-40 pt-36 sm:px-8 sm:pb-20 sm:pt-16 md:px-12 md:pb-16 md:pt-12 lg:px-48 lg:pb-16 lg:pt-12 xl:pb-12 xl:pt-4'>
        <Image
          src='/Hero.png'
          width={1450}
          height={900}
          alt='Hero image description'
          className='flex h-full w-full flex-shrink'
          priority
        />
      </figure>
    </section>
  )
}
