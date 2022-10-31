import React from 'react';
import { render, screen } from '@testing-library/react';
import Switcher from './Switcher';

test('should display the correct number of checkboxes', () => {
  const dispatch = jest.fn();
  render(<Switcher gender="Male" dispatch={dispatch} />);
  expect(screen.getAllByRole('checkbox').length).toBe(1);
});
