import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='flex flex-col items-center justify-center gap-4'>
      <div className='text-center md:space-y-2'>
        <h1 className='text-2xl font-bold md:text-5xl'>
          <span className='text-secondary'>404</span> Error
        </h1>
        <p className='md:text-2xl'>Page not found</p>
      </div>
      <button className='rounded-md border-2 px-2 py-1 text-sm font-bold md:px-4 md:py-2 md:text-xl'>
        <Link href='/'>Return Home</Link>
      </button>
    </section>
  )
}
