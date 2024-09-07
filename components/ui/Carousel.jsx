'use client'
import '../../app/styles/index.css'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import {useCallback, useEffect, useState} from 'react'
import {socialData} from '@/utils/constants'

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: false,
    loop: true,
  })

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (emblaApi) {
      onSelect(emblaApi)
      emblaApi.on('reInit', onSelect)
      emblaApi.on('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className='embla m-auto'>
      <div className='embla__buttons z-10 flex items-center justify-start'>
        <button
          className='embla__button--prev flex size-14 touch-manipulation items-center justify-center'
          type='button'
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          aria-label='Previous'
        >
          <svg
            className='h-[35%] w-[35%] transition-colors duration-200 ease-in hover:text-primary'
            viewBox='0 0 532 532'
          >
            <path
              fill='currentColor'
              d='M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z'
            />
          </svg>
        </button>
        <button
          className='embla__button--next flex size-14 touch-manipulation items-center justify-center'
          type='button'
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          aria-label='Next'
        >
          <svg
            className='h-[35%] w-[35%] transition-colors duration-200 ease-in hover:text-primary'
            viewBox='0 0 532 532'
          >
            <path
              fill='currentColor'
              d='M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z'
            />
          </svg>
        </button>
      </div>
      <div className='size-full overflow-hidden px-1 sm:border-b-2 sm:border-t-2' ref={emblaRef}>
        <div className='embla__container flex touch-pan-y xl:my-2 2xl:my-4 3xl:my-8 4xl:my-14'>
          {socialData.map((social, index) => (
            <div key={index} className='embla__slide min-w-0'>
              <div className='embla__slide__number flex items-center justify-center text-[1rem] font-bold'>
                <div className='relative'>
                  <a href={social.href} target='_blank' rel='noopener noreferrer'>
                    <Image
                      src={social.src}
                      alt={social.alt}
                      width='600'
                      height='400'
                      className='rounded-lg sm:border-2 sm:border-white sm:bg-white sm:shadow-[2px_3px_6px_0px_gray] sm:dark:shadow-[2px_3px_12px_0px_gray]'
                    />
                    <div className='overlay-text absolute bottom-0 left-0 flex items-center gap-1 p-2 text-center text-white transition-colors duration-200 ease-in hover:text-primary'>
                      <div>{social.icon}</div>
                      <div className='text-sm font-medium italic'>{social.username}</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
