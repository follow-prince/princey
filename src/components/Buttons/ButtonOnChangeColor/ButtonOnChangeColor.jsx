import React from "react";
import styled from "styled-components";




const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #ff5252;
  border: 2px solid #000;
  border-radius: ${(props) => props.borderRadius || "10px"};
  box-shadow: 5px 5px 0px #000;
  transition: all 0.3s ease;
  cursor: pointer;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};

  &:hover {
    background-color: #fff;
    color: #ff5252;
    border: 2px solid #ff5252;
    box-shadow: 5px 5px 0px #ff5252;
  }

  &:active {
    background-color: #fcf414;
    box-shadow: none;
    transform: translateY(4px);
  }
`;

const ButtonOnChangeColor = ({
  type,
  borderRadius,
  width,
  height,
  children,
  onClick,
  ...props
}) => (
  <Button
    type={type}
    borderRadius={borderRadius}
    width={width}
    height={height}
    onClick={onClick}
    {...props}
  >
    {children}
  </Button>
);

export default ButtonOnChangeColor;
