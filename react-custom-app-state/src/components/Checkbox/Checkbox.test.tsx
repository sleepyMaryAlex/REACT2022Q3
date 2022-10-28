import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

test('should display the correct number of checkboxes', () => {
  const setSpecies = jest.fn();
  const setCheckedState = jest.fn();
  render(
    <Checkbox
      species={['Humanoid']}
      setSpecies={setSpecies}
      displayErrorMessage={false}
      checkedState={new Array(9).fill(false)}
      setCheckedState={setCheckedState}
    />
  );
  expect(screen.getAllByRole('checkbox').length).toBe(9);
});
