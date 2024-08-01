import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import styled from "styled-components";

// Define button styles using class-variance-authority
const buttonStyles = cva(
  "w-full rounded-md font-semibold focus:outline-none disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-500 text-white",
        danger: "bg-red-500 text-white",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        xl: "px-8 py-4 text-xl",
        xxl: "px-10 py-5 text-2xl",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  }
);

// Define the component props, including VariantProps from cva
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  text: string;
}

// The PressButton component definition
export const PressButton: React.FC<ButtonProps> = ({
  text,
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <StyledButton
      className={`${buttonStyles({ variant, size })} ${className}`}
      {...props}
    >
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">{text}</span>
    </StyledButton>
  );
};

// Styled-components for additional styling
const StyledButton = styled.button`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  touch-action: manipulation;

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(
      to left,
      hsl(340deg 100% 16%) 0%,
      hsl(340deg 100% 32%) 8%,
      hsl(340deg 100% 32%) 92%,
      hsl(340deg 100% 16%) 100%
    );
  }

  .front {
    display: block;
    position: relative;
    padding: 12px 27px;
    border-radius: 12px;
    font-size: 1.1rem;
    color: white;
    background: hsl(345deg 100% 47%);
    will-change: transform;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  &:hover {
    filter: brightness(110%);
  }

  &:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  &:hover .shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
