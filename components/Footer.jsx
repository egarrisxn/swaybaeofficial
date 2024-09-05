'use client'
import {socialData} from '@/utils/constants'
import {Icon} from './ui/Icon'
import {Tooltip} from './ui/Tooltip'

export function Footer() {
  return (
    <footer className='w-full'>
      <div className='p-2 lg:p-4 3xl:p-6'>
        <div className='mx-auto flex flex-col items-center justify-between gap-6 px-1 md:flex-row-reverse md:gap-0 2xl:px-4 3xl:px-16 4xl:px-24'>
          <section className='flex items-center justify-center gap-3 sm:gap-2 xl:gap-3 3xl:gap-6'>
            {socialData.map((icon, idx) => (
              <Tooltip key={idx} text={icon.label}>
                <Icon href={icon.href}>{icon.icon}</Icon>
              </Tooltip>
            ))}
          </section>
          <section className='flex items-center justify-center'>
            <p className='bg-gradient-to-bl from-primary-tint via-secondary-tint to-dark bg-clip-text text-sm font-semibold tracking-tight text-transparent lg:text-lg 2xl:text-xl 3xl:text-2xl dark:bg-gradient-to-tl dark:from-primary-fade dark:via-secondary-fade dark:to-primary-tint'>
              <span className='pr-0.5 font-normal text-foreground'>© 2024 </span>
              Sway Bae Official
            </p>
          </section>
        </div>
      </div>
    </footer>
  )
}
