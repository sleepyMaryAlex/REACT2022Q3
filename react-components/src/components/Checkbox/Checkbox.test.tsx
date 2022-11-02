import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

test('should display the correct number of checkboxes', () => {
  const dispatch = jest.fn();
  render(
    <Checkbox
      species={['Humanoid']}
      dispatch={dispatch}
      displayErrorMessage={false}
      checkedState={new Array(9).fill(false)}
    />
  );
  expect(screen.getAllByRole('checkbox').length).toBe(9);
});
