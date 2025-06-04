import * as React from "react"
import { cn } from "../../lib/utils"

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn("inline-flex items-center justify-center rounded-md text-sm font-medium", className)}
      {...props}
    />
  )
)
Button.displayName = "Button"
