'use client'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer className='w-full'>
      <div className='px-4 py-6 md:px-6'>
        <div className='mx-auto flex flex-col items-center justify-between gap-8 xl:gap-10 2xl:gap-12 3xl:gap-14'>
          <section className='flex items-center justify-center gap-3 sm:gap-4 lg:gap-5 xl:gap-7 2xl:gap-8 3xl:gap-9'>
            <SocialIcons />
          </section>
          <section className='flex items-center justify-center'>
            <p className='bg-gradient-to-bl from-primary-tint via-secondary-tint to-dark bg-clip-text text-base font-semibold tracking-tight text-transparent lg:text-lg 2xl:text-2xl 3xl:text-3xl dark:bg-gradient-to-tl dark:from-primary-fade dark:via-secondary-fade dark:to-primary-tint'>
              <span className='pr-0.5 font-normal text-foreground'>© 2024 </span>
              Sway Bae Official
            </p>
          </section>
        </div>
      </div>
    </footer>
  )
}
