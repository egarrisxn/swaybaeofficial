import {Header} from '@/components/Header'
import Calendar from '@/components/Calendar'
import {FunButton} from '@/components/ui/FunButton'

export default function CalendarPage() {
  return (
    <main className='mx-auto mt-8 w-full sm:container sm:mt-0'>
      <div className='w-full px-4 3xl:px-20 4xl:px-40'>
        <Header id='calendar' className='flex px-2 pt-4 lg:px-4 lg:pt-16 xl:px-0'>
          Calendar
        </Header>
        {/* ----------Calendar Body---------- */}
        <section className='mx-auto mb-16 mt-12 max-w-7xl sm:px-4 lg:my-20 lg:px-6 xl:px-10 3xl:my-24 3xl:px-16 4xl:max-w-screen-3xl'>
          <div className='rounded-lg border-2 border-b2w bg-w2b p-1 shadow-hard md:p-2 xl:p-4'>
            <Calendar />
            <div className='mb-0.5 mr-0.5 mt-1.5 flex justify-end md:mt-2 xl:mt-4'>
              <FunButton type='button' className='px-2 md:px-8 2xl:px-12'>
                <a
                  href='https://calendar.google.com/calendar/u/0/r?cid=63739436a2ea120a341ec13abffc4b1289f77240a837d12043bed81ce6c78e1c@group.calendar.google.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Add to Your Calendar
                </a>
              </FunButton>
            </div>
          </div>
        </section>
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
