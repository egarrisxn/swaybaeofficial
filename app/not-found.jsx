import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='flex min-h-screen items-center justify-center'>
      <div className='mb-10 text-center'>
        <h1 className='text-2xl font-medium'>404 | ERROR</h1>
        <p className='mb-6'>SORRY...NOT FOUND.</p>
        <button className='rounded-md bg-secondary px-4 py-2 font-bold text-light hover:bg-secondary/70 focus:outline-none focus:ring-2 focus:ring-secondary'>
          <Link href='/'>Return Home</Link>
        </button>
      </div>
    </section>
  )
}
