import React from "react";
import styled, { css } from "styled-components";
import { FaBeer } from "react-icons/fa";

const buttonStyles = {
  primary: {
    background: "#0f988e",
    border: "1px solid #0f988e",
  },
  secondary: {
    background: "#ffa500",
    border: "1px solid #ffa500",
  },
  tertiary: {
    background: "#0000ff",
    border: "1px solid #0000ff",
  },
  danger: {
    background: "#ff0000",
    border: "1px solid #ff0000",
  },
};

const getButtonStyle = (type) => css`
  background: ${buttonStyles[type]?.background ||
  buttonStyles.primary.background};
  border: ${buttonStyles[type]?.border || buttonStyles.primary.border};
`;

const ButtonWithIcon = styled.button`
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.fontFamily || "Istok Web, sans-serif"};
  letter-spacing: ${(props) => props.letterSpacing || "1px"};
  padding: ${(props) => props.padding || "0 12px"};
  text-align: center;
  width: ${(props) => props.width || "120px"};
  height: ${(props) => props.height || "40px"};
  font-size: ${(props) => props.fontSize || "14px"};
  text-transform: ${(props) => props.textTransform || "uppercase"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  border-radius: ${(props) => props.borderRadius || "3px"};
  outline: none;
  user-select: none;
  cursor: pointer;
  transform: translateY(0px);
  position: relative;
  box-shadow:
    inset 0 30px 30px -15px rgba(255, 255, 255, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.3),
    inset 0 1px 20px rgba(0, 0, 0, 0),
    0 3px 0
      ${(props) =>
        buttonStyles[props.type]?.background ||
        buttonStyles.primary.background},
    0 3px 2px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.color || "white"};
  text-shadow: ${(props) => props.textShadow || "0 1px 0 rgba(0, 0, 0, 0.3)"};
  transition: ${(props) => props.transition || "150ms all ease-in-out"};

  &:active {
    transform: translateY(3px);
    box-shadow:
      inset 0 16px 2px -15px rgba(0, 0, 0, 0),
      inset 0 0 0 1px rgba(255, 255, 255, 0.15),
      inset 0 1px 20px rgba(0, 0, 0, 0.1),
      0 0 0
        ${(props) =>
          buttonStyles[props.type]?.background ||
          buttonStyles.primary.background},
      0 0 0 2px rgba(255, 255, 255, 0.5),
      0 0 0 rgba(0, 0, 0, 0),
      0 0 0 rgba(0, 0, 0, 0);
  }

  &:hover .text {
    transform: translateX(600%);
  }

  &:hover .icon {
    transform: translate(23px);
  }

  ${(props) => getButtonStyle(props.type)}
  ${(props) =>
    props.style &&
    css`
      ${props.style}
    `}
`;

const Icon = styled.span`
  margin-right: 0px;
  padding-top: 17px;
  width: 30px;
  height: 30px;
  transition: all 0.8s ease-in-out;
`;

const Text = styled.span`
  transition: all 0.5s ease-in-out;
`;

const Button = ({
  label = "Click Me",
  icon = <FaBeer />,
  type = "primary",
  width,
  height,
  fontSize,
  fontFamily,
  letterSpacing,
  textTransform,
  fontWeight,
  borderRadius,
  color,
  textShadow,
  transition,
  padding,
  style,
  onClick,
}) => (
  <ButtonWithIcon
    type={type}
    width={width}
    height={height}
    fontSize={fontSize}
    fontFamily={fontFamily}
    letterSpacing={letterSpacing}
    textTransform={textTransform}
    fontWeight={fontWeight}
    borderRadius={borderRadius}
    color={color}
    textShadow={textShadow}
    transition={transition}
    padding={padding}
    style={style}
    onClick={onClick}
  >
    {icon && <Icon className="icon">{icon}</Icon>}
    <Text className="text">{label}</Text>
  </ButtonWithIcon>
);

export default Button;
