'use client'
import Image from 'next/image'
import {useEffect} from 'react'
import MyButton from '@/components/(ui)/MyButton'

export default function Error({error, reset}) {
  useEffect(() => {
    console.log(error)
  }, [error])

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
      <p className='py-2 text-center text-lg font-semibold max-[300px]:text-base md:text-xl'>
        <span className='text-primary'>Oh no!</span> Something went wrong.
      </p>
      <MyButton onClick={reset}>Refresh</MyButton>
    </main>
  )
}
