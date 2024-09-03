'use client'
import {socialData} from '@/utils/constants'
import Tooltip from './ui/Tooltip'

export function Footer() {
  return (
    <footer className='w-full'>
      <div className='p-2 lg:p-4 3xl:p-6'>
        <div className='mx-auto flex flex-col items-center justify-between gap-4 md:flex-row-reverse md:gap-0 md:px-2 2xl:px-4 3xl:px-16 4xl:px-24'>
          <section className='flex flex-wrap items-center justify-center gap-3 sm:gap-2.5 2xl:gap-3 3xl:gap-6'>
            {socialData.map((icon, idx) => (
              <Tooltip key={idx} text={icon.label}>
                {' '}
                {/* Wrap each icon with Tooltip */}
                <div className='inline hover:animate-bounce'>
                  <a
                    href={icon.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex rounded-full border-transparent bg-light p-1.5 text-sm font-semibold text-primary shadow-md transition-all duration-200 ease-in hover:bg-light focus:outline-none lg:p-2 lg:font-extrabold 2xl:p-2.5 2xl:text-base 3xl:text-2xl dark:bg-slate-800 dark:hover:bg-slate-900'
                    style={{
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    {icon.icon}
                  </a>
                </div>
              </Tooltip>
            ))}
          </section>
          <section className='flex items-center justify-center text-sm lg:text-lg lg:font-medium 2xl:text-xl 3xl:text-2xl'>
            <div className='x'>&copy; 2024</div>
            <div className='mx-1 bg-gradient-to-tr from-secondary via-secondary to-primary bg-clip-text font-bold text-transparent lg:px-1'>
              | Sway Bae |
            </div>
            <div className='x'>All rights reserved</div>
          </section>
        </div>
      </div>
    </footer>
  )
}
