'use client'
import {CalendarDays, Twitch} from 'lucide-react'
import {Card} from './ui/card'

export function SubathonHeader() {
  return (
    <Card className='space-y-6 bg-white p-6 text-center shadow backdrop-blur-sm sm:p-8 dark:bg-black'>
      <h1 className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:tracking-tight md:text-5xl xl:text-6xl'>
        Sway&apos;s Subathon Season!
      </h1>
      <p className='text-sm tracking-tighter text-slate-700 sm:tracking-tight md:text-base dark:text-slate-300'>
        Get ready for 10 days of excitement, surprises, and unforgettable moments with The Bae
        Squad!
      </p>
      <div className='flex flex-col items-center justify-center gap-6 text-sm md:flex-row md:text-lg'>
        <div className='flex items-center gap-1 md:gap-2'>
          <CalendarDays className='size-4 text-purple-600 sm:size-6' />
          <span>Dec. 23rd, 2024 - Jan. 1st, 2025</span>
        </div>
        <a
          href='https://www.twitch.tv/sway_bae'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-1 text-sm transition-colors hover:text-purple-700 md:gap-2 lg:text-lg'
        >
          <Twitch className='size-4 text-purple-600 sm:size-6' />
          <span>Watch on Twitch</span>
        </a>
      </div>
    </Card>
  )
}
