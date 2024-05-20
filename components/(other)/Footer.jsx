import SocialButtons from '../(ui)/SocialButtons'

export default function Footer() {
  return (
    <footer className='w-full'>
      <div className='sticky bottom-1 flex flex-col items-center justify-center p-4 text-sm max-[300px]:p-0 sm:text-base 2xl:text-lg 4xl:text-3xl'>
        <hr className='m-2 mx-auto w-full border-2 border-purple-800/50 sm:container' />
        <section className='my-4 flex flex-row items-center justify-center max-[300px]:max-w-60 lg:my-5 xl:my-7 4xl:my-10'>
          <p className='hidden font-semibold md:block md:pr-2'>Socials:</p>
          <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
            <SocialButtons />
          </div>
        </section>
        <hr className='m-2 mx-auto w-full border-2 border-purple-800/50 sm:container' />
        <section className='pt-2 sm:text-base md:text-lg xl:pb-2 xl:pt-3 2xl:text-xl 4xl:py-6 4xl:text-3xl'>
          <div className='leading-4 text-base-content 2xl:leading-7 4xl:leading-8'>
            © 2024
            <span className='mx-1 bg-gradient-to-tr from-secondary via-secondary to-primary bg-clip-text px-1 font-bold leading-4 text-transparent max-[300px]:mx-0 2xl:leading-7 4xl:leading-8'>
              | Sway Bae |
            </span>
            All rights reserved
          </div>
        </section>
      </div>
    </footer>
  )
}
