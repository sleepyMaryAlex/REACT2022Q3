import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import store from 'store/store';

test('render input in search bar component', () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByText(/i want to find/i)).toBeInTheDocument();
});
