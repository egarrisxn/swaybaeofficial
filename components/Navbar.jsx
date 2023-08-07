'use client';
import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { useTheme, ThemeProvider } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import MyLogo from '@/public/images/logowhite.png';

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  const toggleDropdown = () => {
    setOpen(!isOpen);
  };

  const closeDropdown = () => {
    setOpen(false);
  };

  const handleLinkClick = () => {
    closeDropdown();
  };

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'mytheme' : 'dark');
  };

  return (
    <nav className='navbar rounded-2xl px-6 py-2 lg:shadow-2xl'>
      <div className='navbar-start text-secondary'>
        <div className='dropdown'>
          <button
            tabIndex={0}
            className='lg:hidden'
            onClick={toggleDropdown}
            aria-label='Toggle Menu'
            style={{
              padding: '12px', // Adjust padding for tap/click area
            }}
          >
            <Hamburger size={24} toggled={isOpen} toggle={toggleDropdown} />
          </button>
          {isOpen && (
            <ul
              tabIndex={0}
              className='dropdown-content menu menu-sm z-[1] mt-3 w-52 rounded-xl bg-base-100 p-2 text-secondary shadow-xl'
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  closeDropdown();
                }
              }}
              onBlur={() => {
                // Close the dropdown when focus leaves
                closeDropdown();
              }}
            >
              <li>
                <Link href='/' onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/aboutme' onClick={handleLinkClick}>
                  About Me
                </Link>
              </li>
              <li>
                <Link href='/findme' onClick={handleLinkClick}>
                  Where To Find Me
                </Link>
              </li>
              <li>
                <Link href='/merch' onClick={handleLinkClick}>
                  Merch
                </Link>
              </li>
              <li>
                <Link href='/mediakit' onClick={handleLinkClick}>
                  Media Kit
                </Link>
              </li>
              <li>
                <Link href='/inquire' onClick={handleLinkClick}>
                  Business Inquiries
                </Link>
              </li>
              <li>
                <Link href='/subathon' onClick={handleLinkClick}>
                  Subathon!
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className=' hidden animate-pulse lg:flex'>
          <Link href='/'>
            <Image src={MyLogo} width={80} height={40} alt='Logo' priority />
          </Link>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal space-x-4'>
          <li>
            <Link
              href='/aboutme'
              className='via-urgent bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent'
            >
              About Me!
            </Link>
          </li>
          <li>
            <Link
              href='/findme'
              className=' via-urgent bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent '
            >
              Where To Find Me
            </Link>
          </li>
          <li>
            <Link
              href='/merch'
              className=' via-urgent bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent '
            >
              Merch
            </Link>
          </li>
          <li>
            <Link
              href='/mediakit'
              className=' via-urgent bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent '
            >
              Media Kit
            </Link>
          </li>
          <li>
            <Link
              href='/inquire'
              className=' via-urgent bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent '
            >
              Business Inquiries
            </Link>
          </li>
          <li>
            <Link
              href='/subathon'
              className=' via-urgent bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent '
            >
              Subathon!
            </Link>
          </li>
        </ul>
      </div>
      <div className='flex animate-pulse items-center justify-center lg:hidden'>
        <Link href='/'>
          <Image src={MyLogo} width={100} height={50} alt='Logo' />
        </Link>
      </div>
      <div className='navbar-end'>
        <label
          tabIndex={0}
          className={`swap swap-rotate btn-xs ${isDarkMode ? 'dark' : ''}`}
        >
          {/* this hidden checkbox controls the state */}
          <input type='checkbox' onChange={toggleTheme} />

          {/* sun icon */}
          <svg
            className={`swap-on ${
              isDarkMode ? 'dark-fill' : 'mytheme-fill'
            } h-7 w-7`}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path
              d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z'
              fill='goldenrod'
            />
          </svg>

          {/* moon icon */}
          <svg
            className={`swap-off ${
              isDarkMode ? 'dark-fill' : 'mytheme-fill'
            } h-7 w-7`}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path
              d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z'
              fill='slategray'
            />
          </svg>
        </label>
      </div>
    </nav>
  );
};

const Navbar = () => (
  <ThemeProvider>
    <Nav />
  </ThemeProvider>
);

export default Navbar;
