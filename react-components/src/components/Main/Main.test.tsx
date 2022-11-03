import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';
import { Provider } from 'react-redux';
import store from 'store/store';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('fetch data', async () => {
  const { findByText } = render(
    <Provider store={store}>
      <Main />
    </Provider>
  );
  expect(await findByText('Rick Sanchez')).toBeInTheDocument();
});
