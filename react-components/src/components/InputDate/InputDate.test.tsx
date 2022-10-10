import React from 'react';
import { render, screen } from '@testing-library/react';
import InputDate from './InputDate';

test('should contain label with text', () => {
  const handleDateChange = jest.fn();
  render(<InputDate handleDateChange={handleDateChange} showDateMessage={true} />);
  expect(screen.getByLabelText(/DATE OF CREATION/i)).toBeInTheDocument();
});
