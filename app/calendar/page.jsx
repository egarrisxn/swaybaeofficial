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
      <section className='mx-auto mt-4 max-w-7xl sm:mb-16 sm:px-4 lg:mt-12 4xl:max-w-screen-3xl'>
        <div className='rounded-b border-b'>
          <Calendar />
        </div>

        <div className='mt-4 flex flex-row justify-end'>
          {/* <button className='rounded border bg-primary p-1 text-light dark:text-dark'> */}
          <button className='rounded bg-primary px-2 py-1.5 text-xs text-white transition-all duration-200 ease-in hover:bg-primary/70 focus:outline-none focus:ring-2 focus:ring-primary sm:px-4 sm:py-2.5 sm:text-sm sm:font-semibold 2xl:py-4 2xl:text-base 3xl:py-5 3xl:text-lg'>
            <a
              href='https://calendar.google.com/calendar/u/0/r?cid=63739436a2ea120a341ec13abffc4b1289f77240a837d12043bed81ce6c78e1c@group.calendar.google.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              + Add to calendar
            </a>
          </button>
        </div>
      </section>
    </main>
  )
}

{
  /* <div className='my-16 w-full xl:my-20 3xl:my-24'>
        <section className='mx-auto max-w-9xl sm:px-4 4xl:max-w-11xl'>
          <h2 className='mb-4 px-2 text-center sm:text-lg md:text-2xl'>
            Select an event to see more details.
          </h2>
          <div className='pb-16'>
            <div className='aspect-h-16 aspect-w-9 rounded-md shadow-md shadow-purple-500/80 md:aspect-h-9 md:aspect-w-16 sm:rounded-xl md:mx-auto md:border-2'>
              <iframe
                title='Calendar'
                src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showPrint=0&showTitle=0&showNav=1&showDate=1&showCalendars=0&src=NjM3Mzk0MzZhMmVhMTIwYTM0MWVjMTNhYmZmYzRiMTI4OWY3NzI0MGE4MzdkMTIwNDNiZWQ4MWNlNmM3OGUxY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5'
                width='100%'
                height='100%'
                className='rounded-md bg-white p-0.5 sm:p-2'
                allow='fullscreen'
              ></iframe>
            </div>
          </div>
        </section>
      </div> */
}
