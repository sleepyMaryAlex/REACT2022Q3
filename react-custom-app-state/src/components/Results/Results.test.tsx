import React from 'react';
import { render, screen } from '@testing-library/react';
import Results from './Results';

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

const state = {
  results: results,
  count: 1,
  currentPage: 1,
  query: '',
  sorting: '',
  index: 0,
  isFetching: false,
  nothingFound: false,
};

test('check if the result title has been rendered and if it has a class', () => {
  const dispatch = jest.fn();
  const handlePageChange = jest.fn();
  render(<Results state={state} dispatch={dispatch} handlePageChange={handlePageChange} />);
  expect(screen.getByText(/results/i)).toHaveClass('results__title');
});
