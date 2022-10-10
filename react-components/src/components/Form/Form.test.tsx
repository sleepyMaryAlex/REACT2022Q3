import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

test('check if button has a class', () => {
  const addNewRecipe = jest.fn();
  const handleModal = jest.fn();
  render(<Form isModalOpen={false} addNewRecipe={addNewRecipe} handleModal={handleModal} />);
  const button = screen.getByRole('button');
  fireEvent.change(button);
  expect(screen.getByRole('button')).toHaveClass('submit-button');
});
