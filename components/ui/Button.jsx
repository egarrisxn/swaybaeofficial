import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva} from 'class-variance-authority'
import {cn} from '@/utils/clsx'

const buttonVariants = cva(
  'inline-flex items-center justify-center appearance-none focus-visible:outline-none focus-visible:ring-0 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary hover:bg-primary-tint',
        link: 'text-primary underline-offset-4 hover:underline',
        ghost: 'bg-w2b text-p2b',
        scroll:
          'cursor-pointer z-50 transition-all duration-200 ease-in-out bg-secondary text-white shadow-soft hidden sm:inline-block hover:bg-white fixed bottom-0 right-0 mb-14 mr-10 p-1 hover:text-black hover:shadow-hard dark:bg-black dark:text-primary hover:dark:bg-dark-fade hover:dark:text-white',
        social:
          'border-2 cursor-pointer border-light-tint bg-w2b shadow-soft hover:border-light-fade hover:bg-light hover:text-b2w hover:shadow-hard dark:border-gray-fade max-[375px]:size-7 size-8 lg:size-10 xl:size-11 2xl:size-12 3xl:size-14 dark:hover:border-gray-tint dark:hover:bg-dark-fade font-semibold',
        fun: 'relative overflow-hidden rounded-lg border-2 bg-light-fade text-sm dark:bg-dark-fade font-medium shadow-soft transition-transform duration-500 ease-in-out before:absolute before:inset-0 before:z-[-1] before:translate-x-full before:rounded-[0.4rem] before:bg-gradient-to-r before:dark:from-primary-tint before:dark:to-primary-fade before:from-secondary-tint before:to-secondary-fade before:transition-transform before:duration-500 before:ease-in-out hover:scale-105 hover:shadow-hard hover:before:-translate-x-0 focus:outline-none focus:ring-2 active:scale-95 2xl:text-base 3xl:text-lg',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'px-2 py-1 md:py-2 md:px-8 2xl:px-12',
        md: 'h-10 px-12 py-2',
        lg: '3xl:py-5 py-2.5 2xl:py-3.5 w-full',
        icon: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Button = React.forwardRef(({className, variant, size, asChild = false, ...props}, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({variant, size, className}))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export {Button, buttonVariants}
