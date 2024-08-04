import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef, memo, ReactNode } from "react";

// Define base styles for the tooltip button
const tooltipButtonStyles = cva(
  "relative cursor-pointer flex items-center justify-center rounded-md p-2 duration-200",
  {
    variants: {
      color: {
        default: "text-gray-700",
        blue: "text-blue-700 hover:text-blue-500",
        red: "text-red-700 hover:text-red-500",
        green: "text-green-700 hover:text-green-500",
        yellow: "text-yellow-700 hover:text-yellow-500",
        purple: "text-purple-700 hover:text-purple-500",
      },
      size: {
        small: "w-6 h-6",
        medium: "w-8 h-8",
        large: "w-10 h-10",
      },
    },
    defaultVariants: {
      color: "default",
      size: "medium",
    },
  }
);

type TooltipButtonProps = ComponentProps<"button"> & {
  tooltipText?: string;
  color?: "default" | "blue" | "red" | "green" | "yellow" | "purple";
  size?: "small" | "medium" | "large";
  icon?: ReactNode; // For icon support
};

// Create a memoized component to optimize performance
export const TooltipButton = memo(
  forwardRef<HTMLButtonElement, TooltipButtonProps>(
    (
      {
        className,
        tooltipText = "Tooltip",
        color = "default",
        size = "medium",
        icon,
        ...props
      },
      ref
    ) => {
      return (
        <div className="relative group">
          <button
            ref={ref}
            className={cn(tooltipButtonStyles({ color, size }), className)}
            {...props}
          >
            {icon && <span className="mr-2">{icon}</span>}
          </button>
          <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            {tooltipText}
          </span>
        </div>
      );
    }
  )
);
