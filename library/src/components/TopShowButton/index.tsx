import React from "react";
import styled from "styled-components";

// Define the component props with customization options
interface MagicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  backgroundColor?: string;
  borderColor?: string;
  hoverColor?: string;
  hoverTextColor?: string;
  beforeTextColor?: string;
  afterHoverText?: string;
  beforeHoverText?: string;
  activeScale?: number;
  buttonWidth?: string;
  buttonHeight?: string;
}

// The MagicButton component definition
export const TopShowButton: React.FC<MagicButtonProps> = ({
  className = "",
  backgroundColor = "#f5ae51",
  borderColor = "#f39923",
  hoverColor = "#f19c2b",
  hoverTextColor = "#ffffff",
  beforeHoverText = "Hover",
  afterHoverText = "Click",
  activeScale = 0.95,
  buttonWidth = "135px",
  beforeTextColor = "#ffffff",
  buttonHeight = "47px",
  ...props
}) => {
  return (
    <ButtonContainer
      className={className}
      buttonWidth={buttonWidth}
      buttonHeight={buttonHeight}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      hoverColor={hoverColor}
      hoverTextColor={hoverTextColor}
      beforeHoverText={beforeHoverText}
      beforeTextColor={beforeTextColor}
      afterHoverText={afterHoverText}
      activeScale={activeScale}
    >
      <div className="hover bt-1"></div>
      <div className="hover bt-2"></div>
      <div className="hover bt-3"></div>
      <div className="hover bt-4"></div>
      <div className="hover bt-5"></div>
      <div className="hover bt-6"></div>
      <button {...props}></button>
    </ButtonContainer>
  );
};

// Styled-component for the button container
const ButtonContainer = styled.div<{
  buttonWidth: string;
  buttonHeight: string;
  backgroundColor: string;
  borderColor: string;
  hoverColor: string;
  hoverTextColor: string;
  activeScale: number;
  beforeHoverText: string;
  afterHoverText: string;
  beforeTextColor: string;
}>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "bt-1 bt-2 bt-3" "bt-4 bt-5 bt-6";
  position: relative;
  perspective: 800;
  padding: 0;
  width: ${({ buttonWidth }) => buttonWidth};
  height: ${({ buttonHeight }) => buttonHeight};
  transition: all 0.3s ease-in-out;

  &:active {
    transform: scale(${({ activeScale }) => activeScale});
  }

  .hover {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 200;
  }

  .bt-1 {
    grid-area: bt-1;
  }

  .bt-2 {
    grid-area: bt-2;
  }

  .bt-3 {
    grid-area: bt-3;
  }

  .bt-4 {
    grid-area: bt-4;
  }

  .bt-5 {
    grid-area: bt-5;
  }

  .bt-6 {
    grid-area: bt-6;
  }

  .bt-1:hover ~ button {
    transform: rotateX(15deg) rotateY(-15deg) rotateZ(0deg);
    box-shadow: -2px -2px #18181888;
  }

  .bt-1:hover ~ button::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: -2px -2px #18181888;
  }

  .bt-3:hover ~ button {
    transform: rotateX(15deg) rotateY(15deg) rotateZ(0deg);
    box-shadow: 2px -2px #18181888;
  }

  .bt-3:hover ~ button::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: 2px -2px #18181888;
  }

  .bt-4:hover ~ button {
    transform: rotateX(-15deg) rotateY(-15deg) rotateZ(0deg);
    box-shadow: -2px 2px #18181888;
  }

  .bt-4:hover ~ button::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: -2px 2px #18181888;
  }

  .bt-6:hover ~ button {
    transform: rotateX(-15deg) rotateY(15deg) rotateZ(0deg);
    box-shadow: 2px 2px #18181888;
  }

  .bt-6:hover ~ button::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: 2px 2px #18181888;
  }

  .hover:hover ~ button::before {
    background: transparent;
  }

  .hover:hover ~ button::after {
    content: " ${({ afterHoverText }) => afterHoverText}";
    top: -150%;
    transform: translate(-50%, 0);
    font-size: 34px;
    color: ${({ hoverTextColor }) => hoverTextColor};
  }

  button {
    position: absolute;
    padding: 0;
    width: ${({ buttonWidth }) => buttonWidth};
    height: ${({ buttonHeight }) => buttonHeight};
    background: transparent;
    font-size: 17px;
    font-weight: 900;
    border: 3px solid ${({ borderColor }) => borderColor};
    border-radius: 12px;
    transition: all 0.3s ease-in-out;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: ${({ buttonWidth }) => buttonWidth};
      height: ${({ buttonHeight }) => buttonHeight};
      background-color: ${({ backgroundColor }) => backgroundColor};
      border-radius: 12px;
      transition: all 0.3s ease-in-out;
      z-index: -1;
    }

    &::after {
      content: " ${({ beforeHoverText }) => beforeHoverText}";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: ${({ buttonWidth }) => buttonWidth};
      height: ${({ buttonHeight }) => buttonHeight};
      background-color: transparent;
      font-size: 17px;
      font-weight: 900;
      line-height: ${({ buttonHeight }) => buttonHeight};
      color: ${({ beforeTextColor }) => beforeTextColor};
      border: none;
      border-radius: 12px;
      transition: all 0.3s ease-in-out;
      z-index: 2;
    }
  }

  @keyframes shake {
    0% {
      left: 45%;
    }

    25% {
      left: 54%;
    }

    50% {
      left: 48%;
    }

    75% {
      left: 52%;
    }

    100% {
      left: 50%;
    }
  }
`;
