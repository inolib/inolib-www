import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { cn } from "~/components/helpers/cn"
const buttonVariants  = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ButtonJaune: "bg-[#E1FF01] text-black hover:bg-primary/90 pt-2.5 pr-4 pb-2.5 pl-4",
        buttonNoir: "bg-[#254147] text-white hover:bg-primary/90 pt-2.5 pr-4 pb-2.5 pl-4",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "bg-transparent text-black",
        link: "text-primary underline-offset-4 hover:underline",
        buttonNoirOutline: " border-2 border-[#E1FF01] text-white hover:bg-[#1f353a] py-2.5 px-4 rounded-full ",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "ButtonJaune",
      size: "default",
    },
  }
)
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?:string
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant,href, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
