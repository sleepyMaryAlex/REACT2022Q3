import React from 'react';
import { render, screen } from '@testing-library/react';
import InputDate from './InputDate';
import { Provider } from 'react-redux';
import store from 'store/store';

test('should contain label with text', () => {
  render(
    <Provider store={store}>
      <InputDate />
    </Provider>
  );
  expect(screen.getByLabelText(/Date of creation/i)).toBeInTheDocument();
});
