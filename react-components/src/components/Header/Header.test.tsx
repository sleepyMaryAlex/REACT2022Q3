import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/store';

test('render header title', () => {
  const { getByText } = render(
    <HashRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </HashRouter>
  );
  expect(getByText(/rick and morty/i)).toBeInTheDocument();
});
