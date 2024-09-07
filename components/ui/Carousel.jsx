'use client'
import '../../app/styles/index.css'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import {useCallback, useEffect, useState} from 'react'
import {socialData} from '@/utils/constants'
import {Button} from './Button'
import {ChevronLeft, ChevronRight} from 'lucide-react'

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
    <section className='embla mx-auto'>
      <div className='z-10 flex items-center justify-start space-x-4'>
        <Button
          className='embla__button--prev touch-manipulation appearance-none'
          variant='ghost'
          size='icon'
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          aria-label='Previous'
        >
          <ChevronLeft size={36} strokeWidth={2} />
        </Button>
        <Button
          className='embla__button--next touch-manipulation appearance-none'
          variant='ghost'
          size='icon'
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          aria-label='Next'
        >
          <ChevronRight size={36} strokeWidth={2} />
        </Button>
      </div>
      <div className='h-auto w-full overflow-hidden px-1' ref={emblaRef}>
        <div className='embla__container flex touch-pan-y xl:my-2 2xl:my-4 3xl:my-8 4xl:my-14'>
          {socialData.map((social, index) => (
            <div key={index} className='embla__slide min-w-0 py-2'>
              <div className='max:h-64 flex items-center justify-center font-bold'>
                <div className='relative'>
                  <a href={social.href} target='_blank' rel='noopener noreferrer'>
                    <Image
                      src={social.src}
                      alt={social.alt}
                      width='600'
                      height='400'
                      className='rounded-lg border-2 border-white bg-white shadow-soft sm:shadow-hard'
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
