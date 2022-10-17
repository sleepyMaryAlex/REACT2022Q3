import React from 'react';
import { render } from '@testing-library/react';
import Progress from './Progress';

test('check if progress container has class', () => {
  const { container } = render(<Progress />);
  const progressContainer = container.firstChild as Element;
  expect(progressContainer).toHaveClass('circles');
});
