import { IAppAction, IResult, IAppState } from 'types/types';

function appReducer(state: IAppState, action: IAppAction) {
  switch (action.type) {
    case 'SET_RESULTS':
      return { ...state, results: action.payload as IResult[] };
    case 'SET_COUNT':
      return { ...state, count: action.payload as number };
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload as number };
    case 'SET_QUERY':
      return { ...state, query: action.payload as string };
    case 'SET_SORTING':
      return { ...state, sorting: action.payload as string };
    case 'SET_INDEX':
      return { ...state, index: action.payload as number | null };
    case 'SET_FETCHING':
      return { ...state, isFetching: action.payload as boolean };
    case 'SET_NOTHING_FOUND':
      return { ...state, nothingFound: action.payload as boolean };
    default:
      return state;
  }
}

export default appReducer;
