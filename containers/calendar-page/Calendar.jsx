import dynamic from 'next/dynamic'
import Loader from '@/components/Loader'
import PageHeader from '@/components/PageHeader'
import {Button} from '@/components/ui/Button'

const GoogleCalendar = dynamic(() => import('@/components/GoogleCalendar'), {
  ssr: false,
  loading: () => <Loader />,
})

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
          <div className='mb-0.5 mr-0.5 mt-1.5 flex justify-end md:mt-2 xl:mt-4'>
            <Button asChild variant='fun' size='sm'>
              <a
                href='https://calendar.google.com/calendar/u/0/r?cid=63739436a2ea120a341ec13abffc4b1289f77240a837d12043bed81ce6c78e1c@group.calendar.google.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Add to Your Calendar
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
