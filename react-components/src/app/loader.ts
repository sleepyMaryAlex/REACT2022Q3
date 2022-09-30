import { ICard } from './../types/types';
const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch';
const APIKey = 'b2b57db151c44166a308cb1b06dd5be5';

class Loader {
  public static async getCards(
    query: string,
    cuisine: string,
    diet: string,
    number = 100
  ): Promise<ICard[]> {
    const cuisineParam = cuisine !== 'cuisine' ? `&cuisine=${cuisine}` : '';
    const dietParam = diet !== 'diet' ? `&diet=${diet}` : '';
    const queryParam = query ? `&query=${query}` : '';
    const response = await fetch(
      `${baseUrl}?apiKey=${APIKey}${queryParam}${cuisineParam}${dietParam}&number=${number}`
    );
    const cards = await response.json();
    return cards.results;
  }
}

export default Loader;
