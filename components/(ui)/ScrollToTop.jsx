'use client'
import {useState, useEffect} from 'react'

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const scrollToTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true)
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false)
      }
    }

    window.addEventListener('scroll', scrollToTop)

    return function cleanup() {
      window.removeEventListener('scroll', scrollToTop)
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
        className='scrollToTop z-40 rounded-full border-2 border-primary bg-light font-bold text-primary transition-all duration-200 ease-in hover:border-transparent hover:bg-primary hover:text-light lg:shadow-md dark:bg-dark dark:hover:text-dark'
        onClick={scrollToTop}
        style={{
          height: 40,
          width: 40,
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
