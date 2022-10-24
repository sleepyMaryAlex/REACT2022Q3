import React from 'react';
import { render, screen } from '@testing-library/react';
import InputText from './InputText';

test('should display message', () => {
  const setName = jest.fn();
  render(<InputText name='' setName={setName} displayErrorMessage={true} />);
  expect(screen.getByText(/This field is required/i)).toBeInTheDocument();
});
