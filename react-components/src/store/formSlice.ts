import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { speciesValues } from 'app/utils';
import { ICharacterCard, IFormState } from 'types/types';
import { RootState } from './store';

const initialState: IFormState = {
  name: '',
  image: '',
  fileName: '',
  status: 'Status',
  species: [],
  checkedState: new Array(speciesValues.length).fill(false),
  gender: 'Male',
  date: '',
  canSubmit: false,
  displayErrorMessage: false,
  canCheckMistakes: false,
  characters: [],
  displayMessage: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,

  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setImage(state, action: PayloadAction<{ image: string; fileName: string }>) {
      state.image = action.payload.image;
      state.fileName = action.payload.fileName;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setSpecies(state, action: PayloadAction<{ species: string[]; checkedState: boolean[] }>) {
      state.species = action.payload.species;
      state.checkedState = action.payload.checkedState;
    },
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
    },
    setDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
    setCanSubmit(state, action: PayloadAction<boolean>) {
      state.canSubmit = action.payload;
    },
    setDisplayErrorMessage(state, action: PayloadAction<boolean>) {
      state.displayErrorMessage = action.payload;
    },
    setCanCheckMistakes(state, action: PayloadAction<boolean>) {
      state.canCheckMistakes = action.payload;
    },
    setCharacters(state, action: PayloadAction<ICharacterCard>) {
      state.characters.push(action.payload);
    },
    setDisplayMessage(state, action: PayloadAction<boolean>) {
      state.displayMessage = action.payload;
    },
  },
});

export const {
  setName,
  setImage,
  setStatus,
  setSpecies,
  setGender,
  setDate,
  setDisplayErrorMessage,
  setCanSubmit,
  setCanCheckMistakes,
  setCharacters,
  setDisplayMessage,
} = formSlice.actions;

export default formSlice.reducer;

export const selectName = (state: RootState) => state.form.name;
export const selectImage = (state: RootState) => state.form.image;
export const selectFileName = (state: RootState) => state.form.fileName;
export const selectStatus = (state: RootState) => state.form.status;
export const selectSpecies = (state: RootState) => state.form.species;
export const selectCheckedState = (state: RootState) => state.form.checkedState;
export const selectGender = (state: RootState) => state.form.gender;
export const selectDate = (state: RootState) => state.form.date;
export const selectCharacters = (state: RootState) => state.form.characters;
export const selectCanSubmit = (state: RootState) => state.form.canSubmit;
export const selectCanCheckMistakes = (state: RootState) => state.form.canCheckMistakes;
export const selectDisplayErrorMessage = (state: RootState) => state.form.displayErrorMessage;
export const selectDisplayMessage = (state: RootState) => state.form.displayMessage;
