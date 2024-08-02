import React from "react";
import styled from "styled-components";

// Define the component props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  links: { href: string; icon: React.ReactNode }[];
  variant?: "primary" | "secondary";
}

// The ButtonWithLinks component definition
export const ButtonWithLinks: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  links,
  className = "",
  ...props
}) => {
  return (
    <StyledButton variant={variant} className={className} {...props}>
      <span>{text}</span>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </StyledButton>
  );
};

// Styled-component for additional styling
const StyledButton = styled.button<{ variant: "primary" | "secondary" }>`
  --btn-color: ${(props) =>
    props.variant === "primary" ? "#275efe" : "#f76c6c"};
  position: relative;
  padding: 16px 32px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: white;
  background: none;
  border: none;
  outline: none;
  overflow: hidden;
  cursor: pointer;
  filter: drop-shadow(0 2px 8px rgba(39, 94, 254, 0.32));
  transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: var(--btn-color);
    border-radius: 24px;
    transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  span {
    display: inline-flex;
    vertical-align: middle;
    transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  ul {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    transform: translateY(-50%);
  }

  ul li {
    flex: 1;
  }

  ul li a {
    display: inline-flex;
    vertical-align: middle;
    transform: translateY(55px);
    transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  ul li a:hover {
    opacity: 0.5;
  }

  &:hover::before {
    transform: scale(1.2);
  }

  &:hover span {
    transform: translateY(-55px);
  }

  &:hover ul li a {
    transform: translateY(0);
  }

  &:hover ul li:nth-child(1) a {
    transition-delay: 0.15s;
  }

  &:hover ul li:nth-child(2) a {
    transition-delay: 0.2s;
  }

  &:hover ul li:nth-child(3) a {
    transition-delay: 0.25s;
  }
`;
