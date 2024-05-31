import Image from 'next/image'

export function About() {
  return (
    <main className='w-full'>
      <label className='sr-only' aria-label='About'>
        About
      </label>
      <header className='mx-auto w-full'>
        <hr className='border-2 border-purple-800/50' />
        <h1 className='ml-2 mt-4 bg-gradient-to-tr from-navy via-pink to-pink bg-clip-text text-xl uppercase tracking-widest text-transparent xl:mt-5 3xl:ml-3 3xl:mt-6 3xl:text-3xl'>
          About
        </h1>
      </header>
      {/* ----------About Body---------- */}
      <div className='my-16 px-2 sm:px-4 md:px-6 lg:px-8 xl:my-20 xl:px-10 3xl:my-24 3xl:px-16'>
        {/* ----------Header/Text & Photo---------- */}
        <section className='mx-auto grid max-w-11xl grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12 3xl:gap-x-24'>
          <div className='order-2 max-w-xl lg:order-1 lg:max-w-none'>
            <div className='sansita relative inline-block text-4xl font-black italic tracking-tight sm:text-5xl lg:text-6xl 3xl:text-8xl'>
              <span className='absolute bottom-0.5 inline-block h-2 w-full bg-primary sm:h-2.5 md:bottom-0 md:h-3 3xl:h-4'></span>
              <p className='relative pl-1 pr-0.5'>I&rsquo;m Sway!</p>
            </div>
            <div className='mt-4 text-lg font-medium text-secondary sm:mt-6 lg:mt-4 lg:text-base xl:mt-6 xl:text-xl 2xl:text-3xl 3xl:mt-7 3xl:text-4xl'>
              <p className='leading-6 sm:leading-7 lg:leading-5 xl:leading-7 3xl:leading-8'>
                I&rsquo;m a Full-Time Content Creator, currently partnered with Twitch and YouTube,
                streaming and releasing videos throughout the week.
              </p>
            </div>
            <div className='mt-4 space-y-4 sm:mt-6 lg:mt-4 lg:text-sm xl:mt-6 xl:text-base 2xl:text-2xl 3xl:space-y-6 3xl:text-3xl'>
              <p className='leading-6 sm:leading-7 lg:leading-5 xl:leading-7 3xl:leading-8'>
                <span className='font-semibold'>I create</span> family-friendly entertainment
                centered around the concepts of positive mental attitude in gaming with the mantra
                of leaving someones day better than I found it. My favorite part of streaming is the
                amazing community. You can find our Discord as you explore the website, but it is a
                very inclusive and supportive community that we have cultivated and a great place to
                connect outside of streams!
              </p>
              <p className='leading-6 sm:leading-7 lg:leading-5 xl:leading-7 3xl:leading-8'>
                <span className='font-semibold'>In addition,</span> I am primarily a Hearthstone
                streamer, with a focus on Battlegrounds. I also enjoy Strategy games in general,
                Survival games, Indie games, Simulator games, Roguelike games, Platformers, and many
                more!
              </p>
              <p className='leading-6 sm:leading-7 lg:leading-5 xl:leading-7 3xl:leading-8'>
                <span className='font-semibold'>Did I ever</span> imagine this would be my
                lifestyle, even five years ago? Nope. Do I love it? Entirely!
              </p>
              <p className='leading-6 sm:leading-7 lg:leading-5 xl:leading-7 3xl:leading-8'>
                <span className='font-semibold'>If you&rsquo;d like</span> to work with me,
                I&rsquo;d love to hear from you! You can use the contact form in the business
                inquiries section below! As I often say, thank you for being a part of my journey,
                and allowing me to be a part of yours!{' '}
                <span className='font-semibold text-secondary'>&ndash; Sway Bae</span>
              </p>
            </div>
          </div>
          <div className='order-1 lg:order-2'>
            <Image
              src='/Biff.jpg'
              alt='Product screenshot'
              className='rounded-2xl border-2 shadow-md shadow-purple-500/80'
              width={1440}
              height={1800}
            />
          </div>
        </section>
        <br />
        {/* ----------Accolades---------- */}
        <section className='mx-auto lg:max-w-11xl'>
          <div className='mt-4 font-semibold sm:text-lg md:text-2xl lg:text-lg xl:text-3xl 3xl:mt-12 3xl:text-4xl'>
            <p className='leading-6 tracking-tight sm:leading-7 lg:leading-5 xl:leading-7 3xl:leading-8'>
              A few notable accolades include:
            </p>
          </div>
          <div className='mt-6 grid grid-cols-1 gap-y-6 lg:mt-8 lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-6 lg:gap-y-0 lg:text-sm xl:mt-10 xl:grid-cols-3 xl:grid-rows-2 xl:text-base 3xl:mt-12 3xl:gap-x-20 3xl:text-2xl'>
            <p className='leading-6 sm:leading-7 lg:leading-5 xl:leading-7 3xl:leading-8'>
              <span className='text-primary'>&#9864; </span> 3rd place in Blizzard&rsquo;s
              Hearthstone Battle of the Boars Tournament.{' '}
              <span className='font-medium'>(May 2021)</span>
            </p>
            <p className='leading-6 sm:leading-7 lg:leading-5 xl:leading-7 3xl:leading-8'>
              <span className='text-primary'>&#9864; </span> Casting the Gaming Stadium Hearthstone
              Tournament. <span className='font-medium'>(June 2021)</span>
            </p>
            <p className='leading-6 sm:leading-7 lg:leading-5 xl:leading-7 3xl:leading-8'>
              <span className='text-primary'>&#9864; </span> Casting and Hosting multiple Dreamhack
              Community Clash tournaments. <span className='font-medium'>(2021-2022)</span>
            </p>
            <p className='leading-6 sm:leading-7 lg:leading-5 xl:leading-7 3xl:leading-8'>
              <span className='text-primary'>&#9864; </span> Casting 4 series of Super Girl Gamer
              Pro Hearthstone Tournaments. <span className='font-medium'>(2021-2023)</span>
            </p>
            <p className='leading-6 sm:leading-7 lg:leading-5 xl:leading-7 3xl:leading-8'>
              <span className='text-primary'>&#9864; </span> Multiple Battle.net Launcher Feature
              events, including featured streams and curated YouTube videos just for Hearthstone.
            </p>
            <p className='leading-6 sm:leading-7 lg:leading-5 xl:leading-7 3xl:leading-8'>
              <span className='text-primary'>&#9864; </span> Producing, hosting, and casting one of
              the earliest AND largest grassroots tournaments for Hearthstone Battlegrounds, with
              close to <span className='underline underline-offset-2'>100 participants!</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
