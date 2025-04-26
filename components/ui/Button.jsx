import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center appearance-none focus-visible:outline-none focus-visible:ring-0 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary-tint",
        link: "text-primary underline-offset-4 hover:underline",
        ghost: "bg-transparent text-p2b",
        scroll:
          "fixed bottom-0 right-0 z-50 mb-14 mr-10 hidden bg-secondary p-1 text-white shadow-soft transition-all duration-200 ease-in-out hover:bg-white hover:text-black hover:shadow-hard sm:inline-block dark:bg-black dark:text-primary hover:dark:bg-dark-fade hover:dark:text-white",
        social:
          "size-8 border hover:border-2 border-light-tint bg-w2b font-semibold shadow-soft hover:border-light-fade hover:bg-light hover:text-b2w hover:shadow-hard max-[375px]:size-7 lg:size-10 xl:size-11 2xl:size-12 3xl:size-14 dark:border-gray-tint dark:hover:border-gray-fade dark:hover:bg-dark-fade",
        fun: "relative overflow-hidden rounded-lg border-2 bg-light-fade shadow-soft transition-transform duration-500 ease-in-out before:absolute before:inset-0 before:z-[-1] before:translate-x-full before:bg-gradient-to-r before:from-primary-tint before:to-primary-fade before:duration-500 hover:scale-105 hover:shadow-hard hover:before:-translate-x-0 active:scale-100 2xl:text-base 3xl:text-lg dark:bg-dark-fade",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-2 md:h-9 md:px-4",
        md: "h-10 px-12",
        lg: "h-10 w-full xl:h-12 3xl:h-14",
        icon: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
