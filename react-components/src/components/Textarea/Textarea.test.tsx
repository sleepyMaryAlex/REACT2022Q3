import React from 'react';
import { render, screen } from '@testing-library/react';
import Textarea from './Textarea';

test('check if there is a placeholder', () => {
  const handleDescriptionChange = jest.fn();
  render(
    <Textarea handleDescriptionChange={handleDescriptionChange} showDescriptionMessage={false} />
  );
  expect(screen.getByPlaceholderText(/HOW TO MAKE?/i)).toBeInTheDocument();
});
