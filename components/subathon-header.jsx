'use client'
import {CalendarDays, Twitch} from 'lucide-react'
import {Card} from '@/components/ui/card'

export function SubathonHeader() {
  return (
    <Card className='space-y-6 bg-gradient-to-br from-purple-200 to-pink-100 p-8 text-center shadow-xl dark:from-gray-800 dark:to-gray-900'>
      <h1 className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl'>
        Sway&apos;s Subathon Season!
      </h1>
      <p className='text-sm text-gray-700 dark:text-gray-300'>
        Get ready for 10 days of excitement, surprises, and unforgettable
        moments with The Bae Squad!
      </p>
      <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
        <div className='flex items-center gap-2'>
          <CalendarDays className='text-purple-600 dark:text-pink-400' />
          <span className='text-gray-800 dark:text-gray-200'>
            Dec. 23rd, 2024 - Jan. 1st, 2025
          </span>
        </div>
        <a
          href='https://www.twitch.tv/sway_bae'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 text-purple-700 hover:underline dark:text-pink-400'
        >
          <Twitch />
          <span>Watch on Twitch</span>
        </a>
      </div>
    </Card>
  )
}
