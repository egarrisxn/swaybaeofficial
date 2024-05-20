import {useCallback, useEffect, useState} from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import {socialsData} from '@/lib/constants'

export default function SocialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: false,
    loop: true,
  })

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className='embla m-auto max-w-6xl'>
      <div className='embla__buttons z-10 flex items-center justify-start'>
        <button
          className='embla__button--prev flex size-14 touch-manipulation items-center justify-center'
          type='button'
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
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
      <div className='overflow-hidden border-b-2 border-t-2' ref={emblaRef}>
        <div className='embla__container flex touch-pan-y'>
          {socialsData.map((social, index) => (
            <div key={index} className='embla__slide min-w-0'>
              <div className='embla__slide__number flex items-center justify-center text-[1rem] font-bold'>
                <a href={social.href} target='_blank' rel='noopener noreferrer'>
                  <div className='relative'>
                    <Image
                      src={social.src}
                      alt={social.alt}
                      width='600'
                      height='400'
                      className='rounded-md lg:rounded-lg'
                    />
                    <div className='overlay-text absolute bottom-0 left-0 flex items-center gap-1 rounded-bl-md rounded-tr-md bg-slate-950/70 p-2 text-center text-white lg:rounded-bl-lg lg:rounded-tr-lg'>
                      <div className='text-primary'>{social.icon} </div>
                      <div className='text-sm font-light '>{social.label}: </div>
                      <div className='text-sm font-normal italic text-white transition-colors duration-200 ease-in hover:text-primary'>
                        {social.username}{' '}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
