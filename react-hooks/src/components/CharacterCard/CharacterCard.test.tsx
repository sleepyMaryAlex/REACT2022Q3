import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterCard from './CharacterCard';

test('character card should contain name', () => {
  const card = {
    name: 'Toxic Rick',
    image: 'https://rickandmortyapi.com/api/character/361',
    date: '2022-10-10',
    status: 'Alive',
    gender: 'Male',
    species: ['Humanoid'],
  };
  render(<CharacterCard card={card} />);
  const name = card.name;
  expect(screen.getByText(name, { exact: false })).toBeInTheDocument();
});
