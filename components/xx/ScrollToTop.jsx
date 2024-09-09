'use client'
import {useState, useEffect} from 'react'
import {Button} from '../ui/button'
import Icon from '../ui/icon'

const isBrowser = () => typeof window !== 'undefined'

function scrollToTop() {
  if (!isBrowser()) return
  window.scrollTo({top: 0, behavior: 'smooth'})
}

export default function ScrollToTop() {
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
    <Button
      variant='scroll'
      size='icon'
      onClick={scrollToTop}
      className={` ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <Icon.CircleArrowUp />
    </Button>
  )
}
