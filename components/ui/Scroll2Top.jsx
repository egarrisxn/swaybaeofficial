'use client'
import {useState, useEffect} from 'react'
import {Tooltip} from './Tooltip'

export function Scroll2Top() {
  const [showScroll, setShowScroll] = useState(false)
  const [isLarge, setIsLarge] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400)
    }

    const handleResize = () => {
      setIsLarge(window.innerWidth >= 1640)
    }

    const checkVisibility = () => {
      handleScroll()
      handleResize()
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkVisibility)

    // Initial check for both scroll position and screen width
    checkVisibility()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      aria-label='Scroll to Top'
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: 35,
        left: '50%',
        transform: 'translateX(-50%)',
        display: showScroll ? 'flex' : 'none',
        cursor: 'pointer',
      }}
    >
      <Tooltip text='Scroll to Top' direction='top'>
        <svg
          width='0.7em'
          height='0.7em'
          viewBox='0 0 48 48'
          xmlns='http://www.w3.org/2000/svg'
          className={`scrollToTop rounded-full border-2 border-background bg-secondary text-background shadow-[1px_2px_4px_0px_gray] transition-all duration-200 ease-in hover:border-foreground hover:bg-background hover:text-foreground sm:z-40 dark:border-primary dark:bg-dark-fade dark:text-primary dark:shadow-[1px_2px_4px_0px_gray] dark:hover:border-foreground dark:hover:bg-black dark:hover:text-foreground ${isLarge ? 'scrollToTop-large' : ''}`}
          style={{
            padding: 4,
          }}
        >
          <path
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={4}
            d='M5 24L24 6l19 18H31v18H17V24z'
          />
        </svg>
      </Tooltip>
    </button>
  )
}
