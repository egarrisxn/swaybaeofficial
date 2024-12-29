import {Card} from './ui/card'
import {Dumbbell, Music, Trophy} from 'lucide-react'

export function Incentives() {
  return (
    <Card className='space-y-6 bg-gradient-to-bl from-purple-50 to-white p-4 shadow-lg lg:p-6 dark:from-gray-800 dark:to-black'>
      <h2 className='text-lg font-bold md:text-xl xl:text-2xl'>Extra Incentives</h2>
      <div className='flex flex-col gap-4 md:flex-row'>
        <Card className='space-y-3 border p-3 shadow-lg md:p-4'>
          <div className='flex items-center gap-2'>
            <Dumbbell className='size-4 text-purple-600 md:size-5 dark:text-pink-400' />
            <h4 className='text-lg font-semibold leading-tight text-gray-900 dark:text-gray-200'>
              Fitness Goals
            </h4>
          </div>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            Every <b>5,000 points</b>, Sway will spin the <i>infamous</i> fitness wheel for
            exercises! The wheel includes 5 crunches, 5 pushups, 5 bicep curls, 5 sqauts, 5 burpees,
            and 1 minute planks.
          </p>
        </Card>
        <Card className='space-y-3 border p-3 shadow-lg md:p-4'>
          <div className='flex items-center gap-2'>
            <Music className='size-4 text-purple-600 md:size-5 dark:text-pink-400' />
            <h4 className='text-lg font-semibold leading-tight text-gray-900 dark:text-gray-200'>
              Song Requests
            </h4>
          </div>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            Every <b>20,000 points</b> unlocks a Song Request power hour!{' '}
            <i>
              *Note: Song requests must be family-friendly and will be disabled during Sway at Nite,
              if it&apos;s reached.*
            </i>
          </p>
        </Card>
        <Card className='bg-gradient-to-l from-purple-500 via-pink-500 to-blue-500 p-0.5 shadow-lg'>
          {/* Main Content */}
          <div className='space-y-3 rounded-md bg-w2b p-3 md:p-4'>
            <div className='flex items-center gap-2'>
              <Trophy className='size-4 text-purple-600 md:size-5 dark:text-pink-400' />
              <h4 className='text-lg font-semibold leading-tight text-gray-900 dark:text-gray-200'>
                Top Contributors
              </h4>
            </div>
            <p className='text-sm text-slate-700 dark:text-slate-300'>
              The <b>Top 5 contributors</b> get a personalized alert for any Twitch event (e.g.,
              subs, gifted subs, bits), along with an on-screen arrival action for their first
              message sent in stream!
            </p>
          </div>
        </Card>
      </div>
    </Card>
  )
}
