import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

test('render text on about page', () => {
  const { getByText } = render(<About />);
  expect(getByText(/Rick and Morty/i)).toBeInTheDocument();
});
