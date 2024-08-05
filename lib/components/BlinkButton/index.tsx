import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef, memo } from "react";
import { cn } from "../../utils";

// Define base styles for the animated button
const animatedButtonStyles = cva(
  "cursor-pointer relative group overflow-hidden border-2 px-8 py-2",
  {
    variants: {
      color: {
        green: "border-green-500 text-white",
        red: "border-red-500 text-white",
        blue: "border-blue-500 text-white",
      },
    },
    defaultVariants: {
      color: "green",
    },
  }
);

type AnimatedButtonProps = ComponentProps<"button"> & {
  label?: string;
  color?: "green" | "red" | "blue";
};

// Create a memoized component for the animated button
export const BlinkButton = memo(
  forwardRef<HTMLButtonElement, AnimatedButtonProps>(
    ({ className, label = "Button", color = "green", ...props }, ref) => {
      // Combine default styles from CVA with any custom className
      const combinedClassName = cn(animatedButtonStyles({ color }), className);

      return (
        <button ref={ref} className={combinedClassName} {...props}>
          <span className="relative z-10 text-xl font-bold duration-500 group-hover:text-green-500">
            {label}
          </span>
          <span className="absolute top-0 left-0 w-full h-full duration-500 bg-green-500 group-hover:-translate-x-full"></span>
          <span className="absolute top-0 left-0 w-full h-full duration-500 bg-green-500 group-hover:translate-x-full"></span>
          <span className="absolute top-0 left-0 w-full h-full duration-500 delay-300 bg-green-500 group-hover:-translate-y-full"></span>
          <span className="absolute top-0 left-0 w-full h-full duration-500 delay-300 bg-green-500 group-hover:translate-y-full"></span>
        </button>
      );
    }
  )
);
