import React from "react";
import styled from "styled-components";

// Define the component props with limited customization
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  onClick?: () => void;
  color?: string; // Text color
  borderColor?: string; // Border color
  backgroundColor?: string; // Background color of the hover effect
}

// The CustomButton component definition
export const GetTouchButton: React.FC<ButtonProps> = ({
  text,
  className = "",
  color = "black",
  borderColor = "#4f4f4f",
  backgroundColor = "#39bda7",
  ...props
}) => {
  return (
    <StyledButton
      className={className}
      color={color}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

// Styled-component for additional styling
const StyledButton = styled.button<{
  color: string;
  borderColor: string;
  backgroundColor: string;
}>`
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 4px;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  font-size: 19px;
  cursor: pointer;
  color: ${({ color }) => color};
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:hover {
    color: #ffffff;
    border: 1px solid ${({ backgroundColor }) => backgroundColor};
  }

  &:hover:before {
    top: -35%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  &:hover:after {
    top: -45%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`;
