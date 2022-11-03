import React from 'react';
import { render, screen } from '@testing-library/react';
import InputText from './InputText';
import store from 'store/store';
import { Provider } from 'react-redux';

test('should find placeholder', () => {
  render(
    <Provider store={store}>
      <InputText />
    </Provider>
  );
  expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
});
