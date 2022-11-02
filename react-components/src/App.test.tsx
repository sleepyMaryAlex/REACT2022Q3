import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should contain value from local storage in search input', () => {
  const testString = 'cake';
  localStorage.setItem('value', testString);
  render(<App />);
  expect(screen.getByDisplayValue(testString)).toBeInTheDocument();
});
