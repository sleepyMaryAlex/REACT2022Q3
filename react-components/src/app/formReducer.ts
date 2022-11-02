import { IFormAction, IFormState } from 'types/types';

function formReducer(state: IFormState, action: IFormAction) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload as string };
    case 'SET_IMAGE':
      return { ...state, image: action.payload as string };
    case 'SET_FILE_NAME':
      return { ...state, fileName: action.payload as string };
    case 'SET_STATUS':
      return { ...state, status: action.payload as string };
    case 'SET_SPECIES':
      return { ...state, species: action.payload as string[] };
    case 'SET_CHECKED_STATE':
      return { ...state, checkedState: action.payload as boolean[] };
    case 'SET_GENDER':
      return { ...state, gender: action.payload as string };
    case 'SET_DATE':
      return { ...state, date: action.payload as string };
    case 'SET_CAN_SUBMIT':
      return { ...state, canSubmit: action.payload as boolean };
    case 'SET_DISPLAY_ERROR_MESSAGE':
      return { ...state, displayErrorMessage: action.payload as boolean };
    case 'SET_CAN_CHECK_MISTAKES':
      return { ...state, canCheckMistakes: action.payload as boolean };
    default:
      return state;
  }
}

export default formReducer;
