import Calendar from '@/containers/calendar-page/Calendar'

export default function CalendarHomePage() {
  return (
    <main className='mx-auto mt-8 w-full sm:container sm:mt-0'>
      <div className='w-full px-4 3xl:px-20 4xl:px-40'>
        <Calendar />
      </div>
    </main>
  )
}