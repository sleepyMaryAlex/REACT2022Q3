import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Select from './Select';

test('check how many times an event fires', () => {
  const setStatus = jest.fn();
  render(<Select setStatus={setStatus} status="Alive" displayErrorMessage={false} />);
  const combobox = screen.getByRole('combobox');
  fireEvent.change(combobox);
  expect(setStatus).toHaveBeenCalledTimes(1);
});
