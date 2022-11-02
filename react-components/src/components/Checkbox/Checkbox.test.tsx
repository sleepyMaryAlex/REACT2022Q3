import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

test('should display the correct number of checkboxes', () => {
  const handleDietChange = jest.fn();
  render(
    <Checkbox handleDietChange={handleDietChange} showDietMessage={false} canClearForm={false} />
  );
  expect(screen.getAllByRole('checkbox').length).toBe(9);
});
