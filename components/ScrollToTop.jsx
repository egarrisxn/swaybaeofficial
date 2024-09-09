'use client'
import {useState, useEffect} from 'react'
import {Button} from './ui/Button'
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
    <Button
      variant='scroll'
      size='icon'
      onClick={scrollOnClick}
      className={` ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <Icon.CircleArrowUp />
    </Button>
  )
}
