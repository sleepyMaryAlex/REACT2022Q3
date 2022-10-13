import { IData } from './../types/types';
const baseUrl = 'https://rickandmortyapi.com/api';

class Loader {
  public static async getData(page: number, query: string): Promise<IData> {
    const queryParam = query ? `&name=${query}` : '';
    const response = await fetch(`${baseUrl}/character/?page=${page}${queryParam}`);
    const data = await response.json();
    return data;
  }

  // public static async getSingleCharacter(id: number): Promise<IResult> {
  //   const response = await fetch(`${baseUrl}/character/${id.toString()}`);
  //   const character = await response.json();
  //   return character;
  // }
}

export default Loader;
