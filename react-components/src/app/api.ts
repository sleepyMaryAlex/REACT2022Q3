import { IData } from '../types/types';

export async function getData(page: number, query: string): Promise<IData | null> {
  const queryParam = query ? `&name=${query}` : '';
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/character/?page=${page}${queryParam}`
  );
  if (response.status === 404) {
    return null;
  } else {
    const data = await response.json();
    return data;
  }
}
