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
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSubmit: () => Promise<void>;
}

export interface IMain {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSubmit: () => Promise<void>;
  handleClickByCuisine: (event: React.ChangeEvent<HTMLSelectElement>) => Promise<void>;
  handleClickByDiet: (event: React.ChangeEvent<HTMLSelectElement>) => Promise<void>;
  cards: [] | ICard[];
  numShow: number;
}

export interface IResults {
  cards: ICard[];
  numShow: number;
  handleClickByCuisine: (event: React.ChangeEvent<HTMLSelectElement>) => Promise<void>;
  handleClickByDiet: (event: React.ChangeEvent<HTMLSelectElement>) => Promise<void>;
}

export interface ICards {
  cards: ICard[];
  numShow: number;
}

export interface IDropdown {
  cards: ICard[];
  handleClickByCuisine: (event: React.ChangeEvent<HTMLSelectElement>) => Promise<void>;
  handleClickByDiet: (event: React.ChangeEvent<HTMLSelectElement>) => Promise<void>;
}
