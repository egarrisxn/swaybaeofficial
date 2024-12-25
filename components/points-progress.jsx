'use client'
import {Progress} from './ui/progress'
import {Card} from './ui/card'

export function PointsProgress({currentPoints, nextGoalPoints}) {
  const progress = (currentPoints / nextGoalPoints) * 100
  return (
    <Card className='space-y-6 bg-gradient-to-br from-purple-100 to-white p-4 shadow-lg lg:p-6 dark:from-gray-800 dark:to-black'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-bold sm:text-xl md:text-xl xl:text-2xl'>Current Progress</h2>
        <span className='text-sm font-semibold text-purple-600 md:text-lg dark:text-pink-400'>
          {currentPoints.toLocaleString()} / {nextGoalPoints.toLocaleString()} points
        </span>
      </div>

      <div className='py-1'>
        <Progress
          value={progress}
          className='h-5 rounded-lg border border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-900'
        />
      </div>
      <div className='text-center text-sm text-gray-600 dark:text-gray-400'>
        {Math.ceil(nextGoalPoints - currentPoints).toLocaleString()} points until next goal
      </div>
    </Card>
  )
}
