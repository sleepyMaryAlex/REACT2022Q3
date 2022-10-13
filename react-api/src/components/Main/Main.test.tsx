import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

test('check if the search image has been rendered and if it has a class', () => {
  const setOpenModal = jest.fn();
  render(<Main openModal={false} setOpenModal={setOpenModal} />);
  expect(screen.getAllByRole('img')[0]).toHaveClass('search__image');
});
