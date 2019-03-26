import { ActionTypes } from '../actions/actionTypes';

import { EntriesActions, EntriesState } from '../../types/store/entries';

const initialState: EntriesState = {
  isInitialized: false,
  entries: [],
  page: 1,
  hasMoreEntries: true,
  isFetching: false
};

const reducer = (
  state: EntriesState = initialState,
  action: EntriesActions
) => {
  switch (action.type) {
    case ActionTypes.ADD_ENTRIES:
      return {
        ...state,
        isInitialized: true,
        entries: [...state.entries, ...action.entries],
        page: state.page + 1,
        isFetching: false
      };
    case ActionTypes.START_FETCHING_ENTRIES:
      return {
        ...state,
        isFetching: true
      };
    case ActionTypes.FINISH_FETCHING_ENTRIES:
      return {
        ...state,
        isInitialized: true,
        hasMoreEntries: false,
        isFetching: false
      };
    default:
      return state;
  }
};

export default reducer;
