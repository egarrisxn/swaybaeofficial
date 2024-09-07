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
        ghost: 'bg-w2b text-b2p',
        scroll:
          'cursor-pointer z-50 inline-block bg-secondary text-white shadow-soft hover:bg-white xl:size-16 3xl:size-20 size-12 hover:text-black hover:shadow-hard dark:bg-black dark:text-primary hover:dark:bg-dark-fade hover:dark:text-white',
        social:
          'border-2 cursor-pointer border-light-tint bg-w2b shadow-soft hover:border-light-fade hover:bg-light hover:text-b2w hover:shadow-hard dark:border-gray-fade size-8 lg:size-10 xl:size-11 2xl:size-12 3xl:size-14 dark:hover:border-gray-tint dark:hover:bg-dark-fade text-sm font-semibold lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl',
      },
      size: {
        default: 'h-10 px-4 py-2',
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
