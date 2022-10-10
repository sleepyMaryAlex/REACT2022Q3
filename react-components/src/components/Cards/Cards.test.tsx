import React from 'react';
import { render } from '@testing-library/react';
import Cards from './Cards';

test('count of cards must be the same as count of rendered cards', () => {
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
  const { container } = render(<Cards cards={cards} numShow={30} />);
  expect(container.getElementsByClassName('card').length).toBe(cards.length);
});
