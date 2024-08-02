import React from "react";
import styled from "styled-components";

// Define the component props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  onClick?: () => void;
  padding?: string;
  borderColor?: string;
  fontSize?: string;
  textColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  boxShadow?: string;
}

// The CustomButton component definition
export const ShopSliderButton: React.FC<ButtonProps> = ({
  text,
  className = "",
  padding = "1.1em 2em",
  borderColor = "#fff",
  fontSize = "15px",
  textColor = "#131313",
  backgroundColor = "#ecd448",
  hoverBackgroundColor = "#4cc9f0",
  hoverTextColor = "#fff",
  boxShadow = "0 2px 0 2px #000",
  ...props
}) => {
  return (
    <StyledButton
      className={className}
      padding={padding}
      borderColor={borderColor}
      fontSize={fontSize}
      textColor={textColor}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverTextColor={hoverTextColor}
      boxShadow={boxShadow}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

// Styled-component for additional styling
const StyledButton = styled.button<{
  padding: string;
  borderColor: string;
  fontSize: string;
  textColor: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  hoverTextColor: string;
  boxShadow: string;
}>`
  padding: ${({ padding }) => padding};
  background: none;
  border: 2px solid ${({ borderColor }) => borderColor};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ textColor }) => textColor};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  border-radius: 12px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-weight: bolder;
  box-shadow: ${({ boxShadow }) => boxShadow};

  &:before {
    content: "";
    position: absolute;
    width: 100px;
    height: 120%;
    background-color: #ff6700;
    top: 50%;
    transform: skewX(30deg) translate(-150%, -50%);
    transition: all 0.5s;
  }

  &:hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
    color: ${({ hoverTextColor }) => hoverTextColor};
    box-shadow: 0 2px 0 2px #0d3b66;
  }

  &:hover::before {
    transform: skewX(30deg) translate(150%, -50%);
    transition-delay: 0.1s;
  }

  &:active {
    transform: scale(0.9);
  }
`;
