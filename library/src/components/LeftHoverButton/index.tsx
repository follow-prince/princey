import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

// Define base styles for the button with variants
const buttonStyles = cva(
  "bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group",
  {
    variants: {
      color: {
        default: "bg-white text-black",
        // Add more color variants if needed
        primary: "bg-blue-400 text-white",
        secondary: "bg-gray-400 text-black",
        tertiary: "bg-blue-400 text-white",
        danger: "bg-red-400 text-white",
        green: "bg-green-400 text-white",
      },
      size: {
        xsmall: "px-2 py-1",
        small: "px-4 py-2",
        medium: "px-8 py-4",
        large: "px-12 py-6",
        xlarge: "px-16 py-8",
      },
    },
    defaultVariants: {
      color: "default",
      size: "small",
    },
  }
);

const hoverStyles = cva(
  "bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500",

  {
    variants: {
      iconBg: {
        default: "bg-white",
        primary: "bg-blue-400",
        secondary: "bg-gray-400",
        tertiary: "bg-blue-400",
        danger: "bg-red-400",
        green: "bg-green-400",
      },
    },
    defaultVariants: {
      iconBg: "default",
    },
  }
);

const iconStyles = "text-black";

type ButtonProps = ComponentProps<"button"> & {
  label?: string;
  color?: "default" | "primary" | "secondary" | "tertiary" | "danger" | "green";
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  iconBg?:
    | "default"
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "green";
};

// Create the button component
export const LeftHoverButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      color = "primary",
      size = "medium",
      iconBg = "default",
      label = "Go Back",
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
        <div className={hoverStyles()}>
          <svg
            className={iconStyles}
            width="25px"
            height="25px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#000000"
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            ></path>
            <path
              fill="#000000"
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            ></path>
          </svg>
        </div>
        <p className="translate-x-2">{label}</p>
      </button>
    );
  }
);
