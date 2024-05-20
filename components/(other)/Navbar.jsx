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
      <nav className='navbar relative 3xl:px-20 4xl:px-60'>
        <div className='navbar-start ml-1 lg:ml-2'>
          <div className='mask mask-heart hidden size-9 lg:block'>
            <Link href='/'>
              <Image src='/avatar.png' alt='Logo' height={36} width={36} />
            </Link>
          </div>
          <Link href='/'>
            <p className='ml-1 hidden bg-gradient-to-tr from-secondary via-secondary to-primary bg-clip-text text-sm font-bold text-transparent lg:block'>
              Creator
              <br />
              of Chaos
            </p>
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
          <ul className='menu menu-horizontal mx-auto hidden items-center justify-center text-lg lg:flex xl:space-x-8 2xl:space-x-12 3xl:space-x-16 3xl:text-xl'>
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
          <div className='mask mask-heart block size-8 lg:hidden'>
            <Link href='/'>
              <Image src='/avatar.png' alt='Logo' height={32} width={32} />
            </Link>
          </div>
          <Link href='/'>
            <p className='ml-1 block bg-gradient-to-tr from-secondary via-secondary to-primary bg-clip-text text-sm font-bold text-transparent lg:hidden'>
              Creator
              <br />
              of Chaos
            </p>
          </Link>
        </div>
        <div className='navbar-end z-50 mr-1 lg:mr-2'>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  )
}
