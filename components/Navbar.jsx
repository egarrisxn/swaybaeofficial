'use client'
import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from 'next/navigation'
import {useState, useEffect, useCallback} from 'react'
import {useTheme} from 'next-themes'

const navLinks = [
  {href: '/', label: 'Home'},
  {href: '/calendar', label: 'Calendar'},
  {href: '/blog', label: 'Blog'},
  {href: 'https://sway-bae-shop.fourthwall.com/', label: 'Store', external: true},
]

export function Navbar() {
  const pathname = usePathname()
  const {resolvedTheme, setTheme} = useTheme()
  const [state, setState] = useState({
    isMobileDropdownOpen: false,
    isVisible: false,
    mounted: false,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setState((prevState) => ({...prevState, isVisible: true, mounted: true}))
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleToggleMenu = useCallback(() => {
    setState((prevState) => ({...prevState, isMobileDropdownOpen: !prevState.isMobileDropdownOpen}))
  }, [])

  const handleToggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }, [resolvedTheme, setTheme])

  return (
    <header
      className={`w-full transition-opacity duration-200 ${state.isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <nav className='z-20 p-2 sm:p-4 3xl:p-6' aria-label='Main navigation'>
        <div className='mx-auto flex flex-row flex-wrap items-center justify-between md:px-2 2xl:px-4 3xl:px-16 4xl:px-24'>
          <Link href='/' aria-label='Home'>
            <div className='flex items-center'>
              <Image
                src='/avatar.png'
                alt='Logo'
                height={64}
                width={64}
                className='size-10 xl:size-12 3xl:size-14 4xl:size-16'
              />
              <p className='ml-1 bg-gradient-to-tr from-secondary via-secondary to-primary bg-clip-text text-sm font-bold text-transparent xl:ml-1.5 xl:text-base 3xl:text-lg'>
                Creator
                <br />
                of Chaos
              </p>
            </div>
          </Link>
          <button
            type='button'
            className='inline-flex items-center text-sm text-primary md:hidden dark:text-secondary'
            aria-controls='navbar-menu'
            aria-label='Toggle navigation menu'
            aria-expanded={state.isMobileDropdownOpen}
            onClick={handleToggleMenu}
          >
            <span className='sr-only'>Open main menu</span>
            {state.isMobileDropdownOpen ? (
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
          </button>
          <ul
            id='navbar-menu'
            className={`block h-screen w-full flex-grow md:inline md:h-auto md:w-auto md:grow-0 ${state.isMobileDropdownOpen ? 'block' : 'hidden'}`}
            aria-label='Primary navigation'
          >
            {navLinks.map((link) => (
              <li
                key={link.href}
                className='mx-0.5 my-2.5 block text-6xl sm:my-3.5 md:mx-4 md:my-0 md:inline md:text-lg lg:mx-6 lg:text-2xl xl:mx-12 2xl:mx-14 2xl:text-4xl 3xl:mx-16'
              >
                {link.external ? (
                  <a href={link.href} className='z-20 bg-clip-text'>
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={`z-20 bg-clip-text transition-all duration-150 ease-in-out ${pathname === link.href ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            {state.mounted && (
              <li className='mt-2 md:hidden'>
                <button
                  onClick={handleToggleTheme}
                  className='inline-flex items-center rounded-lg px-1 py-2 text-sm text-secondary md:hidden dark:text-primary'
                  aria-label='Toggle theme'
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
          {state.mounted && (
            <button
              onClick={handleToggleTheme}
              className='z-50 hidden items-center rounded-lg p-1 text-sm text-secondary md:inline-flex dark:text-primary'
              aria-label='Toggle theme'
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
          )}
        </div>
      </nav>
    </header>
  )
}

// 'use client'
// import Link from 'next/link'
// import Image from 'next/image'
// import {usePathname} from 'next/navigation'
// import {useState, useEffect, useCallback} from 'react'
// import {useTheme} from 'next-themes'

// const navLinks = [
//   {href: '/', label: 'Home'},
//   {href: '/calendar', label: 'Calendar'},
//   {href: '/blog', label: 'Blog'},
//   {href: 'https://sway-bae-shop.fourthwall.com/', label: 'Store', external: true},
// ]

// export function Navbar() {
//   const pathname = usePathname()
//   const {resolvedTheme, setTheme} = useTheme()
//   const [state, setState] = useState({
//     isMobileDropdownOpen: false,
//     isVisible: false,
//     mounted: false,
//   })

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setState((prevState) => ({...prevState, isVisible: true, mounted: true}))
//     }, 1000)
//     return () => clearTimeout(timer)
//   }, [])

//   const handleToggleMenu = useCallback(() => {
//     setState((prevState) => ({
//       ...prevState,
//       isMobileDropdownOpen: !prevState.isMobileDropdownOpen,
//     }))
//   }, [])

//   const handleToggleTheme = useCallback(() => {
//     setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
//   }, [resolvedTheme, setTheme])

//   return (
//     <header
//       className={`w-full transition-opacity duration-200 ${state.isVisible ? 'opacity-100' : 'opacity-0'}`}
//     >
//       <nav className='z-20 p-2 sm:p-4 3xl:p-6' aria-label='Main navigation'>
//         <div className='mx-auto flex flex-row flex-wrap items-center justify-between md:px-2 2xl:px-4 3xl:px-16 4xl:px-24'>
//           <Link href='/' aria-label='Home'>
//             <div className='flex items-center'>
//               <Image
//                 src='/avatar.png'
//                 alt='Logo'
//                 height={64}
//                 width={64}
//                 className='size-10 xl:size-12 3xl:size-14 4xl:size-16'
//               />
//               <p className='ml-1 bg-gradient-to-tr from-secondary via-secondary to-primary bg-clip-text text-sm font-bold text-transparent xl:ml-1.5 xl:text-base 3xl:text-lg'>
//                 Creator
//                 <br />
//                 of Chaos
//               </p>
//             </div>
//           </Link>
//           <button
//             type='button'
//             className='inline-flex items-center text-sm text-primary md:hidden dark:text-secondary'
//             aria-controls='navbar-menu'
//             aria-label='Toggle navigation menu'
//             aria-expanded={state.isMobileDropdownOpen}
//             onClick={handleToggleMenu}
//           >
//             <span className='sr-only'>Open main menu</span>
//             {state.isMobileDropdownOpen ? (
//               <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 fill='none'
//                 viewBox='0 0 24 24'
//                 strokeWidth={2}
//                 stroke='currentColor'
//                 className='size-9'
//               >
//                 <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
//               </svg>
//             ) : (
//               <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 fill='none'
//                 viewBox='0 0 24 24'
//                 strokeWidth={2}
//                 stroke='currentColor'
//                 className='size-9'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
//                 />
//               </svg>
//             )}
//           </button>
//           <ul
//             id='navbar-menu'
//             className={`block h-screen w-full flex-grow md:inline md:h-auto md:w-auto md:grow-0 ${state.isMobileDropdownOpen ? 'block' : 'hidden'}`}
//             aria-label='Primary navigation'
//           >
//             {navLinks.map((link) => (
//               <li
//                 key={link.href}
//                 className='mx-0.5 my-2.5 block text-6xl sm:my-3.5 md:mx-4 md:my-0 md:inline md:text-lg lg:mx-6 lg:text-2xl xl:mx-12 2xl:mx-14 2xl:text-4xl 3xl:mx-16'
//               >
//                 {link.external ? (
//                   <a href={link.href} className='z-20 bg-clip-text'>
//                     {link.label}
//                   </a>
//                 ) : (
//                   <Link
//                     href={link.href}
//                     className={`z-20 bg-clip-text transition-all duration-150 ease-in-out ${pathname === link.href ? 'active' : ''}`}
//                   >
//                     {link.label}
//                   </Link>
//                 )}
//               </li>
//             ))}
//             {state.mounted && (
//               <li className='mt-2 md:hidden'>
//                 <button
//                   onClick={handleToggleTheme}
//                   className='inline-flex items-center rounded-lg px-1 py-2 text-sm text-secondary md:hidden dark:text-primary'
//                   aria-label='Toggle theme'
//                 >
//                   {resolvedTheme === 'light' ? (
//                     <svg
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       strokeWidth={2}
//                       stroke='currentColor'
//                       className='size-9'
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       strokeWidth={2}
//                       stroke='currentColor'
//                       className='size-9'
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
//                       />
//                     </svg>
//                   )}
//                 </button>
//               </li>
//             )}
//           </ul>
//           {state.mounted && (
//             <button
//               onClick={handleToggleTheme}
//               className='z-50 hidden items-center rounded-lg p-1 text-sm text-secondary md:inline-flex dark:text-primary'
//               aria-label='Toggle theme'
//             >
//               {resolvedTheme === 'light' ? (
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   fill='none'
//                   viewBox='0 0 24 24'
//                   strokeWidth={2}
//                   stroke='currentColor'
//                   className='size-9 xl:size-10 3xl:size-11'
//                 >
//                   <path
//                     strokeLinecap='round'
//                     strokeLinejoin='round'
//                     d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   fill='none'
//                   viewBox='0 0 24 24'
//                   strokeWidth={2}
//                   stroke='currentColor'
//                   className='size-9 xl:size-10 3xl:size-11'
//                 >
//                   <path
//                     strokeLinecap='round'
//                     strokeLinejoin='round'
//                     d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
//                   />
//                 </svg>
//               )}
//             </button>
//           )}
//         </div>
//       </nav>
//     </header>
//   )
// }
