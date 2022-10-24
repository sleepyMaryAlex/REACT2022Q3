import React from 'react';
import { render, screen } from '@testing-library/react';
import InputDate from './InputDate';

test('should contain label with text', () => {
  const setDate = jest.fn();
  render(<InputDate setDate={setDate} date="2022-10-10" displayErrorMessage={false} />);
  expect(screen.getByLabelText(/Date of creation/i)).toBeInTheDocument();
});
