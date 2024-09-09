import Calendar from '@/containers/calendar-page/calendar'

export default function CalendarPage() {
  return (
    <main className='mx-auto mt-8 w-full sm:container sm:mt-0'>
      <div className='w-full px-4 3xl:px-20 4xl:px-40'>
        <Calendar />
      </div>
    </main>
  )
}

{
  /* <h3 className='mb-2 ml-1 text-2xl font-bold sm:text-3xl xl:text-4xl'>
          Stay Updated with Sway!
        </h3>
        <p className='mb-6 ml-1 max-w-4xl text-sm leading-6 tracking-tight text-gray-tint sm:text-base sm:leading-6 lg:leading-5 xl:text-xl xl:leading-7 3xl:leading-8 dark:text-gray-fade'>
          My interactive calendar is the best way to stay updated with everything happening with the
          Bae Squad! From my Twitch streaming schedule, to the latest YouTube video releases, and
          all the events I&apos;ll be attending, you can find it all here.
        </p> */
}
