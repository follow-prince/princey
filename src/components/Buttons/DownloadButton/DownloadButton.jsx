import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for animation
const docsAnimation = keyframes`
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-15%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const Button = styled.button`
  position: relative;
  border-width: 0;
  color: ${(props) => props.textColor || "white"};
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: ${(props) => props.fontWeight || "600"};
  border-radius: ${(props) => props.borderRadius || "4px"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${(props) => props.padding || "10px"};
  min-height: ${(props) => props.minHeight || "40px"};
  background-color: ${(props) => props.backgroundColor || "#242a35"};
  border: solid 1px ${(props) => props.borderColor || "#e8e8e82d"};
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;

  &:hover {
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .docs {
    z-index: 10000;

  }

  .download {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 90%;
    margin: 0 auto;
    z-index: -1;
    border-radius: ${(props) => props.borderRadius || "4px"};
    transform: translateY(0%);
    background-color: ${(props) => props.downloadBackgroundColor || "#01e056"};
    border: solid 1px ${(props) => props.downloadBorderColor || "#01e0572d"};
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);

    svg polyline,
    svg line {
      animation: ${docsAnimation} 1s infinite;
    }
  }

  &:hover .download {
    transform: translateY(100%);
  }
`;

// SVG Icons
const DocsIcon = () => (
  <svg
    className="css-i6dzq1"
    strokeLinejoin="round"
    strokeLinecap="round"
    fill="none"
    strokeWidth="2"
    stroke="currentColor"
    height="20"
    width="20"
    viewBox="0 0 24 24"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line y2="13" x2="8" y1="13" x1="16"></line>
    <line y2="17" x2="8" y1="17" x1="16"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const DownloadIcon = () => (
  <svg
    className="css-i6dzq1"
    strokeLinejoin="round"
    strokeLinecap="round"
    fill="none"
    strokeWidth="2"
    stroke="currentColor"
    height="24"
    width="24"
    viewBox="0 0 24 24"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line y2="3" x2="12" y1="15" x1="12"></line>
  </svg>
);

// Button Component
const DownloadButton = ({
  label = "Docs",
  icon = <DocsIcon />,
  downloadIcon = <DownloadIcon />,
  backgroundColor,
  textColor,
  borderColor,
  downloadBackgroundColor,
  downloadBorderColor,
  fontSize,
  fontWeight,
  borderRadius,
  padding,
  minHeight,
  onClick,
}) => (
  <Button
    backgroundColor={backgroundColor}
    textColor={textColor}
    borderColor={borderColor}
    downloadBackgroundColor={downloadBackgroundColor}
    downloadBorderColor={downloadBorderColor}
    fontSize={fontSize}
    fontWeight={fontWeight}
    borderRadius={borderRadius}
    padding={padding}
    minHeight={minHeight}
    onClick={onClick}
  >
    <div className="docs">
      {icon} {label}
    </div>
    <div className="download" onClick={onClick}>
      {downloadIcon}
    </div>
  </Button>
);

export default DownloadButton;
