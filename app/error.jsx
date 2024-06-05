'use client'

export default function Error({error, reset}) {
  return (
    <section>
      <div className='container'>
        <h1 className='text-2xl font-medium'>Oh no! Something went wrong.</h1>
        <button className='mt-3' onClick={reset}>
          Refresh
        </button>
        <pre>{error.message}</pre>
      </div>
    </section>
  )
}
