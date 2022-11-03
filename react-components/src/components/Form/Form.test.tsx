import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';
import { Provider } from 'react-redux';
import store from 'store/store';

test('check if button has a class', () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  );
  const button = screen.getByRole('button');
  fireEvent.change(button);
  expect(screen.getByRole('button')).toHaveClass('submit-button');
});
