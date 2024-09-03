import Calendar from '@/components/Calendar'

export default function CalendarPage() {
  return (
    <main className='mt-5 min-h-screen w-full px-2 sm:mt-0 sm:px-4'>
      <header className='mx-auto max-w-7xl pt-4 lg:px-4 lg:pt-16 xl:px-0 4xl:max-w-screen-3xl'>
        <h1 className='ml-2 mt-4 bg-gradient-to-tr from-navy via-pink to-pink bg-clip-text text-xl uppercase tracking-widest text-transparent 3xl:ml-3 3xl:mt-6 3xl:text-3xl'>
          Calendar
        </h1>
      </header>
      <br />
      {/* ----------Calendar Body---------- */}
      <section className='mx-auto mb-16 mt-4 max-w-7xl sm:px-4 lg:mt-12 4xl:max-w-screen-3xl'>
        {/* <h3 className='mb-2 ml-1 text-2xl font-bold sm:text-3xl xl:text-4xl'>
          Stay Updated with Sway!
        </h3>
        <p className='mb-6 ml-1 max-w-4xl text-sm leading-6 tracking-tight text-dark2/80 sm:text-base sm:leading-6 lg:leading-5 xl:text-xl xl:leading-7 3xl:leading-8 dark:text-light2/80'>
          My interactive calendar is the best way to stay updated with everything happening with the
          Bae Squad! From my Twitch streaming schedule, to the latest YouTube video releases, and
          all the events I&apos;ll be attending, you can find it all here.
        </p> */}
        <div className='md:rounded md:border-2 md:border-black md:bg-white md:p-2 md:shadow-[2px_3px_6px_0px_#581d95] xl:p-4 md:dark:border-white md:dark:bg-black md:dark:shadow-[2px_3px_12px_0px_#581d95]'>
          <Calendar />
          <div className='mt-2 flex flex-row justify-end xl:mt-4'>
            <button className='rounded border-2 bg-primary/70 px-1.5 py-1 text-xs font-semibold text-white shadow-[1px_2px_4px_0px_#581d95] transition-all duration-200 ease-in hover:border-primary2 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-light2 md:px-4 md:py-2.5 md:text-sm 2xl:px-6 2xl:py-4 2xl:text-base 3xl:text-lg dark:shadow-[1px_3px_6px_0px_#581d95]'>
              <a
                href='https://calendar.google.com/calendar/u/0/r?cid=63739436a2ea120a341ec13abffc4b1289f77240a837d12043bed81ce6c78e1c@group.calendar.google.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Add to Your Calendar
              </a>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

//  ;<div className='sansita relative inline-block text-4xl font-black italic tracking-tight sm:text-5xl lg:text-6xl 3xl:text-8xl'>
//    <span className='absolute bottom-0.5 inline-block h-2 w-full bg-primary sm:h-2.5 md:bottom-0 md:h-3 3xl:h-4'></span>
//    <p className='relative pl-1 pr-0.5'>I&apos;m Sway!</p>
//  </div>
