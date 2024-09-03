'use client'
import React from 'react'

export default function Tooltip({children, text, direction = 'top', ...otherProps}) {
  const getTooltipClasses = () => {
    let baseClasses =
      'absolute z-50 opacity-0 pointer-events-none bg-dark dark:bg-light text-white dark:text-black p-2 min-w-max text-xs 2xl:text-sm rounded transition-all duration-100 transform'

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
