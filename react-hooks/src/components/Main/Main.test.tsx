import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';

test('fetch data', async () => {
  const setOpenModal = jest.fn();
  const { findByText } = render(<Main openModal={false} setOpenModal={setOpenModal} />);
  expect(await findByText('Rick Sanchez')).toBeInTheDocument();
});
