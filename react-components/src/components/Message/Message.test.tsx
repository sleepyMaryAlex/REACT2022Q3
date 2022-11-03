import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from './Message';
import { Provider } from 'react-redux';
import store from 'store/store';

test('should contain image with alt attribute', () => {
  render(
    <Provider store={store}>
      <Message />
    </Provider>
  );
  expect(screen.getByAltText(/close/i)).toBeInTheDocument();
});
