export interface IResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface IInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface IData {
  info: IInfo;
  results: IResult[];
}

export interface ICard {
  card: IResult;
  index: number;
}

export interface ICharacterCard {
  name: string;
  image: string;
  date: string;
  status: string;
  gender: string;
  species: string[];
}

export interface IMainState {
  results: IResult[];
  count: number;
  currentPage: number;
  query: string;
  index: number | null;
  sorting: string;
  isFetching: boolean;
}

export interface IFormState {
  name: string;
  image: string;
  fileName: string;
  status: string;
  species: string[];
  checkedState: boolean[];
  gender: string;
  date: string;
  canSubmit: boolean;
  displayErrorMessage: boolean;
  canCheckMistakes: boolean;
  characters: ICharacterCard[];
  displayMessage: boolean;
}
