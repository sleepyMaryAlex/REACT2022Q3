import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

const card = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

test('should contain image with alt attribute', () => {
  const setOpenModal = jest.fn();
  render(<Modal setOpenModal={setOpenModal} card={card} />);
  expect(screen.getByAltText(/close/i)).toBeInTheDocument();
});
