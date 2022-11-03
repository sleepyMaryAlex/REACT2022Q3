import React from 'react';
import { render, screen } from '@testing-library/react';
import Results from './Results';
import { Provider } from 'react-redux';
import store from 'store/store';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('check if the result title has been rendered and if it has a class', () => {
  render(
    <Provider store={store}>
      <Results />
    </Provider>
  );
  expect(screen.getByText(/results/i)).toHaveClass('results__title');
});
