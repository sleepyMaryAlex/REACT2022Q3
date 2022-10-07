export interface IState {
  cards: [] | ICard[];
  value: string;
  numShow: number;
  cuisine: string;
  diet: string;
}

export interface ICard {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

export interface IResult {
  offset: number;
  number: number;
  results: ICard[];
  totalResults: number;
}

export interface ISearchBar {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IMain {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickByCuisine: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleClickByDiet: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  cards: [] | ICard[];
  numShow: number;
  cuisine: string;
  diet: string;
}

export interface IResults {
  cards: ICard[];
  numShow: number;
  handleClickByCuisine: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleClickByDiet: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  cuisine: string;
  diet: string;
}

export interface ICards {
  cards: ICard[];
  numShow: number;
}

export interface IDropdown {
  cards: [] | ICard[];
  handleClickByCuisine: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleClickByDiet: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  cuisine: string;
  diet: string;
}

export interface IWithGracefulUnmount {
  mounted: boolean;
}

export interface IRecipeCard {
  image: string;
  title: string;
  cuisine: string;
  diet: string[];
  favorite: boolean;
  date: string;
}

export interface IFormState {
  diet: string[];
  imageUrl: string;
  title: string;
  cuisine: string;
  favorite: boolean;
  date: string;
}
