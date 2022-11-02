import React from 'react';
import { render, screen } from '@testing-library/react';
import InputDate from './InputDate';

test('should contain label with text', () => {
  const dispatch = jest.fn();
  render(<InputDate dispatch={dispatch} date="2022-10-10" displayErrorMessage={false} />);
  expect(screen.getByLabelText(/Date of creation/i)).toBeInTheDocument();
});
