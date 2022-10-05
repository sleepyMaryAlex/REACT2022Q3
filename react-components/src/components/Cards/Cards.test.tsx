import React from 'react';
import { render } from '@testing-library/react';
import Cards from './Cards';
import Loader from 'app/loader';

test('count of cards must be the same as count of rendered cards', async () => {
  const cards = await Loader.getCards('', 'all cuisines', 'all diets');
  const { container } = render(<Cards cards={cards} numShow={100} />);
  expect(container.getElementsByClassName('card').length).toBe(cards.length);
});
