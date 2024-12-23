'use client'
import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import {cn} from '@/utils/cn'

const Progress = React.forwardRef(({className, value, ...props}, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn('bg-primary/20 relative h-2 w-full overflow-hidden rounded-full', className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className='h-full w-full flex-1 bg-primary transition-all'
      style={{transform: `translateX(-${100 - (value || 0)}%)`}}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export {Progress}