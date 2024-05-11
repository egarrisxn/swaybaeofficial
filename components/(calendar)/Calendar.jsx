'use client'
import {motion} from 'framer-motion'
export default function Calendar() {
  return (
    <>
      <motion.div
        className='aspect-h-16 aspect-w-9 rounded-2xl shadow-md shadow-purple-500/80 md:aspect-h-9 md:aspect-w-16 md:mx-auto md:border-2'
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
      >
        <iframe
          src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showPrint=0&showTitle=0&showNav=1&showDate=1&showCalendars=0&src=NjM3Mzk0MzZhMmVhMTIwYTM0MWVjMTNhYmZmYzRiMTI4OWY3NzI0MGE4MzdkMTIwNDNiZWQ4MWNlNmM3OGUxY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5'
          width='100%'
          height='100%'
          className='rounded-xl bg-light p-1 sm:p-2'
          allow='fullscreen'
        ></iframe>
      </motion.div>
    </>
  )
}
