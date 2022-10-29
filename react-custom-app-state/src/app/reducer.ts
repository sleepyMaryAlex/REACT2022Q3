import { IAction, IResult, IAppState } from 'types/types';

function reducer(state: IAppState, action: IAction) {
  switch (action.type) {
    case 'SET_RESULTS':
      return { ...state, results: action.payload as IResult[] };
    case 'SET_COUNT':
      return { ...state, count: action.payload as number };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: state.currentPage + (action.payload as number) };
    case 'SET_FIRST_PAGE':
      return { ...state, currentPage: 1 };
    case 'SET_QUERY':
      return { ...state, query: action.payload as string };
    case 'SET_INDEX':
      return { ...state, index: action.payload as number };
    case 'SET_FETCHING':
      return { ...state, isFetching: action.payload as boolean };
    case 'SET_NOTHING_FOUND':
      return { ...state, nothingFound: action.payload as boolean };
    default:
      return state;
  }
}

export default reducer;
