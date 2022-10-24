import React from 'react';
import { render, screen } from '@testing-library/react';
import Switcher from './Switcher';

test('should display the correct number of checkboxes', () => {
  const setGender = jest.fn();
  render(<Switcher gender='Male' setGender={setGender} />);
  expect(screen.getAllByRole('checkbox').length).toBe(1);
});
