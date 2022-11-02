import React from 'react';
import { render, screen } from '@testing-library/react';
import Recipes from './Recipes';

test('should contain description from local storage in recipes', () => {
  const recipes = [
    {
      description: 'Bruschetta Style Pork & Pasta',
      title: 'Pork & Pasta',
      image: '../../assets/icons/spoonacular.svg',
      cuisine: 'american',
      diet: ['vegetarian'],
      favorite: true,
      date: '2022-10-11',
    },
  ];
  localStorage.setItem('recipes', JSON.stringify(recipes));
  render(<Recipes />);
  expect(screen.getByText(/Bruschetta Style Pork & Pasta/i)).toBeInTheDocument();
});
