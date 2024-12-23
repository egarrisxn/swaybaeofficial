import Image from 'next/image'
import PageHeader from './page-header'

export default function About() {
  return (
    <section className='w-full'>
      <PageHeader id='about' showHr={true}>
        About
      </PageHeader>
      {/* ----------About Body---------- */}
      <div className='my-16 px-2 sm:px-4 md:px-6 lg:px-8 xl:my-20 xl:px-10 3xl:my-24 3xl:px-16'>
        <section className='mx-auto grid max-w-11xl grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12 3xl:gap-x-24'>
          <div className='order-2 max-w-xl lg:order-1 lg:max-w-none'>
            <div className='relative inline-block font-sansita text-4xl font-black italic tracking-tight text-b2w sm:text-5xl lg:text-6xl 3xl:text-8xl'>
              <span className='absolute bottom-0.5 inline-block h-2 w-full bg-primary sm:h-2.5 md:bottom-0 md:h-3 3xl:h-4'></span>
              <h2 className='textShadow relative pl-1 pr-0.5'>I&apos;m Sway!</h2>
            </div>
            <div className='mt-4 text-lg font-medium text-secondary sm:mt-6 lg:mt-4 lg:text-base xl:mt-6 xl:text-xl 2xl:text-3xl 3xl:mt-7 3xl:text-4xl'>
              <h3 className='leading-6 sm:leading-7 lg:leading-6 xl:leading-7 3xl:leading-8'>
                I&apos;m a Full-Time Content Creator, currently partnered with Twitch and YouTube,
                streaming and releasing videos throughout the week.
              </h3>
            </div>
            <div className='mt-4 space-y-4 sm:mt-6 lg:mt-4 xl:mt-6 2xl:text-2xl 3xl:space-y-6 3xl:text-3xl'>
              <p className='leading-6 sm:leading-7 lg:leading-6 xl:leading-7 3xl:leading-8'>
                <span className='font-semibold'>I create</span> family-friendly entertainment
                centered around the concepts of positive mental attitude in gaming with the mantra
                of leaving someone&apos;s day better than I found it. My favorite part of streaming
                is the amazing community. You can find our Discord as you explore the website, but
                it is a very inclusive and supportive community that we have cultivated and a great
                place to connect outside of streams!
              </p>
              <p className='leading-6 sm:leading-7 lg:leading-6 xl:leading-7 3xl:leading-8'>
                <span className='font-semibold'>In addition,</span> I am primarily a Hearthstone
                streamer, with a focus on Battlegrounds. I also enjoy Strategy games in general,
                Survival games, Indie games, Simulator games, Roguelike games, Platformers, and many
                more!
              </p>
              <p className='leading-6 sm:leading-7 lg:leading-6 xl:leading-7 3xl:leading-8'>
                <span className='font-semibold'>Did I ever</span> imagine this would be my
                lifestyle, even five years ago? Nope. Do I love it? Entirely!
              </p>
              <p className='leading-6 sm:leading-7 lg:leading-6 xl:leading-7 3xl:leading-8'>
                <span className='font-semibold'>If you&apos;d like</span> to work with me, I&apos;d
                love to hear from you! You can use the contact form in the business inquiries
                section below! As I often say, thank you for being a part of my journey, and
                allowing me to be a part of yours!
              </p>
            </div>
          </div>
          <div className='order-1 lg:order-2'>
            <Image
              src='/biff.jpg'
              alt='An image of Sway and her puppy Biff'
              width={1440}
              height={1800}
              quality={100}
              // priority={true}
              className='rounded-lg border-2 border-white bg-white shadow-soft hover:shadow-hard'
            />
          </div>
        </section>
        <br />
        <section className='mx-auto lg:max-w-11xl'>
          <div className='mt-4 font-semibold sm:text-lg md:text-2xl lg:text-lg xl:text-3xl 3xl:mt-12 3xl:text-4xl'>
            <p className='leading-6 tracking-tight sm:leading-7 lg:leading-6 xl:leading-7 3xl:leading-8'>
              A few notable accolades include:
            </p>
          </div>
          <div className='mt-6 grid grid-cols-1 gap-y-6 lg:mt-8 lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-5 lg:gap-y-5 xl:mt-10 xl:grid-cols-3 xl:grid-rows-2 3xl:mt-12 3xl:gap-x-12 3xl:gap-y-12 3xl:text-2xl 4xl:text-3xl'>
            <p className='leading-6 transition-all hover:text-b2w md:leading-7 lg:rounded-lg lg:bg-w2b lg:p-3 lg:leading-6 lg:shadow lg:hover:shadow-soft xl:p-5 xl:leading-7 3xl:p-8 3xl:leading-8'>
              <span className='text-primary 3xl:text-2xl'>&#9864; </span> 3rd place in
              Blizzard&apos;s Hearthstone Battle of the Boars Tournament.{' '}
              <span className='font-medium'>(May 2021)</span>
            </p>
            <p className='leading-6 transition-all hover:text-b2w md:leading-7 lg:rounded-lg lg:bg-w2b lg:p-3 lg:leading-6 lg:shadow lg:hover:shadow-soft xl:p-5 xl:leading-7 3xl:p-8 3xl:leading-8'>
              <span className='text-primary 3xl:text-2xl'>&#9864; </span> Casting the Gaming Stadium
              Hearthstone Tournament. <span className='font-medium'>(June 2021)</span>
            </p>
            <p className='leading-6 transition-all hover:text-b2w md:leading-7 lg:rounded-lg lg:bg-w2b lg:p-3 lg:leading-6 lg:shadow lg:hover:shadow-soft xl:p-5 xl:leading-7 3xl:p-8 3xl:leading-8'>
              <span className='text-primary 3xl:text-2xl'>&#9864; </span> Casting and Hosting
              multiple Dreamhack Community Clash tournaments.{' '}
              <span className='font-medium'>(2021-2022)</span>
            </p>
            <p className='leading-6 transition-all hover:text-b2w md:leading-7 lg:rounded-lg lg:bg-w2b lg:p-3 lg:leading-6 lg:shadow lg:hover:shadow-soft xl:p-5 xl:leading-7 3xl:p-8 3xl:leading-8'>
              <span className='text-primary 3xl:text-2xl'>&#9864; </span> Casting 4 series of Super
              Girl Gamer Pro Hearthstone Tournaments.{' '}
              <span className='font-medium'>(2021-2023)</span>
            </p>
            <p className='leading-6 transition-all hover:text-b2w md:leading-7 lg:rounded-lg lg:bg-w2b lg:p-3 lg:leading-6 lg:shadow lg:hover:shadow-soft xl:p-5 xl:leading-7 3xl:p-8 3xl:leading-8'>
              <span className='text-primary 3xl:text-2xl'>&#9864; </span> Multiple Battle.net
              Launcher Feature events, including featured streams and curated YouTube videos just
              for Hearthstone.
            </p>
            <p className='leading-6 transition-all hover:text-b2w md:leading-7 lg:rounded-lg lg:bg-w2b lg:p-3 lg:leading-6 lg:shadow lg:hover:shadow-soft xl:p-5 xl:leading-7 3xl:p-8 3xl:leading-8'>
              <span className='text-primary 3xl:text-2xl'>&#9864; </span> Producing, hosting, and
              casting one of the earliest AND largest grassroots tournaments for Hearthstone
              Battlegrounds, with close to 100 participants!
            </p>
          </div>
        </section>
      </div>
    </section>
  )
}
