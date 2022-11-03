import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';
import { Provider } from 'react-redux';
import store from 'store/store';

test('should display the correct number of checkboxes', () => {
  render(
    <Provider store={store}>
      <Checkbox />
    </Provider>
  );
  expect(screen.getAllByRole('checkbox').length).toBe(9);
});
