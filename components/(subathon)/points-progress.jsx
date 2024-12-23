'use client'
import {Progress} from '@/components/ui/progress'
import {Card} from '@/components/ui/card'

export function PointsProgress({currentPoints, nextGoalPoints}) {
  const progress = (currentPoints / nextGoalPoints) * 100

  return (
    <Card className='space-y-4 bg-white p-5 backdrop-blur-sm shadow md:p-6 dark:bg-black'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-bold md:text-2xl'>Current Progress</h2>
        <span className='text-purple-600 text-base font-semibold md:text-xl dark:text-pink'>
          {currentPoints.toLocaleString()} / {nextGoalPoints.toLocaleString()} points
        </span>
      </div>

      <Progress value={progress} className='h-5 border-2 sm:h-6' />

      <div className='text-muted-foreground text-center text-sm'>
        {Math.ceil(nextGoalPoints - currentPoints).toLocaleString()} points until next goal
      </div>
    </Card>
  )
}
