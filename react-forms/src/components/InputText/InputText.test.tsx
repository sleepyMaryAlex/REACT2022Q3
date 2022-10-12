import React from 'react';
import { render, screen } from '@testing-library/react';
import InputText from './InputText';

test('should display message', () => {
  const handleTitleChange = jest.fn();
  render(<InputText handleTitleChange={handleTitleChange} showTitleMessage={true} />);
  expect(screen.getByText(/This field is required/i)).toBeInTheDocument();
});
