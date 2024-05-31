'use client'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'
import {navLinks} from '@/utils/constants'

export function Navbar() {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const {resolvedTheme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className='w-full'>
      <label className='sr-only' aria-label='Navbar'>
        Navbar
      </label>
      <nav className='z-20 p-2 sm:p-4 3xl:p-6'>
        <div className='mx-auto flex flex-row flex-wrap items-center justify-between md:px-2 2xl:px-4 3xl:px-16 4xl:px-24'>
          <Link href='/'>
            <div className='flex items-center'>
              <Image
                src='/avatar.png'
                alt='Logo'
                height={64}
                width={64}
                className='size-10 xl:size-12 3xl:size-14 4xl:size-16'
                loading='lazy'
              />
              <p className='ml-1 bg-gradient-to-tr from-secondary via-secondary to-primary bg-clip-text text-sm font-bold text-transparent xl:ml-1.5 xl:text-base 3xl:text-lg'>
                Creator
                <br />
                of Chaos
              </p>
            </div>
          </Link>
          <div
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center text-sm text-primary md:hidden dark:text-secondary'
            aria-controls='navbar-default'
            aria-expanded={isMobileDropdownOpen}
            onClick={() => {
              setIsMobileDropdownOpen(!isMobileDropdownOpen)
            }}
          >
            <span className='sr-only'>Open main menu</span>
            {isMobileDropdownOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='size-9'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='size-9'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            )}
          </div>
          <ul
            className={`block h-screen w-full flex-grow md:inline md:h-auto md:w-auto md:grow-0 ${isMobileDropdownOpen ? 'block' : 'hidden'}`}
          >
            {navLinks.map((link) => (
              <li
                key={link.href}
                className='mx-0.5 my-2.5 block text-6xl sm:my-3.5 md:mx-4 md:my-0 md:inline md:text-lg lg:mx-6 lg:text-2xl xl:mx-12 2xl:mx-14 2xl:text-4xl 3xl:mx-16'
              >
                <Link
                  href={link.href}
                  className={`${link.label} z-20 bg-clip-text hover:text-secondary hover:underline hover:underline-offset-4`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {mounted && (
              <li className='mt-2 md:hidden'>
                <button
                  onClick={() => {
                    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
                  }}
                  className='inline-flex items-center rounded-lg px-1 py-2 text-sm text-secondary md:hidden dark:text-primary'
                >
                  {resolvedTheme === 'light' ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={2}
                      stroke='currentColor'
                      className='size-9'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={2}
                      stroke='currentColor'
                      className='size-9'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
                      />
                    </svg>
                  )}
                </button>
              </li>
            )}
          </ul>
          {mounted ? (
            <button
              onClick={() => {
                setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
              }}
              className='z-50 hidden items-center rounded-lg p-1 text-sm text-secondary md:inline-flex dark:text-primary'
            >
              {resolvedTheme === 'light' ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='size-9 xl:size-10 3xl:size-11'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='size-9 xl:size-10 3xl:size-11'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
                  />
                </svg>
              )}
            </button>
          ) : (
            <div className='hidden items-center rounded-lg border-2 p-1 text-sm md:inline-flex' />
          )}
        </div>
      </nav>
    </header>
  )
}
