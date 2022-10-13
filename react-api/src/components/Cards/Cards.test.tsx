import React from 'react';
import { render } from '@testing-library/react';
import Cards from './Cards';

test('count of cards must be the same as count of rendered cards', () => {
  const setOpenModal = jest.fn();
  const setIndex = jest.fn();
  const results = [
    {
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
    },
  ];
  const { container } = render(
    <Cards setOpenModal={setOpenModal} results={results} setIndex={setIndex} />
  );
  expect(container.getElementsByClassName('card').length).toBe(results.length);
});
