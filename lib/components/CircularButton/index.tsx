import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef, memo, ReactNode } from "react";
import { cn } from "../../utils";

// Define base styles for the button with variants for color and size
const buttonStyles = cva(
  "group flex items-center justify-start w-11 h-11 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1",
  {
    variants: {
      color: {
        red: "bg-red-600",
        blue: "bg-blue-600",
        green: "bg-green-600",
      },
      size: {
        small: "w-8 h-8",
        medium: "w-11 h-11",
        large: "w-14 h-14",
      },
    },
    defaultVariants: {
      color: "red",
      size: "medium",
    },
  }
);

type AnimatedButtonProps = ComponentProps<"button"> & {
  label: string;
  color?: "red" | "blue" | "green";
  size?: "small" | "medium" | "large";
  icon: ReactNode; // For icon support
};

// Create a memoized component to optimize performance
export const CircularButton = memo(
  forwardRef<HTMLButtonElement, AnimatedButtonProps>(
    (
      { className, label, color = "red", size = "medium", icon, ...props },
      ref
    ) => {
      // Combine default styles from CVA with any custom className
      const combinedClassName = cn(buttonStyles({ color, size }), className);

      return (
        <button
          ref={ref}
          className={combinedClassName}
          {...props}
          title={label}
        >
          <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
            <div className="w-4 h-4 text-white">{icon}</div>
          </div>
          <div className="absolute text-lg font-semibold text-white transition-all duration-300 transform translate-x-full opacity-0 right-5 group-hover:translate-x-0 group-hover:opacity-100">
            {label}
          </div>
        </button>
      );
    }
  )
);
