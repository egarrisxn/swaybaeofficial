import Link from 'next/link'
import {buttonVariants} from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className='container mx-auto flex flex-col items-center justify-center px-2 text-center'>
      <h1 className='text-7xl font-bold text-secondary'>404</h1>
      <h2 className='pb-4 text-xl font-semibold'>Page not found.</h2>
      <Link href='/' className={buttonVariants({variant: 'fun', size: 'md'})}>
        Return Home
      </Link>
    </section>
  )
}
