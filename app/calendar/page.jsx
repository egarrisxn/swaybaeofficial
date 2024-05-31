export default function CalendarPage() {
  return (
    <main className='mx-auto w-full px-2 sm:container sm:px-4 3xl:px-20 4xl:px-40'>
      <label className='sr-only' aria-label='Calendar'>
        Calendar
      </label>
      <div>
        <br className='hidden md:block' />
        <h1 className='ml-2 mt-4 bg-gradient-to-tr from-navy via-pink to-pink bg-clip-text text-xl uppercase tracking-widest text-transparent 3xl:ml-3 3xl:mt-6 3xl:text-3xl'>
          Calendar
        </h1>
      </div>
      {/* ----------Calendar Body---------- */}
      <div className=' my-16 w-full xl:my-20 3xl:my-24'>
        <section className='mx-auto max-w-9xl sm:px-4 4xl:max-w-11xl'>
          <h3 className='mb-4 px-2 text-center sm:text-lg md:text-2xl'>
            Select an event to see more details.
          </h3>
          <div className='pb-16'>
            <div className='aspect-h-16 aspect-w-9 rounded-md shadow-md shadow-purple-500/80 md:aspect-h-9 md:aspect-w-16 sm:rounded-xl md:mx-auto md:border-2'>
              <iframe
                src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showPrint=0&showTitle=0&showNav=1&showDate=1&showCalendars=0&src=NjM3Mzk0MzZhMmVhMTIwYTM0MWVjMTNhYmZmYzRiMTI4OWY3NzI0MGE4MzdkMTIwNDNiZWQ4MWNlNmM3OGUxY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5'
                width='100%'
                height='100%'
                className='rounded-md bg-white p-0.5 sm:p-2'
                allow='fullscreen'
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
