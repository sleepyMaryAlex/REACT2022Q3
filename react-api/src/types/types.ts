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

export interface IMainState {
  results: IResult[];
  pages: number;
  count: number;
  currentPage: number;
  query: string;
}

export interface ISearchBar {
  query: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IResults {
  results: IResult[];
  count: number;
  currentPage: number;
  pages: number;
}

export interface ICards {
  results: IResult[];
  count: number;
}
