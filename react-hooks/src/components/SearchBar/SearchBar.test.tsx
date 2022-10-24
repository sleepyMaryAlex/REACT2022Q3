import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('render input in search bar component', () => {
  const onSubmit = jest.fn();
  const setQuery = jest.fn();
  render(<SearchBar onSubmit={onSubmit} query='rick' setQuery={setQuery} />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByText(/i want to find/i)).toBeInTheDocument();
});
