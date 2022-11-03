import React from 'react';
import { render, screen } from '@testing-library/react';
import Characters from './Characters';
import { Provider } from 'react-redux';
import store from 'store/store';

test('should contain label text', () => {
  render(
    <Provider store={store}>
      <Characters />
    </Provider>
  );
  expect(screen.getByLabelText(/Humanoid/i)).toBeInTheDocument();
});
