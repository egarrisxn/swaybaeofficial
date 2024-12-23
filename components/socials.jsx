import Image from 'next/image'
import PageHeader from './page-header'
import {Spotify} from './spotify'
import {SocialCarousel} from './social-carousel'
import YouTube from './youtube'

export default function Socials() {
  return (
    <section className='mb-32 w-full sm:mb-24 md:mb-16'>
      <PageHeader id='socials' showHr={true}>
        Socials
      </PageHeader>
      {/* ----------Social Body---------- */}
      <div className='mb-16 mt-12 px-2 sm:px-4 md:px-6 lg:mb-24 lg:mt-12 lg:px-8 xl:px-10 3xl:my-24 3xl:px-16'>
        {/* -----Spotify Now Playing----- */}
        <div className='flex justify-end pb-8 sm:pb-4'>
          <Spotify />
        </div>
        {/* ----------Carousel---------- */}
        <section className='mx-auto mb-12 mt-4 flex flex-col items-center justify-center sm:mt-8 md:mb-16 md:mt-12 lg:mb-20 lg:mt-16'>
          <SocialCarousel />
          <div className='mb-12 mt-2 sm:mb-6 md:mt-6'>
            <a href='https://www.throne.com/sway_bae' target='_blank' rel='noreferrer'>
              <div className='flex flex-row items-center justify-center italic tracking-tight max-[400px]:text-xs sm:text-lg'>
                If you&apos;d like to support what I do:
                <span className='ml-1 mr-0.5 block font-black uppercase max-[300px]:hidden'>
                  THRONE
                </span>
                <div className='ml-0.5 size-5 overflow-hidden rounded-full max-[400px]:ml-1 max-[400px]:size-4 sm:size-6'>
                  <Image
                    src='/Throne.jpg'
                    alt='Throne'
                    width={24}
                    height={24}
                    className='size-full'
                  />
                </div>
              </div>
            </a>
          </div>
        </section>
        {/* ----------YouTube Videos---------- */}
        <section className='mx-auto my-4 sm:mb-12 sm:mt-8 md:mb-16 md:mt-12 lg:mb-20'>
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
            <a
              href='https://www.youtube.com/sway_baetv/'
              target='_blank'
              rel='noopener noreferrer'
              className='mx-1 bg-gradient-to-tl from-purple-tint via-pink-tint to-pink-fade bg-clip-text text-transparent lg:mx-1.5'
            >
              YouTube
            </a>
            Videos
          </div>
          <div className='mx-auto flex flex-wrap items-center justify-center gap-8'>
            <div className='max-w-[520px] rounded-lg border-2 border-white bg-white shadow-soft hover:shadow-hard'>
              <YouTube vnum={0} />
            </div>
            <div className='max-w-[520px] rounded-lg border-2 border-white bg-white shadow-soft hover:shadow-hard'>
              <YouTube vnum={1} />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
