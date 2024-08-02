import React from "react";
import styled from "styled-components";

// Define the component props
interface BasicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  onClick?: () => void;
  backgroundColor?: string;
  borderColor?: string;
  hoverBackgroundColor?: string;
  hoverBorderColor?: string;
  hoverTextColor?: string;
}

// The BasicButton component definition
export const GlowButton: React.FC<BasicButtonProps> = ({
  text,
  className = "",
  backgroundColor = "transparent",
  borderColor = "#ffffff80",
  hoverBackgroundColor = "#008cff",
  hoverBorderColor = "#008cff",
  hoverTextColor = "#ffffff",
  ...props
}) => {
  return (
    <StyledButton
      className={className}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverBorderColor={hoverBorderColor}
      hoverTextColor={hoverTextColor}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

// Styled-component for additional styling
const StyledButton = styled.button<{
  backgroundColor: string;
  borderColor: string;
  hoverBackgroundColor: string;
  hoverBorderColor: string;
  hoverTextColor: string;
}>`
  padding: 10px 20px;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 500;
  color: ${({ hoverTextColor }) => hoverTextColor};
  text-shadow: none;
  background: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  box-shadow: transparent;
  border: 1px solid ${({ borderColor }) => borderColor};
  transition: 0.5s ease;
  user-select: none;

  &:hover,
  &:focus {
    color: ${({ hoverTextColor }) => hoverTextColor};
    background: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
    border: 1px solid ${({ hoverBorderColor }) => hoverBorderColor};
    text-shadow:
      0 0 5px #ffffff,
      0 0 10px #ffffff,
      0 0 20px #ffffff;
    box-shadow:
      0 0 5px ${({ hoverBackgroundColor }) => hoverBackgroundColor},
      0 0 20px ${({ hoverBackgroundColor }) => hoverBackgroundColor},
      0 0 50px ${({ hoverBackgroundColor }) => hoverBackgroundColor},
      0 0 100px ${({ hoverBackgroundColor }) => hoverBackgroundColor};
  }
`;
