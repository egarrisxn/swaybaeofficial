'use client'
import {useState, useEffect} from 'react'

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false)
  const [isLarge, setIsLarge] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true)
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 1640) {
        setIsLarge(true)
      } else {
        setIsLarge(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    // Initial check
    handleResize()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [showScroll])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <label className='sr-only'>Scroll To Top</label>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        viewBox='0 0 48 48'
        className={`scrollToTop z-40 rounded-full border-2 border-primary bg-light font-bold text-primary transition-all duration-200 ease-in hover:border-transparent hover:bg-primary hover:text-light lg:shadow-md dark:bg-dark dark:hover:text-dark ${isLarge ? 'scrollToTop-large' : ''}`}
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          right: 20,
          bottom: 20,
          display: showScroll ? 'flex' : 'none',
          padding: 5,
          cursor: 'pointer',
        }}
      >
        <path
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={4}
          d='M5 24L24 6l19 18H31v18H17V24z'
        ></path>
      </svg>
    </div>
  )
}
