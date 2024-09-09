'use client'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import {useCallback, useEffect, useState} from 'react'
import {carouselData} from '@/utils/data'
import {Button} from '../ui/button'
import Icon from '../ui/icon'

export function OldCarousel() {
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
          <Icon.ChevronLeft />
        </Button>
        <Button
          className='embla__button--next touch-manipulation appearance-none'
          variant='ghost'
          size='icon'
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          aria-label='Next'
        >
          <Icon.ChevronRight />
        </Button>
      </div>
      <div className='h-auto w-full overflow-hidden px-1' ref={emblaRef}>
        <div className='embla__container flex touch-pan-y xl:my-2 2xl:my-4 3xl:my-8 4xl:my-14'>
          {Object.keys(carouselData).map((key) => (
            <div key={key} className='embla__slide min-w-0 py-2'>
              <div className='max:h-64 flex items-center justify-center font-bold'>
                <div className='relative'>
                  <a href={carouselData[key].href} target='_blank' rel='noopener noreferrer'>
                    <Image
                      src={carouselData[key].src}
                      alt={carouselData[key].alt}
                      width='600'
                      height='400'
                      className='rounded-lg border-2 border-white bg-white shadow-soft sm:shadow-hard'
                    />
                    <div className='overlay-text absolute bottom-0 left-0 flex items-center gap-1 p-2 text-center text-white transition-colors duration-200 ease-in hover:text-primary'>
                      <div className='text-sm font-medium italic'>{carouselData[key].username}</div>
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
