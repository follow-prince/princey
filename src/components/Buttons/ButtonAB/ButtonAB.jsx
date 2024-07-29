import React from "react";
import styled from "styled-components";
import { FaBeer } from "react-icons/fa";

const buttonStyles = {
  primary: {
    primaryBgBefore: "#1e90ff",
    primaryBgAfter: "#21dc62",
  },
  secondary: {
    primaryBgBefore: "#ff0000",
    primaryBgAfter: "#21dc62",
  },
  danger: {
    primaryBgBefore: "#ff0000",
    primaryBgAfter: "#ff0000",
  },
};

const Button = styled.button`
  outline: 0;
  padding: 0;
  border-radius: ${(props) => props.borderRadius || "3px"};
  border: 1px solid ${(props) => buttonStyles[props.type]?.primaryBgBefore || buttonStyles.primary.primaryBgBefore};
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "150px"};
  max-width: 150px;
  height: ${(props) => props.height || "40px"};
  box-shadow: 1 0 0 0 rgba(30, 143, 255, 0.35);
  overflow: hidden;
  transition: 0.6s cubic-bezier(0.16, 0.7, 0.3, 1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0.625em 5em 0 rgba(33, 220, 98, 0.35);
    div {
      transform: translateY(-100%);
    }
  }

  &:active {
    transform: scale(0.95);
  }

  div:nth-child(1) {
    background-color: ${(props) => buttonStyles[props.type]?.primaryBgBefore || buttonStyles.primary.primaryBgBefore};
  }
  
  div:nth-child(2) {
    background-color: ${(props) => buttonStyles[props.type]?.primaryBgAfter || buttonStyles.primary.primaryBgAfter};
  }
`;

const ButtonDiv = styled.div`
  transform: translateY(0px);
  width: 100%;
  height: 100%;
  transition: 0.6s cubic-bezier(0.19, 1.5, 0.6, 1.1);
`;

const ButtonSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ButtonP = styled.p`
  font-family: ${(props) => props.fontFamily || "Istok Web, sans-serif"};
  letter-spacing: ${(props) => props.letterSpacing || "1px"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: ${(props) => props.color || "white"};
`;

const ButtonAB = ({
  type = "primary",
  width,
  height,
  fontSize,
  fontFamily,
  fontWeight,
  borderRadius,
  color,
  style,
  onClick,
  TextBefore = "Click",
  BeforeIcon = <FaBeer />,
  TextAfter = "Clicked",
  AfterIcon = <FaBeer />,
}) => (
  <Button
    type={type}
    width={width}
    height={height}
    fontSize={fontSize}
    fontFamily={fontFamily}
    fontWeight={fontWeight}
    borderRadius={borderRadius}
    color={color}
    style={style}
    onClick={onClick}
  >
    <ButtonDiv>
      <ButtonSpan>
        <ButtonP>{TextBefore}</ButtonP>
        {BeforeIcon && <ButtonP>{BeforeIcon}</ButtonP>}
      </ButtonSpan>
    </ButtonDiv>
    <ButtonDiv>
      <ButtonSpan>
        <ButtonP>{TextAfter}</ButtonP>
        {AfterIcon && <ButtonP>{AfterIcon}</ButtonP>}
      </ButtonSpan>
    </ButtonDiv>
  </Button>
);

export default ButtonAB;
