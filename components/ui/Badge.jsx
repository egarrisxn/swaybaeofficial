import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex drop-shadow-md items-center border whitespace-nowrap px-2 transition-colors focus:outline-none focus:ring-0",
  {
    variants: {
      variant: {
        default:
          "rounded-full border-transparent bg-primary hover:bg-primary-fade",
        time: "rounded-md  w-fit mt-0.5 border-transparent tracking-tight bg-neutral text-white line-clamp-1",
        tag: "rounded-full py-0.5 text-black border-transparent min-w-content max-w-full tracking-tighter text-xs font-semibold",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
