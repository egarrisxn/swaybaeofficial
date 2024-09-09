import * as React from 'react'
import {cn} from '@/utils/clsx'

const Input = React.forwardRef(({className, type, ...props}, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'placeholder:text-gray-light flex w-full rounded-md border border-gray bg-background px-3 py-2 text-sm shadow ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 xl:px-5 xl:py-3 xl:text-base 3xl:px-8 3xl:py-4 3xl:text-2xl',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export {Input}
