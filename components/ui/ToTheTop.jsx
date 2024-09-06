'use client'
import {useState, useEffect} from 'react'
import {Tooltip} from './Tooltip'

const isBrowser = () => typeof window !== 'undefined'

function scrollToTop() {
  if (!isBrowser()) return
  window.scrollTo({top: 0, behavior: 'smooth'})
}

export function ToTheTop() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (!isBrowser()) return
    if (window.scrollY > 400) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    if (!isBrowser()) return
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      className={`fixed bottom-0 right-0 z-50 mb-14 mr-10 hidden cursor-pointer items-center rounded-full p-1 sm:flex ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <Tooltip text='Scroll to Top' direction='top'>
        <svg
          viewBox='0 0 48 48'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={4}
          xmlns='http://www.w3.org/2000/svg'
          className='z-50 inline-block size-12 rounded-full border-2 border-white bg-secondary text-white shadow-soft hover:border-black hover:bg-white hover:text-black hover:shadow-hard dark:border-primary dark:bg-black dark:text-primary hover:dark:border-white hover:dark:bg-dark-fade hover:dark:text-white'
          style={{
            padding: 4,
          }}
        >
          <path d='M5 24L24 6l19 18H31v18H17V24z' />
        </svg>
      </Tooltip>
    </button>
  )
}
