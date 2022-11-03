import React from 'react';
import { render, screen } from '@testing-library/react';
import Switcher from './Switcher';
import { Provider } from 'react-redux';
import store from 'store/store';

test('should display the correct number of checkboxes', () => {
  render(
    <Provider store={store}>
      <Switcher />
    </Provider>
  );
  expect(screen.getAllByRole('checkbox').length).toBe(1);
});
