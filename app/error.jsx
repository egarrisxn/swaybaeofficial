'use client'

export default function Error({error, reset}) {
  return (
    <section className='flex min-h-screen items-center justify-center'>
      <div className='mb-10 text-center'>
        <h1 className='mb-6 text-2xl font-medium'>Oh no! Something went wrong.</h1>
        <button
          className='hover:bg-secondary/70 rounded-md bg-secondary px-4 py-2 font-bold text-light focus:outline-none focus:ring-2 focus:ring-secondary'
          onClick={reset}
        >
          Refresh
        </button>
        <pre className='mt-4 text-gray'>{error.message}</pre>
      </div>
    </section>
  )
}
