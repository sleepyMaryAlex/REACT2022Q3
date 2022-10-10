import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipeCard from './RecipeCard';

test('recipe card should contain description', () => {
  const card = {
    description: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
    title: 'Pasta',
    image: '../../assets/images/diet.png',
    cuisine: 'african',
    diet: ['vegan'],
    favorite: true,
    date: '2022-10-10',
  };
  render(<RecipeCard card={card} />);
  const description = card.description;
  expect(screen.getByText(description, { exact: false })).toBeInTheDocument();
});
