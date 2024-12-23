'use client'
import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from 'next/navigation'
import {useState, useEffect, useCallback} from 'react'
import {useTheme} from 'next-themes'
import {Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription} from './ui/sheet'
import {Button} from './ui/button'
import {Tooltip} from './ui/tooltip'
import {Icon} from './ui/icon'
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
  {href: '/blog', label: 'Blog'},
  {href: '/calendar', label: 'Calendar'},
  {href: '/community', label: 'Community'},
  {href: '/subathon', label: 'Subathon'},
  {href: 'https://shop.swaybae.net/', label: 'Store', external: true},
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
      <nav className='flex items-center justify-between p-4 2xl:p-6 3xl:p-8'>
        <section>
          <Link href='/' aria-label='Home'>
            <div className='flex items-center'>
              <Image
                src='/avatar2024.png'
                height={64}
                width={64}
                // priority={true}
                alt='Avatar of Sway and link to home page'
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
        <section className='flex-1 sm:pr-4 md:pr-6 lg:pr-8 xl:pr-10 2xl:pr-12 3xl:pr-14'>
          <ul className='hidden w-full justify-end sm:inline-flex sm:gap-4 md:gap-6 lg:gap-8 xl:pr-10 2xl:gap-12 3xl:gap-14'>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className='text-lg transition-all hover:text-b2p md:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl'
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
                          className='text-6xl font-medium transition-all ease-in hover:text-b2p max-[400px]:text-5xl max-[350px]:text-4xl'
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
