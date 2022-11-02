import React from 'react';
import { render, screen } from '@testing-library/react';
import InputFile from './InputFile';

test('should contain image with alt attribute', () => {
  const dispatch = jest.fn();
  render(
    <InputFile
      image="https://rickandmortyapi.com/api/character/361"
      fileName="rickandmorty.png"
      dispatch={dispatch}
      displayErrorMessage={false}
    />
  );
  expect(screen.getByRole('img')).toHaveAttribute('alt');
});
