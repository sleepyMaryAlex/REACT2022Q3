import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from './Message';

test('should contain image with alt attribute', () => {
  const setDisplayMessage = jest.fn();
  render(<Message setDisplayMessage={setDisplayMessage} />);
  expect(screen.getByAltText(/close/i)).toBeInTheDocument();
});
