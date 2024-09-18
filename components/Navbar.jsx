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

const navLinks = [
  {href: '/', label: 'Home'},
  {href: '/calendar', label: 'Calendar'},
  {href: '/blog', label: 'Blog'},
  {href: '/contact', label: 'Contact'},
  {href: 'https://sway-bae-shop.fourthwall.com/', label: 'Store', external: true},
]

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

  const activeStyle = {
    color: 'var(--b2p)',
    fontWeight: '500',
  }

  return (
    <header
      className={`mx-auto w-full max-w-screen-4xl shadow transition-opacity ease-out dark:shadow-gray-tint ${state.isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <nav className='flex items-center justify-between p-4 sm:gap-4 lg:gap-8 xl:gap-12 2xl:gap-14 2xl:p-6 3xl:gap-16 3xl:p-8'>
        <section>
          <Link href='/' aria-label='Home'>
            <div className='flex items-center'>
              <Image
                // src='/paperavatar.png'
                src='/avatar2024.png'
                alt='Avatar of Sway and link to home page'
                height={64}
                width={64}
                className='size-10 xl:size-12 3xl:size-14 4xl:size-16'
              />
              <Tooltip direction='bottom' text='Home'>
                <p className='bg-gradient-to-tr from-secondary-tint via-secondary to-primary-tint bg-clip-text font-extrabold leading-none tracking-tighter text-transparent md:tracking-tight xl:text-lg xl:leading-none 2xl:text-xl 2xl:leading-none 3xl:text-3xl 3xl:leading-none'>
                  <span className='pl-1'>Creator</span>
                  <br />
                  of Chaos
                </p>
              </Tooltip>
            </div>
          </Link>
        </section>
        <section className='flex-1'>
          <ul className='hidden w-full justify-end gap-4 sm:inline-flex md:gap-6 lg:gap-8 2xl:gap-14 3xl:gap-16'>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className='text-lg font-medium transition-all hover:text-b2p md:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl'
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
        </section>
        <section>
          <div className='flex sm:hidden'>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className='sm:hidden'>
                  <Tooltip direction='bottom' text='Menu'>
                    <Icon.Menu />
                  </Tooltip>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className='hidden'>Sway Bae</SheetTitle>
                <SheetDescription className='hidden'>Creator of Chaos</SheetDescription>
                <div className='flex h-full flex-col justify-between gap-4'>
                  <div>{state.mounted && <ThemeToggle />}</div>
                  <div className='flex-grow'>
                    <ul className='inline space-y-1'>
                      {navLinks.map((link) => (
                        <li
                          key={link.href}
                          className='text-7xl font-medium transition-all ease-in hover:text-b2p max-[400px]:text-6xl max-[350px]:text-5xl'
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
                  </div>
                  <div className='space-y-6'>
                    <div className='mx-auto flex justify-center gap-3 sm:gap-4'>
                      <SocialIcons />
                    </div>
                    <p className='bg-gradient-to-bl from-primary-tint via-secondary-tint to-dark bg-clip-text text-center font-semibold tracking-tighter text-transparent dark:bg-gradient-to-tl dark:from-primary-fade dark:via-secondary-fade dark:to-primary-tint'>
                      <span className='pr-0.5 font-normal text-foreground'>© 2024 </span>
                      Sway Bae Official
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className='hidden sm:flex'>{state.mounted && <ThemeToggle />}</div>
        </section>
      </nav>
    </header>
  )
}
