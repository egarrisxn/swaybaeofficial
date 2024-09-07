'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useState, useEffect} from 'react'
import {Sheet, SheetContent, SheetTrigger} from './ui/Sheet'
import {Button} from './ui/Button'
import Logo from './ui/Logo'
import ThemeToggle from './ui/ThemeToggle'
import SocialIcons from './ui/SocialsIcons'
import {Menu} from 'lucide-react'

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
    color: 'var(--p2b)',
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
                className='mx-0.5 my-2 block text-5xl hover:text-p2b sm:my-3 md:mx-4 md:my-0 md:inline md:text-lg lg:mx-5 lg:text-2xl xl:mx-12 2xl:mx-14 2xl:text-4xl 3xl:mx-16'
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
              <Menu size={36} strokeWidth={2} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className='flex w-full flex-col justify-between'>
              <section>{state.mounted && <ThemeToggle />}</section>
              <section className='flex flex-grow'>
                <ul className='inline space-y-5 pt-6'>
                  {navLinks.map((link) => (
                    <li
                      key={link.href}
                      className='block text-7xl font-semibold hover:text-p2b max-[375px]:text-5xl'
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
                        <a
                          replace
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
              <section className='flex h-24 items-center justify-center gap-4 max-[375px]:gap-3'>
                <SocialIcons />
              </section>
              <section className='flex items-center justify-center'>
                <p className='bg-gradient-to-bl from-primary-tint via-secondary-tint to-dark bg-clip-text text-sm font-semibold tracking-tight text-transparent dark:bg-gradient-to-tl dark:from-primary-fade dark:via-secondary-fade dark:to-primary-tint'>
                  <span className='pr-0.5 font-normal text-foreground'>© 2024 </span>
                  Sway Bae Official
                </p>
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
