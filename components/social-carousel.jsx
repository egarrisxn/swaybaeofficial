'use client'
import Image from 'next/image'
import * as React from 'react'
import {carouselData} from '@/utils/data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

export function SocialCarousel() {
  return (
    <Carousel className='embla'>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselContent className='embla__container'>
        {Object.keys(carouselData).map((key) => (
          <CarouselItem key={key} className='embla__slide'>
            <div className='flex aspect-video max-h-96 items-center justify-center'>
              <div className='relative'>
                <a href={carouselData[key].href} target='_blank' rel='noopener noreferrer'>
                  <Image
                    src={carouselData[key].src}
                    alt={carouselData[key].alt}
                    width='600'
                    height='400'
                    className='rounded-lg border-2 border-white bg-white shadow-soft hover:shadow-hard'
                  />
                  <div className='overlay-text absolute bottom-0 left-0 z-50 flex items-center gap-1 p-2 text-center text-white transition-colors duration-200 ease-in hover:text-primary'>
                    <div className='font-medium italic'>{carouselData[key].username}</div>
                  </div>
                </a>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
