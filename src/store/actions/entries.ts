import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ENDPOINT } from '../../env';
import axios from '../../tools/axios';
import { RootState } from '../../types/index';
import { Entry } from '../../types/model';
import { EntriesActions } from '../../types/store/entries';
import { ActionTypes } from './actionTypes';

export const addEntries = (entries: Entry[]): EntriesActions => {
  return {
    type: ActionTypes.ADD_ENTRIES,
    entries
  };
};

export const startFetchingEntries = (): EntriesActions => {
  return {
    type: ActionTypes.START_FETCHING_ENTRIES
  };
};

export const finishFetchingEntries = (): EntriesActions => {
  return {
    type: ActionTypes.FINISH_FETCHING_ENTRIES
  };
};

export const fetchEntries = (): ThunkAction<
  void,
  RootState,
  undefined,
  EntriesActions
> => {
  return (dispatch: Dispatch<EntriesActions>, getState: () => RootState) => {
    if (
      getState().entriesData.hasMoreEntries &&
      !getState().entriesData.isFetching
    ) {
      dispatch(startFetchingEntries());
      const API_ENDPOINT = `${ENDPOINT}/entries`;
      axios
        .get(API_ENDPOINT, {
          params: { page: getState().entriesData.page }
        })
        .then(res => {
          if (res.data.result === 'success' && res.data.entries.length > 0) {
            dispatch(addEntries(res.data.entries));
          } else {
            dispatch(finishFetchingEntries());
          }
        })
        .catch(error => {
          // tslint:disable-next-line: no-console
          console.log(error);
        });
    }
  };
};
