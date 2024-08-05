import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef, memo, ReactNode } from "react";
import { cn } from "../../utils";

// Define base styles for the button with variants if needed
const animatedButtonStyles = cva(
  "group w-8 hover:w-44 h-8 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center  pr-6",
  {
    defaultVariants: {
      size: "small",
      color: "primary",
    },
    variants: {
      size: {
        small: "w-8 h-8",
        medium: "w-12 h-12",
        large: "w-16 h-16",
      },
      color: {
        primary:
          "bg-sky-700 hover:bg-sky-600 text-neutral-50 before:bg-sky-700 before:hover:bg-sky-600",
        secondary:
          "bg-sky-200 hover:bg-sky-100 text-sky-700 before:bg-sky-200 before:hover:bg-sky-100",
        Red: "bg-red-700 hover:bg-red-600 text-neutral-50 before:bg-red-700 before:hover:bg-red-600",
      },
    },
  }
);

const spanStyles =
  "origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all";

type AnimatedButtonProps = ComponentProps<"button"> & {
  label?: string;
  icon?: ReactNode;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "Red";
  link?: string;
};

// Create a memoized component to optimize performance
export const AnimatedButton = memo(
  forwardRef<HTMLButtonElement, AnimatedButtonProps>(
    (
      { className, color, size, link, label = "Your Name", icon, ...props },
      ref
    ) => {
      return (
        <button
          ref={ref}
          className={cn(animatedButtonStyles({ color, size }), className)}
          {...props}
          title={label}
        >
          {icon && <span className="">{icon}</span>}
          <a href={link}>
            <span className={spanStyles}>{label}</span>
          </a>
        </button>
      );
    }
  )
);
