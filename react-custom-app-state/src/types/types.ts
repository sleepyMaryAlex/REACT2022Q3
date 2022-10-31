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
  dispatch: React.Dispatch<IAppAction>;
}

export interface ISearchBar {
  query: string;
  dispatch: React.Dispatch<IAppAction>;
  onSubmit: (query: string) => void;
}

export interface IResults {
  state: IAppState;
  dispatch: React.Dispatch<IAppAction>;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export interface ICards {
  results: IResult[];
  dispatch: React.Dispatch<IAppAction>;
}

export interface ICard {
  card: IResult;
  dispatch: React.Dispatch<IAppAction>;
  index: number;
}

export interface IAboutCharacter {
  results: IResult[];
  index: number | null;
  dispatch: React.Dispatch<IAppAction>;
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
  dispatch: React.Dispatch<IFormAction>;
  displayErrorMessage: boolean;
  name: string;
}

export interface IInputFile {
  dispatch: React.Dispatch<IFormAction>;
  displayErrorMessage: boolean;
  image: string;
  fileName: string;
}

export interface ISelect {
  dispatch: React.Dispatch<IFormAction>;
  status: string;
  displayErrorMessage: boolean;
}

export interface ICheckbox {
  dispatch: React.Dispatch<IFormAction>;
  species: string[];
  displayErrorMessage: boolean;
  checkedState: boolean[];
}

export interface ISwitcher {
  gender: string;
  dispatch: React.Dispatch<IFormAction>;
}

export interface IInputDate {
  dispatch: React.Dispatch<IFormAction>;
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
  sorting: string;
  isFetching: boolean;
  nothingFound: boolean;
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
}

export interface IAppAction {
  type: string;
  payload?: IResult[] | string | number | boolean | null;
}

export interface IFormAction {
  type: string;
  payload?: string | boolean | null | string[] | boolean[];
}
