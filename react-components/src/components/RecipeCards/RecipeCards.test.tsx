import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipeCards from './RecipeCards';

test('check if the heading has been rendered', () => {
  const cards = [
    {
      description: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
      title: 'Pasta',
      image: '../../assets/images/diet.png',
      cuisine: 'african',
      diet: ['vegan'],
      favorite: true,
      date: '2022-10-10',
    },
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
  render(<RecipeCards cards={cards} />);
  expect(screen.getAllByRole('heading')[0]).toBeInTheDocument();
});
