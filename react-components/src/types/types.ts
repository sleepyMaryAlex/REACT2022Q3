export interface IAppState {
  cards: ICard[];
  numShow: number;
  isMainPage: boolean;
}

export interface IMainState {
  value: string;
  cuisine: string;
  diet: string;
}

export interface IMain {
  numShow: number;
  cards: ICard[];
  setCurrentPage: (isMainPage: boolean) => void;
  updateState: (value: string, cuisine: string, diet: string) => Promise<void>;
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

export interface IDropdownCuisine {
  cards: [] | ICard[];
  handleClickByCuisine: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  cuisine: string;
}

export interface IDropdownDiet {
  cards: [] | ICard[];
  handleClickByDiet: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  diet: string;
}

export interface IWithGracefulUnmount {
  mounted: boolean;
}

export interface IRecipeCard {
  image: string;
  title: string;
  description: string;
  cuisine: string;
  diet: string[];
  favorite: boolean;
  date: string;
}

export interface IFormState extends IRecipeCard {
  showTitleMessage: boolean;
  showImageMessage: boolean;
  showDescriptionMessage: boolean;
  showCuisineMessage: boolean;
  showDietMessage: boolean;
  showDateMessage: boolean;
  canSubmit: boolean;
  canCheckMistakes: boolean;
  canClearForm: boolean;
}

export interface IForm {
  addNewRecipe: (card: IRecipeCard) => void;
  isModalOpen: boolean;
  handleModal: (openModal: boolean) => void;
}

export interface IInputText {
  handleTitleChange: (title: string) => void;
  showTitleMessage: boolean;
  canClearForm: boolean;
}

export interface IInputFile {
  handleFileChange: (imageUrl: string) => void;
  showImageMessage: boolean;
  canClearForm: boolean;
}

export interface ITextarea {
  handleDescriptionChange: (description: string) => void;
  showDescriptionMessage: boolean;
  canClearForm: boolean;
}

export interface ISelectCuisine {
  handleCuisineChange: (cuisine: string) => void;
  showCuisineMessage: boolean;
  canClearForm: boolean;
}

export interface ICheckbox {
  handleDietChange: (diet: string[]) => void;
  showDietMessage: boolean;
  canClearForm: boolean;
}

export interface ISwitcher {
  handleSwitcherChange: (favorite: boolean) => void;
  canClearForm: boolean;
}

export interface IInputDate {
  handleDateChange: (date: string) => void;
  showDateMessage: boolean;
  canClearForm: boolean;
}
