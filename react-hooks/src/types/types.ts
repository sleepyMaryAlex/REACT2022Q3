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

export interface IMain {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
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
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface ICards {
  results: IResult[];
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface ICard {
  card: IResult;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: (index: number) => void;
  index: number;
}

export interface IModal {
  card: IResult;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
