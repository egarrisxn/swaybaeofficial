'use client'
import {useState, useEffect} from 'react'
import {Button} from './Button'
import {Tooltipper} from './Tooltipper'
import {CircleArrowUp} from 'lucide-react'

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
    <div
      className={`2xl:mb-18 2xl:mr-18 fixed bottom-0 right-0 z-50 mb-4 mr-4 flex rounded-full p-2 lg:mb-14 lg:mr-14 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Tooltipper text='Scroll to Top' className='relative'>
        <Button asChild variant='scroll' size='icon' onClick={scrollToTop}>
          <CircleArrowUp width='1em' height='1em' viewBox='0 0 24 24' strokeWidth='2' />
        </Button>
      </Tooltipper>
    </div>
  )
}
