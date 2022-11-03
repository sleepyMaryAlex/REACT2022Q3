import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutCharacter from './AboutCharacter';
import { Provider } from 'react-redux';
import store from 'store/store';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('should contain image with alt attribute', () => {
  render(
    <Provider store={store}>
      <AboutCharacter />
    </Provider>
  );
  expect(screen.getByText(/sorry/i)).toBeInTheDocument();
});
