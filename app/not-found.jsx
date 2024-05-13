import Image from 'next/image'
import Link from 'next/link'
import MyButton from '@/components/(ui)/MyButton'

export default function NotFound() {
  return (
    <main className='mx-auto mt-16 flex h-screen flex-col items-center'>
      <Image
        src='/BORK.gif'
        alt='404 Page || Bork! Bork! Bork!'
        width={300}
        height={300}
        quality={100}
        unoptimized
      />
      <p className='py-2 text-center text-xl font-semibold max-[300px]:text-base md:text-2xl'>
        <span className='text-primary'>404</span> | PAGE NOT FOUND
      </p>
      <MyButton>
        <Link href='/'>Home</Link>
      </MyButton>
    </main>
  )
}
