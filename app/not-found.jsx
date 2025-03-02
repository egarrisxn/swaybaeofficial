import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='container mx-auto flex flex-col items-center justify-center px-2 text-center'>
      <h1 className='text-7xl font-bold text-secondary'>404</h1>
      <h2 className='pb-4 text-xl font-semibold'>Page not found.</h2>
      <Link
        href='/'
        className='relative inline-flex h-10 cursor-pointer appearance-none items-center justify-center overflow-hidden whitespace-nowrap rounded-lg border-2 bg-light-fade px-12 shadow-soft transition-transform duration-500 ease-in-out before:absolute before:inset-0 before:z-[-1] before:translate-x-full before:bg-gradient-to-r before:from-primary-tint before:to-primary-fade before:duration-500 hover:scale-105 hover:shadow-hard hover:before:-translate-x-0 focus-visible:outline-none focus-visible:ring-0 active:scale-100 disabled:pointer-events-none disabled:opacity-50 2xl:text-base 3xl:text-lg dark:bg-dark-fade'
      >
        Return Home
      </Link>
    </section>
  )
}
