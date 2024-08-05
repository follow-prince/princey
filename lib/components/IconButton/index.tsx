import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef, memo, ReactNode } from "react";
import { cn } from "../../utils";

// Define base styles for the button with variants for color and size
const buttonStyles = cva(
  "cursor-pointer flex items-center rounded-md duration-100 p-2",
  {
    variants: {
      color: {
        lime: "bg-lime-700 hover:bg-lime-900 active:border active:border-lime-400",
        red: "bg-red-700 hover:bg-red-900 active:border active:border-red-400",
        blue: "bg-blue-700 hover:bg-blue-900 active:border active:border-blue-400",
      },
      size: {
        small: "p-1 text-sm",
        medium: "p-2 text-base",
        large: "p-3 text-lg",
      },
    },
    defaultVariants: {
      color: "lime",
      size: "medium",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & {
  label?: string;
  color?: "lime" | "red" | "blue";
  size?: "small" | "medium" | "large";
  icon?: ReactNode; // For icon support
};

// Create a memoized component to optimize performance
export const IconButton = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        className,
        label = "Button",
        color = "lime",
        size = "medium",
        icon,
        ...props
      },
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
          {icon && <span className="mr-2">{icon}</span>}
          <span className={`text-${color}-100 font-bold`}>{label}</span>
        </button>
      );
    }
  )
);
