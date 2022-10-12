import React from 'react';
import { render, screen } from '@testing-library/react';
import InputFile from './InputFile';

test('should contain image with alt attribute', () => {
  const handleFileChange = jest.fn();
  render(
    <InputFile
      handleFileChange={handleFileChange}
      showImageMessage={true}
      fileName="spoonacular.svg"
    />
  );
  expect(screen.getByRole('img')).toHaveAttribute('alt');
});
