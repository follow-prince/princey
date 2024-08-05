import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, memo } from "react";
import { cn } from "../../utils";

// Define base styles and variants for the button
const buttonStyles = cva(
  [
    "z-30 py-4 rounded-md relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-2xl",
  ],
  {
    variants: {
      color: {
        primary: ["bg-rose-400", "text-white", "after:bg-rose-800"],
        secondary: ["bg-gray-400", "text-black", "after:bg-gray-800"],
        tertiary: ["bg-blue-400", "text-white", "after:bg-blue-800"],
        danger: ["bg-red-400", "text-white", "after:bg-red-800"],
        green: ["bg-green-400", "text-white", "after:bg-green-800"],
      },
      size: {
        xsmall: ["px-2", "py-1"],
        small: ["px-4", "py-2"],
        large: ["px-12", "py-6"],
        xlarge: ["px-16", "py-8"],
      },
    },
    defaultVariants: {
      color: "primary",
      size: "small",
    },
  }
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    label?: string; // Allow dynamic button text
  };

// Create a memoized component to optimize performance
export const HoverButton = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, label = "Hover Me", color, size, ...props }, ref) => {
      return (
        <button
          ref={ref}
          className={cn(buttonStyles({ color, size }), className)}
          {...props}
        >
          {label}
        </button>
      );
    }
  )
);
