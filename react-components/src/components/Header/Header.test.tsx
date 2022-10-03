import React from 'react';
import { render} from '@testing-library/react';
import Header from './Header';
import { HashRouter } from 'react-router-dom';

test('render header title', () => {
  const { getByText } = render(<HashRouter><Header /></HashRouter>);
  expect(getByText(/spoonacular/i)).toBeInTheDocument();
});