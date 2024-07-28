// src/Testing.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Testing from './Testing';

test('renders Testing with correct text', () => {
  render(<Testing>Click me</Testing>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
