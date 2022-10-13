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
  index: number;
  isFetching: boolean;
}

export interface IMain {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

export interface ISearchBar {
  query: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

export interface IResults {
  results: IResult[];
  count: number;
  currentPage: number;
  pages: number;
  setOpenModal: (openModal: boolean) => void;
  setIndex: (index: number) => void;
}

export interface ICards {
  results: IResult[];
  count: number;
  setOpenModal: (openModal: boolean) => void;
  setIndex: (index: number) => void;
}

export interface ICard {
  card: IResult;
  setOpenModal: (openModal: boolean) => void;
  setIndex: (index: number) => void;
  index: number;
}

export interface IModal {
  card: IResult;
  setOpenModal: (openModal: boolean) => void;
}
