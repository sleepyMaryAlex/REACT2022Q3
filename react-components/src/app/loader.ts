import { ICard } from './../types/types';
const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch';
const APIKey = '792997a4eef94cd7afbd6c106a81a0b9';

class Loader {
  public static async getCards(
    query: string,
    cuisine: string,
    diet: string,
    number = 100
  ): Promise<ICard[]> {
    const cuisineParam = cuisine !== 'all cuisines' ? `&cuisine=${cuisine}` : '';
    const dietParam = diet !== 'all diets' ? `&diet=${diet}` : '';
    const queryParam = query ? `&query=${query}` : '';
    const response = await fetch(
      `${baseUrl}?apiKey=${APIKey}${queryParam}${cuisineParam}${dietParam}&number=${number}`
    );
    const cards = await response.json();
    return cards.results;
  }
}

export default Loader;
