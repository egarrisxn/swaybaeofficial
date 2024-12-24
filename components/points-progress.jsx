'use client'
import {Progress} from './ui/progress'
import {Card} from './ui/card'

export function PointsProgress({currentPoints, nextGoalPoints}) {
  const progress = (currentPoints / nextGoalPoints) * 100

  return (
    <Card className='space-y-4 bg-white p-5 shadow backdrop-blur-sm md:p-6 dark:bg-black'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold sm:text-lg md:text-2xl'>Current Progress</h2>
        <span className='text-sm font-semibold text-purple-600 sm:text-base md:text-xl dark:text-pink'>
          {currentPoints.toLocaleString()} / {nextGoalPoints.toLocaleString()} points
        </span>
      </div>

      <div className='py-1 sm:px-6 md:px-16'>
        <Progress value={progress} className='h-6 border-2 sm:h-7 md:h-8' />
      </div>
      <div className='text-muted-foreground text-center text-sm'>
        {Math.ceil(nextGoalPoints - currentPoints).toLocaleString()} points until next goal
      </div>
    </Card>
  )
}
