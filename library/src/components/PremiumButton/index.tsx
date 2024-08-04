import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef, memo, ReactNode } from "react";

// Define base styles for the button with variants for color and size
const buttonStyles = cva(
  "relative px-4 py-2 rounded-md font-medium overflow-hidden duration-300 group",
  {
    variants: {
      color: {
        red: "bg-red-950 text-red-400 border border-red-400 border-b-4 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75",
        green:
          "bg-green-950 text-green-400 border border-green-400 border-b-4 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75",
        blue: "bg-blue-950 text-blue-400 border border-blue-400 border-b-4 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75",
        yellow:
          "bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75",
        purple:
          "bg-purple-950 text-purple-400 border border-purple-400 border-b-4 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75",
      },
      size: {
        xsmall: "text-xs ",
        small: "text-sm ",
        medium: "text-base ",
        large: "text-lg ",
        xlarge: "text-xl ",
      },
    },
    defaultVariants: {
      color: "red",
      size: "medium",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & {
  label?: string;
  color?: "red" | "green" | "blue" | "yellow" | "purple";
  size?: "small" | "medium" | "large";
  icon?: ReactNode; // For future icon support, if needed
};

// Create a memoized component to optimize performance
export const PremiumButton = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        className,
        label = "Hover Me",
        color = "red",
        size = "medium",
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
          <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          {label}
        </button>
      );
    }
  )
);
