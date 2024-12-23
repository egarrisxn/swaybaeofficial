'use client'
import {CalendarDays, Twitch} from 'lucide-react'
import {Card} from '@/components/ui/card'

export function SubathonHeader() {
  return (
    <Card className='space-y-6 bg-white p-8 text-center backdrop-blur-sm shadow dark:bg-black'>
      <h1 className='bg-gradient-to-r from-purple to-pink bg-clip-text text-4xl font-bold text-transparent md:text-6xl xl:text-7xl'>
        It&apos;s Subathon Season!
      </h1>
      <p className='text-sm tracking-tight md:text-base'>
        Get ready for 10 days of excitement, surprises, and unforgettable moments with the Bae
        Squad!
      </p>

      <div className='flex flex-col items-center justify-center gap-6 md:flex-row md:text-lg'>
        <div className='flex items-center gap-1 md:gap-2'>
          <CalendarDays className='text-purple-600 size-5 sm:size-6' />
          <span>Dec. 23rd, 2024 - Jan. 1st, 2025</span>
        </div>
        <a
          href='https://www.twitch.tv/sway_bae'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-purple-700 flex items-center gap-1 transition-colors md:gap-2'
        >
          <Twitch className='text-purple-600 size-5 sm:size-6' />
          <span>Watch on Twitch</span>
        </a>
      </div>
    </Card>
  )
}
