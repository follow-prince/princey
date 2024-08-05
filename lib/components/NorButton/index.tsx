import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef, memo } from "react";
import { cn } from "../../utils";

// Define base styles for the new button
const newButtonStyles = cva(
  "bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base cursor-pointer transition",
  {
    variants: {
      bg: {
        default: "bg-[#292929]",
        red: "bg-[#f00]",
        green: "bg-[#0f0]",
        blue: "bg-[#00f]",
        rose: "bg-[#f0f]",
        custom: "bg-[#ff0]",
      },

      hoverBorder: {
        default: "hover:border-[#fff]",
        red: "hover:border-[#f00]",
        green: "hover:border-[#0f0]",
        blue: "hover:border-[#00f]",
        rose: "hover:border-[#f0f]",
        custom: "hover:border-[#ff0]",
      },
    },
    defaultVariants: {
      hoverBorder: "default",
    },
  }
);

type NewButtonProps = ComponentProps<"button"> & {
  hoverBorder?: "default" | "red" | "green" | "blue" | "rose" | "custom";
  label?: string;
  bg: "default" | "red" | "green" | "blue" | "rose" | "custom";
};

// Create a memoized component to optimize performance
export const NorButton = memo(
  forwardRef<HTMLButtonElement, NewButtonProps>(
    (
      { className, bg, hoverBorder = "default", label = "Submit", ...props },
      ref
    ) => {
      // Combine default styles from CVA with any custom className
      const combinedClassName = cn(
        newButtonStyles({ hoverBorder, bg }),
        className
      );

      return (
        <button ref={ref} className={combinedClassName} {...props}>
          {label}
        </button>
      );
    }
  )
);
