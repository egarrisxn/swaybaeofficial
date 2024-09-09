'use client'
import {Button} from '@/components/ui/button'

export default function Error({error, reset}) {
  return (
    <section className='container mx-auto flex flex-col items-center justify-center gap-2 px-2 text-center'>
      <h1 className='text-7xl font-medium'>Oops!</h1>
      <h2 className='mb-2 text-xl'>Something went wrong.</h2>
      <Button variant='fun' size='md' onClick={reset}>
        Refresh
      </Button>
      <pre className='mt-6 max-w-md text-wrap text-center text-xs text-gray-fade sm:text-sm'>
        {error.message}
      </pre>
    </section>
  )
}
