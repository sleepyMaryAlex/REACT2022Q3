import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

test('check if button has a class', () => {
  const addCharacter = jest.fn();
  const setDisplayMessage = jest.fn();
  render(
    <Form displayMessage={true} addCharacter={addCharacter} setDisplayMessage={setDisplayMessage} />
  );
  const button = screen.getByRole('button');
  fireEvent.change(button);
  expect(screen.getByRole('button')).toHaveClass('submit-button');
});
