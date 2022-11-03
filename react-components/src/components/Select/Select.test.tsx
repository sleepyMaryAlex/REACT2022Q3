import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './Select';
import { Provider } from 'react-redux';
import store from 'store/store';

test('check is there are comboboxes', () => {
  render(
    <Provider store={store}>
      <Select />
    </Provider>
  );
  expect(screen.getAllByRole('combobox').length).toBe(1);
});
