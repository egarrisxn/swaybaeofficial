'use client'
import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from 'next/navigation'
import {useState, useEffect, useCallback} from 'react'
import {useTheme} from 'next-themes'
import {Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription} from './ui/Sheet'
import {Button} from './ui/Button'
import {Tooltip} from './ui/Tooltip'
import {Icon} from './ui/Icon'
import SocialIcons from './SocialIcons'

const Logo = () => {
  return (
    <Link href='/' aria-label='Home'>
      <Tooltip direction='bottom' text='Home'>
        <div className='flex items-center'>
          <Image
            src='/avatar.png'
            alt='An avatar for Sway Bae'
            height={64}
            width={64}
            className='size-10 xl:size-12 3xl:size-14 4xl:size-16'
          />
          <div className='ml-1 bg-gradient-to-tr from-secondary-tint via-secondary to-primary-tint bg-clip-text text-sm font-bold text-transparent xl:ml-1.5 xl:text-lg 3xl:text-2xl'>
            <p className='leading-tight tracking-tight'>Creator</p>
            <p className='leading-tight tracking-tight'>of Chaos</p>
          </div>
        </div>
      </Tooltip>
    </Link>
  )
}

const ThemeToggle = () => {
  const {resolvedTheme, setTheme} = useTheme()
  const handleToggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }, [resolvedTheme, setTheme])
  return (
    <Button onClick={handleToggleTheme} variant='ghost' size='icon' aria-label='Toggle Theme'>
      <Tooltip direction='bottom' text={resolvedTheme === 'light' ? 'Dark' : 'Light'}>
        {resolvedTheme === 'light' ? <Icon.MoonStar /> : <Icon.Sun />}
      </Tooltip>
    </Button>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [state, setState] = useState({
    isVisible: false,
    mounted: false,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setState({isVisible: true, mounted: true})
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const navLinks = [
    {href: '/', label: 'Home'},
    {href: '/calendar', label: 'Calendar'},
    {href: '/blog', label: 'Blog'},
    {href: 'https://sway-bae-shop.fourthwall.com/', label: 'Store', external: true},
  ]

  const activeStyle = {
    color: 'var(--b2p)',
    fontWeight: '500',
  }

  //! Desktop Navbar
  function DesktopNav() {
    return (
      <nav className='hidden items-center justify-between p-4 md:flex'>
        <Logo />
        <div className='flex'>
          <ul className='inline w-full'>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className='mx-0.5 my-2 block text-5xl font-medium transition-all hover:text-b2p sm:my-3 md:mx-4 md:my-0 md:inline md:text-lg lg:mx-5 lg:text-2xl xl:mx-12 2xl:mx-14 2xl:text-4xl 3xl:mx-16'
              >
                {link.external ? (
                  <a
                    href={link.href}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='hover:text-p2b'
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} style={pathname === link.href ? activeStyle : {}}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        {state.mounted && <ThemeToggle />}
      </nav>
    )
  }

  //! Mobile Navbar
  function MobileNav() {
    return (
      <nav className='flex items-center justify-between p-4 md:hidden'>
        <Logo />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon'>
              <Tooltip direction='bottom' text='Menu'>
                <Icon.Menu />
              </Tooltip>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className='hidden'>Sway Bae</SheetTitle>
            <SheetDescription className='hidden'>Creator of Chaos</SheetDescription>
            <div className='flex h-full flex-col justify-between gap-4'>
              <section>{state.mounted && <ThemeToggle />}</section>
              <section className='flex-grow'>
                <ul className='inline space-y-4'>
                  {navLinks.map((link) => (
                    <li
                      key={link.href}
                      className='semibold block text-6xl font-medium transition-all ease-in hover:text-b2p max-[375px]:text-5xl'
                    >
                      {link.external ? (
                        <a href={link.href} target='_blank' rel='noreferrer noopener'>
                          {link.label}
                        </a>
                      ) : (
                        <a
                          replace='true'
                          href={link.href}
                          style={pathname === link.href ? activeStyle : {}}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
              <section className='space-y-6'>
                <div className='flex items-center justify-center gap-3 sm:gap-4'>
                  <SocialIcons />
                </div>
                <div className='flex items-center justify-center'>
                  <p className='bg-gradient-to-bl from-primary-tint via-secondary-tint to-dark bg-clip-text text-sm font-semibold tracking-tight text-transparent dark:bg-gradient-to-tl dark:from-primary-fade dark:via-secondary-fade dark:to-primary-tint'>
                    <span className='pr-0.5 font-normal text-foreground'>© 2024 </span>
                    Sway Bae Official
                  </p>
                </div>
              </section>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    )
  }

  return (
    <header
      className={`w-full transition-opacity ease-out ${state.isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <DesktopNav />
      <MobileNav />
    </header>
  )
}
