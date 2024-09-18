import Calendar from '@/containers/calendar-page/Calendar'

function loadingPage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('loading...')
    }, 1000)
  })
}

export default async function CalendarHomePage() {
  const load = await loadingPage()
  console.log({load})

  return (
    <main className='mx-auto mt-8 w-full sm:container sm:mt-0'>
      <div className='w-full px-4 3xl:px-20 4xl:px-40'>
        <Calendar />
      </div>
    </main>
  )
}
