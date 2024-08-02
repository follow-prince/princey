import React from "react";
import styled from "styled-components";

// Define the component props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string;
  iconSize?: string;
  iconColor?: string;
}

// The CustomButton component definition
export const GetStartButton: React.FC<ButtonProps> = ({
  text,
  backgroundColor = "#a370f0",
  textColor = "white",
  fontSize = "17px",
  iconSize = "2.2em",
  className = "",
  iconColor = "#7b52b9",
  ...props
}) => {
  return (
    <StyledButton
      className={className}
      backgroundColor={backgroundColor}
      textColor={textColor}
      fontSize={fontSize}
      iconSize={iconSize}
      iconColor={iconColor}
      {...props}
    >
      {text}
      <div className="icon">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </StyledButton>
  );
};

// Styled-component for additional styling
const StyledButton = styled.button<{
  backgroundColor: string;
  textColor: string;
  fontSize: string;
  iconSize: string;
  iconColor: string;
}>`
  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em ${({ iconColor }) => iconColor};
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
  cursor: pointer;

  .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({ iconSize }) => iconSize};
    width: ${({ iconSize }) => iconSize};
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em ${({ iconColor }) => iconColor};
    right: 0.3em;
    transition: all 0.3s;
  }

  &:hover .icon {
    width: calc(100% - 0.6em);
  }

  .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: ${({ iconColor }) => iconColor};
  }

  &:hover .icon svg {
    transform: translateX(0.1em);
  }

  &:active .icon {
    transform: scale(0.95);
  }
`;
