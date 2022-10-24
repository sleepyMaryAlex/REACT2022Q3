import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipeCards from './CharactersCards';

test('check if the heading has been rendered', () => {
  const cards = [
    {
      name: 'Toxic Rick',
      image: 'https://rickandmortyapi.com/api/character/361',
      date: '2022-10-10',
      status: 'Alive',
      gender: 'Male',
      species: ['Humanoid'],
    },
  ];
  render(<RecipeCards cards={cards} />);
  expect(screen.getAllByRole('heading')[0]).toBeInTheDocument();
});
