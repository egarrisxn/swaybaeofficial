'use client'
import Link from 'next/link'
import Image from 'next/image'
import YoutubeEmbed from './ui/YouTubeEmbed'
import {SpotifyNowPlaying} from './ui/SpotifyNowPlaying'
import {SocialCarousel} from './ui/SocialCarousel'

export function Socials() {
  return (
    <main className='w-full'>
      <label className='sr-only' aria-label='Socials'>
        Socials
      </label>
      <header className='mx-auto w-full'>
        <hr className='border-2 border-purple-800/50' />
        <h1 className='ml-2 mt-4 bg-gradient-to-tr from-navy via-pink to-pink bg-clip-text text-xl uppercase tracking-widest text-transparent xl:mt-5 3xl:ml-3 3xl:mt-6 3xl:text-3xl'>
          Socials
        </h1>
      </header>
      {/* ----------Social Body---------- */}
      <div className='my-16 px-2 sm:px-4 md:px-6 lg:mb-24 lg:mt-20 lg:px-8 xl:px-10 3xl:my-24 3xl:px-16'>
        <div className='flex justify-end pb-0 max-[370px]:justify-center max-[370px]:pb-4'>
          <SpotifyNowPlaying />
        </div>
        {/* ----------Carousel---------- */}
        <section className='mx-auto my-4 max-w-11xl sm:mb-12 sm:mt-8 md:mb-16 md:mt-12 lg:mb-20 lg:mt-16'>
          <SocialCarousel />
          <div className='mb-12 mt-2 sm:mb-6 sm:mt-6'>
            <Link href='https://www.throne.com/sway_bae' target='_blank' rel='noreferrer'>
              <div className='flex flex-row items-center justify-center text-sm tracking-tight max-[370px]:text-xs sm:text-lg'>
                If youd like to support what I do:
                <span className='ml-1 mr-0.5 block font-black uppercase max-[300px]:hidden'>
                  THRONE
                </span>
                <div className='size-5 max-[370px]:ml-1 max-[370px]:size-4 sm:size-6 '>
                  <Image src='/throne.jpg' alt='Throne' width={24} height={24} />
                </div>
              </div>
            </Link>
          </div>
        </section>
        {/* ----------Youtube Videos---------- */}
        <section className='mx-auto my-4 max-w-11xl sm:mb-12 sm:mt-8 md:mb-16 md:mt-12 lg:mb-20'>
          <div className='mb-2 mt-12 flex items-center justify-center text-center text-xl sm:mb-6 sm:mt-6 sm:text-3xl md:text-4xl'>
            <span className='mr-1 text-primary sm:mr-2'>
              <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23.498 6.186a3.02 3.02 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.02 3.02 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.02 3.02 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.02 3.02 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z'
                ></path>
              </svg>
            </span>
            Latest
            <Link
              href='https://www.youtube.com/sway_baetv/'
              target='_blank'
              rel='noopener noreferrer'
              className='mx-1 bg-gradient-to-b from-navy via-pink to-pink bg-clip-text text-transparent'
            >
              YoutTube
            </Link>
            Videos
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='rounded-xl border-2 shadow-md shadow-purple-500/80'>
              <YoutubeEmbed vnum={0} />
            </div>
            <div className='rounded-xl border-2 shadow-md shadow-purple-500/80'>
              <YoutubeEmbed vnum={1} />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
