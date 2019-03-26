import { Action } from 'redux';
import { ActionTypes } from '../../store/actions/actionTypes';
import { Entry } from '../model';

export interface AddEntriesAction extends Action {
  type: ActionTypes.ADD_ENTRIES;
  entries: Entry[];
}

export interface StartFetchingEntriesAction extends Action {
  type: ActionTypes.START_FETCHING_ENTRIES;
}

export interface FinishFetchingEntriesAction extends Action {
  type: ActionTypes.FINISH_FETCHING_ENTRIES;
}

export type EntriesActions =
  | AddEntriesAction
  | StartFetchingEntriesAction
  | FinishFetchingEntriesAction;

export interface EntriesState {
  isInitialized: boolean;
  entries: Entry[];
  page: number;
  hasMoreEntries: boolean;
  isFetching: boolean;
}
