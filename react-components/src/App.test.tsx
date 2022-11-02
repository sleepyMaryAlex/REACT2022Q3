import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should contain value from local storage in search input', () => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
    },
    writable: true,
  });
  render(<App />);
  expect(window.localStorage.getItem).toHaveBeenCalledTimes(3);
});
