import React from "react";
import styled from "styled-components";

// Define the component props with limited customization options
interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: React.ReactNode;
  buttonWidth?: string;
  buttonHeight?: string;
  borderColor?: string;
  backgroundColor?: string;
  iconBackgroundColor?: string;
  hoverBackgroundColor?: string;
  activeBackgroundColor?: string;
}

// The IconButton component definition
export const IconButton: React.FC<IconButtonProps> = ({
  text,
  icon,
  buttonWidth = "150px",
  buttonHeight = "40px",
  borderColor = "#34974d",
  backgroundColor = "#3aa856",
  iconBackgroundColor = "#34974d",
  hoverBackgroundColor = "#34974d",
  activeBackgroundColor = "#2e8644",
  ...props
}) => {
  return (
    <StyledButton
      buttonWidth={buttonWidth}
      buttonHeight={buttonHeight}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      iconBackgroundColor={iconBackgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      activeBackgroundColor={activeBackgroundColor}
      {...props}
    >
      <span className="button__text">{text}</span>
      <span className="button__icon">{icon}</span>
    </StyledButton>
  );
};

// Styled-component for additional styling
const StyledButton = styled.button<{
  buttonWidth: string;
  buttonHeight: string;
  borderColor: string;
  backgroundColor: string;
  iconBackgroundColor: string;
  hoverBackgroundColor: string;
  activeBackgroundColor: string;
}>`
  position: relative;
  width: ${({ buttonWidth }) => buttonWidth};
  height: ${({ buttonHeight }) => buttonHeight};
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  overflow: hidden;
  transition: all 0.3s;

  .button__text {
    transform: translateX(30px);
    color: #fff;
    font-weight: 600;
    transition: all 0.3s;
  }

  .button__icon {
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    background-color: ${({ iconBackgroundColor }) => iconBackgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  .button__icon svg {
    width: 30px;
    stroke: #fff;
  }

  &:hover {
    background: ${({ hoverBackgroundColor }) => hoverBackgroundColor};

    .button__text {
      color: transparent;
    }

    .button__icon {
      width: 148px;
      transform: translateX(0);
    }
  }

  &:active {
    background-color: ${({ activeBackgroundColor }) => activeBackgroundColor};
    border: 1px solid ${({ activeBackgroundColor }) => activeBackgroundColor};

    .button__icon {
      background-color: ${({ activeBackgroundColor }) => activeBackgroundColor};
    }
  }
`;
