import React from 'react';
import { render, screen } from '@testing-library/react';
import Switcher from './Switcher';

test('should display the correct number of checkboxes', () => {
  const handleSwitcherChange = jest.fn();
  render(<Switcher handleSwitcherChange={handleSwitcherChange} />);
  expect(screen.getAllByRole('checkbox').length).toBe(1);
});
