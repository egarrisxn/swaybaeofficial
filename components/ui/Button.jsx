import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva} from 'class-variance-authority'
import {cn} from '@/utils/clsx'

// 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',

const buttonVariants = cva(
  'inline-flex items-center justify-center appearance-none focus-visible:outline-none focus-visible:ring-0 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary hover:bg-primary-tint',
        secondary: 'bg-secondary hover:bg-secondary-tint',
        outline: 'border border-border hover:bg-accent',
        ghost: 'bg-w2b text-b2p',
        scroll: 'cursor-pointer',
        link: 'text-primary underline-offset-4 hover:underline',
        social:
          'border-2 border-light-tint bg-w2b shadow-soft hover:border-light-fade hover:bg-light hover:text-b2w hover:shadow-hard dark:border-gray-fade dark:hover:border-gray-tint dark:hover:bg-dark-fade text-sm font-semibold lg:font-extrabold 2xl:text-base 3xl:text-2xl',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'size-10',
        round: 'rounded-full p-1.5 lg:p-2 2xl:p-2.5',
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
