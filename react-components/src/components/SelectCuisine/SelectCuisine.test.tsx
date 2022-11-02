import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SelectCuisine from './SelectCuisine';

test('check how many times an event fires', () => {
  const handleCuisineChange = jest.fn();
  render(<SelectCuisine handleCuisineChange={handleCuisineChange} showCuisineMessage={false} />);
  const select = screen.getAllByRole('combobox');
  fireEvent.change(select[0]);
  expect(handleCuisineChange).toHaveBeenCalledTimes(1);
});
