import React from "react";
import styled from "styled-components";

// Define the component props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  onClick?: () => void;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  hoverBackgroundColor?: string;
  hoverBorderColor?: string;
  hoverTextColor?: string;
  activeBackgroundColor?: string;
  activeBorderColor?: string;
  activeTextColor?: string;
  fontSize?: string;
  height?: string;
  padding?: string;
}

// The GoldenButton component definition
export const GoldenButton: React.FC<ButtonProps> = ({
  text,
  className = "",
  backgroundColor = "#a54e07",
  borderColor = "#a55d07",
  textColor = "rgb(120, 50, 5)",
  hoverBackgroundColor = "#b47e11",
  hoverBorderColor = "rgba(165, 93, 7, 0.6)",
  hoverTextColor = "rgba(120, 50, 5, 0.8)",
  activeBackgroundColor = "#a54e07",
  activeBorderColor = "#b17d10",
  activeTextColor = "rgba(120, 50, 5, 0.8)",
  fontSize = "1em",
  height = "2.75em",
  padding = "0 1em",
  ...props
}) => {
  return (
    <StyledButton
      className={className}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={textColor}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverBorderColor={hoverBorderColor}
      hoverTextColor={hoverTextColor}
      activeBackgroundColor={activeBackgroundColor}
      activeBorderColor={activeBorderColor}
      activeTextColor={activeTextColor}
      fontSize={fontSize}
      height={height}
      padding={padding}
      {...props}
    >
      <span className="golden-text">{text}</span>
    </StyledButton>
  );
};

// Styled-component for additional styling
const StyledButton = styled.button<{
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  hoverBackgroundColor: string;
  hoverBorderColor: string;
  hoverTextColor: string;
  activeBackgroundColor: string;
  activeBorderColor: string;
  activeTextColor: string;
  fontSize: string;
  height: string;
  padding: string;
}>`
  touch-action: manipulation;
  display: inline-block;
  outline: none;
  font-family: inherit;
  font-size: ${({ fontSize }) => fontSize};
  box-sizing: border-box;
  border: none;
  border-radius: 0.3em;
  height: ${({ height }) => height};
  line-height: 2.5em;
  text-transform: uppercase;
  padding: ${({ padding }) => padding};
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(110, 80, 20, 0.4),
    inset 0 -2px 5px 1px rgba(139, 66, 8, 1),
    inset 0 -1px 1px 3px rgba(250, 227, 133, 1);
  background-image: linear-gradient(
    160deg,
    ${({ backgroundColor }) => backgroundColor},
    ${({ hoverBackgroundColor }) => hoverBackgroundColor},
    #fef1a2,
    ${({ borderColor }) => borderColor},
    ${({ backgroundColor }) => backgroundColor}
  );
  border: 1px solid ${({ borderColor }) => borderColor};
  color: ${({ textColor }) => textColor};
  text-shadow: 0 2px 2px rgba(250, 227, 133, 1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-size: 100% 100%;
  background-position: center;

  &:focus,
  &:hover {
    background-size: 150% 150%;
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23),
      inset 0 -2px 5px 1px ${({ hoverBackgroundColor }) => hoverBackgroundColor},
      inset 0 -1px 1px 3px rgba(250, 227, 133, 1);
    border: 1px solid ${({ hoverBorderColor }) => hoverBorderColor};
    color: ${({ hoverTextColor }) => hoverTextColor};
  }

  &:active {
    box-shadow:
      0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(110, 80, 20, 0.4),
      inset 0 -2px 5px 1px ${({ activeBackgroundColor }) => activeBackgroundColor},
      inset 0 -1px 1px 3px rgba(250, 227, 133, 1);
    border: 1px solid ${({ activeBorderColor }) => activeBorderColor};
    color: ${({ activeTextColor }) => activeTextColor};
  }
`;
