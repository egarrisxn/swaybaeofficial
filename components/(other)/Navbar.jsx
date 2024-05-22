'use client'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {Sling as Hamburger} from 'hamburger-react'
import ThemeSwitch from '../(ui)/ThemeSwitch'

const links = [
  {href: '/', label: 'Home'},
  {href: '/calendar', label: 'Calendar'},
  {href: '/blog', label: 'Blog'},
  {href: 'https://sway-bae-shop.fourthwall.com/', label: 'Store'},
]

export default function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const [clickedOutside, setClickedOutside] = useState(false)
  const closeDropdownOnOutsideClick = (event) => {
    if (isOpen && !event.target.closest('.dropdown')) {
      closeDropdown()
      setClickedOutside(true)
    }
  }

  useEffect(() => {
    document.addEventListener('click', closeDropdownOnOutsideClick)
    return () => {
      document.removeEventListener('click', closeDropdownOnOutsideClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const toggleDropdown = () => {
    setOpen(!isOpen)
    setClickedOutside(false)
  }
  const closeDropdown = () => {
    setOpen(false)
    setClickedOutside(false)
  }
  const handleLinkClick = () => {
    closeDropdown()
  }

  return (
    <header className='top-0 w-full'>
      <nav className='navbar relative mx-auto px-2 lg:container'>
        <div className='navbar-start ml-1 lg:ml-2'>
          <Link href='/'>
            <div className='hidden flex-row items-center lg:flex'>
              <figure className='mask mask-heart size-9 2xl:size-12 4xl:size-16'>
                <Image
                  src='/avatar.png'
                  alt='Logo'
                  height={64}
                  width={64}
                  className='h-fit w-fit'
                />
              </figure>
              <p className='ml-1 bg-gradient-to-tr from-secondary via-secondary to-primary bg-clip-text text-sm font-bold text-transparent 2xl:text-base 4xl:text-lg'>
                Creator
                <br />
                of Chaos
              </p>
            </div>
          </Link>
          <div className='dropdown z-50' style={{position: 'relative'}}>
            <button
              tabIndex={0}
              className='lg:hidden'
              onClick={toggleDropdown}
              aria-label='Toggle Menu'
              style={{
                paddingTop: '0.5rem',
              }}
            >
              <Hamburger size={24} toggled={!clickedOutside && isOpen} />
            </button>
            {isOpen && (
              <ul
                tabIndex={0}
                className=' menu dropdown-content z-50 mx-[-12px] flex bg-light dark:bg-dark'
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    closeDropdown()
                  }
                }}
                onBlur={() => {
                  closeDropdown()
                }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  width: '100vw',
                  height: '100vh',
                  left: '0',
                }}
              >
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`${link.label} relative z-50 bg-clip-text p-4 text-5xl hover:text-secondary hover:underline hover:underline-offset-4`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className='navbar-center z-50 mx-auto'>
          <ul className='menu menu-horizontal mx-auto hidden items-center justify-center lg:flex lg:space-x-4 lg:pl-4 lg:text-lg xl:space-x-8 xl:pl-6 xl:text-xl 2xl:space-x-12 2xl:pl-8 2xl:text-2xl 3xl:space-x-16 3xl:pl-10 3xl:text-3xl 4xl:pl-12 4xl:text-4xl'>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${link.label} relative border-none bg-clip-text transition duration-200 hover:text-secondary hover:underline hover:underline-offset-4 `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href='/'>
            <div className='flex flex-row items-center lg:hidden'>
              <figure className='mask mask-heart size-8'>
                <Image src='/avatar.png' alt='Logo' height={32} width={32} />
              </figure>
              <p className='ml-1 bg-gradient-to-tr from-secondary via-secondary to-primary bg-clip-text text-sm font-bold text-transparent '>
                Creator
                <br />
                of Chaos
              </p>
            </div>
          </Link>
        </div>
        <div className='navbar-end z-50 mr-1 lg:mr-2'>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  )
}
