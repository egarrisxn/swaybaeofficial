import Link from 'next/link'

export default function NotFound() {
  return (
    <section>
      <div className='container'>
        <h1 className='text-2xl font-medium'>Not Found</h1>
        <p className='opacity-50'>Could not find requested resource</p>
        <button className='mt-3'>
          <Link href='/'>Return Home</Link>
        </button>
      </div>
    </section>
  )
}
