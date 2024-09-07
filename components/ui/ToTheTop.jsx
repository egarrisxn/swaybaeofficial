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

export default function ToTheTop() {
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
      className={`fixed bottom-0 right-0 z-50 mb-12 mr-8 hidden rounded-full sm:flex lg:mb-14 lg:mr-10 2xl:mb-20 2xl:mr-16 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Tooltipper text='Scroll to Top' className='relative'>
        <Button asChild variant='scroll' size='round' onClick={scrollToTop}>
          <CircleArrowUp
            strokeWidth={1.5}
            className='z-50 inline-block size-8 rounded-full bg-secondary text-white shadow-soft hover:bg-white hover:text-black hover:shadow-hard lg:size-10 xl:size-12 2xl:size-14 dark:bg-black dark:text-primary hover:dark:bg-dark-fade hover:dark:text-white'
          />
        </Button>
      </Tooltipper>
    </div>
  )
}
