import React from 'react';
import { render, screen } from '@testing-library/react';
import Results from './Results';

test('check if the result title has been rendered and if it has a class', () => {
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
  const handleClickByCuisine = jest.fn();
  const handleClickByDiet = jest.fn();
  render(
    <Results
      handleClickByCuisine={handleClickByCuisine}
      handleClickByDiet={handleClickByDiet}
      cards={cards}
      cuisine="all cuisines"
      diet="all diets"
    />
  );
  expect(screen.getByText(/results/i)).toHaveClass('results__title');
});
