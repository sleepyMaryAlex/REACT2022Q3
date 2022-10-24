import React from 'react';
import { render, screen } from '@testing-library/react';
import InputFile from './InputFile';

test('should contain image with alt attribute', () => {
  const setImage = jest.fn();
  const setFileName = jest.fn();
  render(
    <InputFile
      image='https://rickandmortyapi.com/api/character/361'
      fileName='rickandmorty.png'
      setImage={setImage}
      setFileName={setFileName}
      displayErrorMessage={false}
    />
  );
  expect(screen.getByRole('img')).toHaveAttribute('alt');
});
