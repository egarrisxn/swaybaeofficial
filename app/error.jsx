'use client'

export default function Error({ error, reset }) {
  return (
    <section className='flex items-center justify-center min-h-screen'>
      <div className='text-center mb-10'>
        <h1 className='text-2xl font-medium mb-6'>Oh no! Something went wrong.</h1>
        <button className='rounded-md bg-secondary hover:bg-secondary/70 text-white font-bold py-2 px-4 focus:outline-none focus:ring-2 focus:ring-secondary'
          onClick={reset}
        >
          Refresh
        </button>
        <pre className='text-gray-500 mt-4'>{error.message}</pre>
      </div>
    </section>
  )
}
