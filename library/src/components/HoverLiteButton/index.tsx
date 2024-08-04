import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef, memo, ReactNode } from "react";

// Define base styles for the button with variants for color and size
const buttonStyles = cva(
  "cursor-pointer transition-all px-6 py-2 rounded-lg border-b-[4px]",
  {
    variants: {
      color: {
        blue: "bg-blue-500 text-white border-blue-600 hover:brightness-110 hover:border-b-[6px] active:border-b-[2px] active:brightness-90",
        red: "bg-red-500 text-white border-red-600 hover:brightness-110 hover:border-b-[6px] active:border-b-[2px] active:brightness-90",
        // Add more colors or styles as needed
      },
      size: {
        small: "px-4 py-1 text-sm",
        medium: "px-6 py-2",
        large: "px-8 py-3 text-lg",
      },
    },
    defaultVariants: {
      color: "blue",
      size: "medium",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & {
  label?: string;
  color?: "blue" | "red";
  size?: "small" | "medium" | "large";
  icon?: ReactNode; // For icon support
};

// Create a memoized component to optimize performance
export const HoverLiteButton = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        className,
        label = "Button",
        color = "blue",
        size = "medium",
        icon,
        ...props
      },
      ref
    ) => {
      return (
        <button
          ref={ref}
          className={cn(buttonStyles({ color, size }), className)}
          {...props}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {label}
        </button>
      );
    }
  )
);
