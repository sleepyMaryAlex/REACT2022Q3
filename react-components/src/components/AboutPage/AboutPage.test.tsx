import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from './AboutPage';

test('render list of options on about page', () => {
  const { getByText } = render(<AboutPage />);
  expect(getByText(/create a chatbot/i)).toBeInTheDocument();
});