import React from 'react';
import { render, screen } from '@testing-library/react';
import CharactersCards from './CharactersCards';
import { Provider } from 'react-redux';
import store from 'store/store';

test('check if the heading has been rendered', () => {
  render(
    <Provider store={store}>
      <CharactersCards />
    </Provider>
  );
  expect(screen.getAllByRole('heading')[0]).toBeInTheDocument();
});
