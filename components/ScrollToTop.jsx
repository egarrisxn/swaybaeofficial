'use client'
import {useState, useEffect} from 'react'
import {Icon} from './ui/Icon'

const isBrowser = () => typeof window !== 'undefined'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (!isBrowser()) return
    setIsVisible(window.scrollY > 400)
  }

  const scrollOnClick = () => {
    if (!isBrowser()) return
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  useEffect(() => {
    if (!isBrowser()) return
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      onClick={scrollOnClick}
      className={` ${isVisible ? 'fixed bottom-0 right-0 z-50 mb-14 mr-10 hidden rounded-full bg-secondary p-1 text-white opacity-100 shadow-soft transition-all duration-200 ease-in-out hover:bg-white hover:text-black hover:shadow-hard sm:inline-block dark:bg-black dark:text-primary hover:dark:bg-dark-fade hover:dark:text-white' : 'opacity-0'}`}
    >
      <Icon.CircleArrowUp />
    </div>
  )
}
