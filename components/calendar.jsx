import PageHeader from './page-header'
import GoogleCalendar from './google-calendar'

export default function Calendar() {
  return (
    <>
      <PageHeader id='calendar' className='flex px-2 pt-4 lg:px-4 lg:pt-16 xl:px-0'>
        Calendar
      </PageHeader>
      {/* ----------Calendar Body---------- */}
      <section className='mx-auto mb-16 mt-12 max-w-7xl sm:px-4 lg:my-20 lg:px-6 xl:px-10 3xl:my-24 3xl:px-16 4xl:max-w-screen-3xl'>
        <div className='rounded-lg border-2 border-b2w bg-w2b p-1 shadow-soft hover:shadow-hard md:p-2 xl:p-4'>
          <GoogleCalendar />
        </div>
      </section>
    </>
  )
}
