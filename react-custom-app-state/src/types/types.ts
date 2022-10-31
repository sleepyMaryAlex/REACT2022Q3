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
  state: IAppState;
  dispatch: React.Dispatch<IAction>;
}

export interface ISearchBar {
  query: string;
  dispatch: React.Dispatch<IAction>;
  onSubmit: (query: string) => void;
}

export interface IResults {
  state: IAppState;
  dispatch: React.Dispatch<IAction>;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export interface ICards {
  results: IResult[];
  dispatch: React.Dispatch<IAction>;
}

export interface ICard {
  card: IResult;
  dispatch: React.Dispatch<IAction>;
  index: number;
}

export interface IAboutCharacter {
  results: IResult[];
  index: number | null;
}

export interface IHeader {
  results: IResult[];
  index: number | null;
}

export interface ICharacterCard {
  name: string;
  image: string;
  date: string;
  status: string;
  gender: string;
  species: string[];
}

export interface IForm {
  addCharacter: (card: ICharacterCard) => void;
  displayMessage: boolean;
  setDisplayMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IInputText {
  setName: React.Dispatch<React.SetStateAction<string>>;
  displayErrorMessage: boolean;
  name: string;
}

export interface IInputFile {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  displayErrorMessage: boolean;
  image: string;
  fileName: string;
}

export interface ISelect {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  displayErrorMessage: boolean;
}

export interface ICheckbox {
  setSpecies: React.Dispatch<React.SetStateAction<string[]>>;
  species: string[];
  displayErrorMessage: boolean;
  checkedState: boolean[];
  setCheckedState: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export interface ISwitcher {
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
}

export interface IInputDate {
  setDate: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  displayErrorMessage: boolean;
}

export interface IMessage {
  setDisplayMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAppState {
  results: IResult[];
  count: number;
  currentPage: number;
  query: string;
  index: number | null;
  isFetching: boolean;
  nothingFound: boolean;
}

export interface IAction {
  type: string;
  payload?: IResult[] | string | number | boolean;
}
