import React from 'react';
import { render, screen } from '@testing-library/react';
import Characters from './Characters';

test('should contain name from local storage in characters', () => {
  const characters = [
    {
      name: 'Toxic Rick',
      image: 'https://rickandmortyapi.com/api/character/361',
      date: '2022-10-10',
      status: 'Alive',
      gender: 'Male',
      species: ['Humanoid'],
    },
  ];
  localStorage.setItem('characters', JSON.stringify(characters));
  render(<Characters />);
  expect(screen.getByText(/Toxic Rick/i)).toBeInTheDocument();
});
