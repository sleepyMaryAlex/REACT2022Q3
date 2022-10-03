import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('render input in search bar component', () => {
  const handleChange = jest.fn();
  render(<SearchBar value='cake' handleChange={handleChange} />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('...')).toBeInTheDocument();
  expect(screen.getByText(/i want to make/i)).toBeInTheDocument();
});
