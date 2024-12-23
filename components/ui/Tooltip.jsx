'use client'
import React from 'react'

const Tooltip = ({children, text, direction = 'top', ...otherProps}) => {
  const getTooltipClasses = () => {
    let baseClasses =
      'absolute z-50 opacity-0 pointer-events-none rounded-md border bg-foreground px-2 py-1 min-w-max text-xs text-background shadow-md 2xl:px-3 2xl:py-1.5 2xl:text-base transition-all duration-100 transform'

    switch (direction) {
      case 'left':
        return `${baseClasses} top-1/2 left-0 translate-x-[-100%] translate-y-[-50%]`
      case 'right':
        return `${baseClasses} top-1/2 right-0 translate-x-[100%] translate-y-[-50%]`
      case 'bottom':
        return `${baseClasses} left-1/2 top-full translate-x-[-50%] translate-y-[10px]`
      case 'top':
      default:
        return `${baseClasses} left-1/2 bottom-full translate-x-[-50%] translate-y-[-10px]`
    }
  }

  return (
    <span className='group relative' {...otherProps}>
      {React.Children.map(
        children,
        (child) =>
          React.isValidElement(child) &&
          React.cloneElement(child, {
            'aria-label': text,
          }),
      )}
      <span
        className={getTooltipClasses() + ' group-hover:pointer-events-auto group-hover:opacity-100'}
        data-label={text}
      >
        {text}
      </span>
    </span>
  )
}

export {Tooltip}

// 'use client'
// import * as React from 'react'
// import * as TooltipPrimitive from '@radix-ui/react-tooltip'
// import { cn } from '@/lib/utils'

// const TooltipProvider = TooltipPrimitive.Provider
// const Tooltip = TooltipPrimitive.Root
// const TooltipTrigger = TooltipPrimitive.Trigger

// const TooltipContent = React.forwardRef(({className, sideOffset = 4, ...props}, ref) => (
//   <TooltipPrimitive.Content
//     ref={ref}
//     sideOffset={sideOffset}
//     className={cn(
//       'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border bg-foreground px-2 py-1 text-xs text-background shadow-md 2xl:px-3 2xl:py-1.5 2xl:text-base',
//       className,
//     )}
//     {...props}
//   />
// ))
// TooltipContent.displayName = TooltipPrimitive.Content.displayName

// export {Tooltip, TooltipTrigger, TooltipContent, TooltipProvider}
