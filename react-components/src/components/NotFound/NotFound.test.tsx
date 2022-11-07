import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';
import { HashRouter } from 'react-router-dom';

test('render error in notFound component', () => {
  const { getByText } = render(
    <HashRouter>
      <NotFound />
    </HashRouter>
  );
  expect(getByText(/404/i)).toHaveClass('basic');
});
