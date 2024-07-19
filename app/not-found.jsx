import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='flex items-center justify-center min-h-screen'>
      <div className='text-center mb-10'>
        <h1 className='text-2xl font-medium'>404 | ERROR</h1>
        <p className='mb-6'>SORRY...NOT FOUND.</p>
        <button className='rounded-md bg-secondary hover:bg-secondary/70 text-white font-bold py-2 px-4 focus:outline-none focus:ring-2 focus:ring-secondary'>
          <Link href='/'>Return Home</Link>
        </button>
      </div>
    </section>
  )
}