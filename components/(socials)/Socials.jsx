'use client'
import Link from 'next/link'
import Image from 'next/image'
import PageName from '@/components/(other)/PageName'
import SpotifyNowPlaying from '@/components/(spotify)/SpotifyNowPlaying'
import YoutubeEmbed from './YouTubeEmbed'
import SocialsCarousel from './SocialsCarousel'

export default function Socials() {
  return (
    <main className='min-h-screen w-full p-0'>
      <label className='sr-only'>Socials</label>
      <div className='mx-auto max-w-7xl px-2 pb-12 pt-4 lg:px-4 lg:pt-16 4xl:max-w-screen-3xl'>
        <header className='mt-2 flex flex-row justify-between max-[320px]:flex-col'>
          <PageName>Socials</PageName>
          <div className='mt-0 max-[320px]:mx-auto max-[320px]:mt-8 lg:pr-12'>
            <SpotifyNowPlaying />
          </div>
        </header>
        <br />
        <br className='hidden 4xl:block' />
        <section className='mx-auto my-4 sm:px-2 md:px-8 lg:mb-24 lg:mt-12 lg:px-12'>
          <SocialsCarousel />
          <div className='mt-6'>
            <Link href='https://www.throne.com/sway_bae' target='_blank' rel='noreferrer'>
              <div className='flex flex-row items-center justify-center text-sm tracking-normal max-[370px]:text-xs sm:text-lg sm:tracking-tight'>
                If you&apos;d like to support what I do:
                <span className='font-dark ml-1 mr-0.5 block uppercase max-[300px]:hidden '>
                  THRONE
                </span>
                <div className='mask mask-circle size-5 max-[370px]:ml-1 max-[370px]:size-4 sm:size-6 '>
                  <Image src='/throne.jpg' alt='Throne' width={24} height={24} />
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className='mx-auto my-8 px-2 sm:px-4 md:px-8 lg:my-16 lg:px-12'>
          <div className='mb-4 mt-8 flex items-center justify-center text-center text-xl sm:text-3xl md:text-4xl'>
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
              className='mx-1 bg-gradient-to-b from-navy via-pink to-pink bg-clip-text text-transparent sm:mx-2'
            >
              YoutTube
            </Link>
            Videos
          </div>
          <div className='my-4 grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='rounded-xl border-2 p-2 shadow-md shadow-purple-500/80 lg:rounded-2xl'>
              <YoutubeEmbed vnum={0} />
            </div>
            <div className='rounded-xl border-2 p-2 shadow-md shadow-purple-500/80 lg:rounded-2xl'>
              <YoutubeEmbed vnum={1} />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
