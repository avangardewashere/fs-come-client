import { cn } from "@/lib/utlis";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "w-auto ronded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed hover:opacity-75 transition font-semibold text-white",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
