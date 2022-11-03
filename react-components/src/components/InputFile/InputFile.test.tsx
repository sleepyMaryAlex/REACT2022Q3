import React from 'react';
import { render, screen } from '@testing-library/react';
import InputFile from './InputFile';
import { Provider } from 'react-redux';
import store from 'store/store';

test('should contain image with alt attribute', () => {
  render(
    <Provider store={store}>
      <InputFile />
    </Provider>
  );
  expect(screen.getByRole('img')).toHaveAttribute('alt');
});
