import React from 'react';
import { render } from '@testing-library/react';
import Cards from './Cards';
import { Provider } from 'react-redux';
import store from 'store/store';
import { screen } from '@testing-library/react';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('count of cards must be the same as count of rendered cards', () => {
  render(
    <Provider store={store}>
      <Cards />
    </Provider>
  );
  expect(screen.queryByRole('button')).not.toBeInTheDocument();
});
