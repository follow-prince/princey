// src/button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => props.bgColor || 'gray'};
  color: ${(props) => props.color || 'white'};
  &:hover {
    opacity: 1.8;
  }
`;

const Button = ({ label, onClick, style, className, bgColor, color }) => {
  return (
    <StyledButton
      onClick={onClick}
      style={style}
      className={className}
      bgColor={bgColor}
      color={color}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  style: {},
  className: '',
  bgColor: 'gray',
  color: 'white',
};

export default Button;
