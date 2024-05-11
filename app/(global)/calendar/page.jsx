import Calendar from '@/components/(calendar)/Calendar'
import SocialButtons from '@/components/(ui)/SocialButtons'

export default function CalendarPage() {
  return (
    <main className='mt-5'>
      <label className='sr-only'>Tag Page</label>
      <Calendar />
      <hr className='mx-auto mt-4 max-w-6xl' />
      <section className='my-6 flex items-center justify-center max-[300px]:max-w-60 lg:my-10'>
        <div className='flex flex-row flex-wrap items-center gap-2'>
          Socials:
          <SocialButtons />
        </div>
      </section>
      <hr className='mx-auto mb-4 max-w-6xl' />
    </main>
  )
}
