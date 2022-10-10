import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

test('should contain image with alt attribute', () => {
  const handleModal = jest.fn();
  render(<Modal handleModal={handleModal} />);
  expect(screen.getByAltText(/close/i)).toBeInTheDocument();
});
