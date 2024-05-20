import Calendar from '@/components/(calendar)/Calendar'
import PageName from '@/components/(other)/PageName'
import SocialButtons from '@/components/(ui)/SocialButtons'

export default function CalendarPage() {
  return (
    <main className='mt-5 min-h-dvh w-full p-0'>
      <label className='sr-only'>Tag Page</label>
      <div className='w-full px-4'>
        <header className='mx-auto max-w-7xl px-2 pb-12 pt-4 lg:px-4 lg:pt-16 4xl:max-w-screen-3xl'>
          <PageName>Calendar</PageName>
        </header>
        <br />
        <article className='mx-auto mb-4 mt-4 max-w-6xl sm:mt-0 sm:px-4 4xl:max-w-screen-3xl'>
          <h3 className='mb-4 text-center md:text-2xl'>Select an event to see more details.</h3>
          <div className='pb-16'>
            <Calendar />
          </div>
          <br />
        </article>
        <div className='mx-auto mb-4 mt-24 max-w-6xl sm:px-4 4xl:max-w-screen-3xl'>
          <hr />
          <section className='my-6 flex items-center justify-center gap-6 max-[300px]:max-w-60 lg:my-10'>
            <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
              <SocialButtons />
            </div>
          </section>
          <hr />
        </div>
      </div>
    </main>
  )
}
