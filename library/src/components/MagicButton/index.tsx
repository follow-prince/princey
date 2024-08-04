import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef, memo } from "react";

// Define base styles for the button with specific styles for animations and positioning
const buttonStyles = cva(
  "cursor-pointer font-semibold overflow-hidden relative z-10 border group px-8 py-2",
  {
    variants: {
      color: {
        green: "border-green-500",
      },
    },
    defaultVariants: {
      color: "green",
    },
  }
);

type MagicButtonProps = ComponentProps<"button"> & {
  label?: string;
  color?: "green"; // Can add more colors if needed
};

// Create a memoized component to optimize performance
export const MagicButton = memo(
  forwardRef<HTMLButtonElement, MagicButtonProps>(
    ({ className, label = "Magic!", color = "green", ...props }, ref) => {
      // Combine default styles from CVA with any custom className
      const combinedClassName = cn(buttonStyles({ color }), className);

      return (
        <button ref={ref} className={combinedClassName} {...props}>
          <span className="relative z-10 text-xl text-green-500 duration-500 group-hover:text-white">
            {label}
          </span>
          <span className="absolute top-0 w-full h-full duration-500 -rotate-45 bg-green-500 -left-32 group-hover:rotate-0 group-hover:left-0"></span>
          <span className="absolute top-0 w-full h-full duration-500 -rotate-45 bg-green-500 -right-32 group-hover:rotate-0 group-hover:right-0"></span>
        </button>
      );
    }
  )
);
