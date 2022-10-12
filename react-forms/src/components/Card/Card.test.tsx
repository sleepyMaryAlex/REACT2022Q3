import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('card should contain title', () => {
  const cards = [
    {
      id: 716429,
      title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
      image: '../../assets/images/diet.png',
      imageType: 'png',
    },
    {
      id: 715538,
      title: 'Bruschetta Style Pork & Pasta',
      image: '../../assets/icons/spoonacular.svg',
      imageType: 'svg',
    },
  ];
  render(<Card card={cards[0]} />);
  const title = cards[0].title;
  expect(screen.getByText(title, { exact: false })).toBeInTheDocument();
});
