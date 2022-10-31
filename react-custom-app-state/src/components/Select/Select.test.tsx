import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Select from './Select';

test('check how many times an event fires', () => {
  const dispatch = jest.fn();
  render(<Select dispatch={dispatch} status="Alive" displayErrorMessage={false} />);
  const combobox = screen.getByRole('combobox');
  fireEvent.change(combobox);
  expect(dispatch).toHaveBeenCalledTimes(1);
});
