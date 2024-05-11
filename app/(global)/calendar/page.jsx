import Calendar from '@/components/(calendar)/Calendar'
import PageName from '@/components/(other)/PageName'
import SocialButtons from '@/components/(ui)/SocialButtons'

export default function CalendarPage() {
  return (
    <main className='mt-5'>
      <label className='sr-only'>Tag Page</label>
      <div className='w-full px-4'>
        <header className='max-w-6xl pb-12 pt-4 sm:mx-auto lg:px-4 lg:pt-16 xl:px-0'>
          <PageName>Calendar</PageName>
        </header>
        <br />
        <article className='mx-auto mb-4 mt-4 max-w-6xl sm:mt-0 sm:px-4'>
          <h3 className='mb-4 text-center md:text-2xl'>Select an event to see more details.</h3>
          <div className='pb-16'>
            <Calendar />
          </div>
          <br />
          <hr />
          <section className='my-6 flex items-center justify-center max-[300px]:max-w-60 lg:my-10'>
            <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
              <span className='hidden sm:block'>Socials:</span>
              <SocialButtons />
            </div>
          </section>
          <hr />
        </article>
      </div>
    </main>
  )
}
