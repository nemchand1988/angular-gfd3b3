import { createReducer, on } from '@ngrx/store';
import * as UsersActions from './actions';

export interface User {
  first_name: string;
  gender: string;
  email: string;
  date_of_birth: string;
}

export interface PostState {
  users: User[];
}

const initialState: PostState = {
  users: [],
};

export const postReducer = createReducer(
  initialState,
  on(UsersActions.loadUsersAction, (state) => ({ ...state })),
  on(UsersActions.loadUsersSuccessAction, (state) => ({ ...state })),
  on(UsersActions.loadUsersFailedAction, (state) => ({ ...state })),
  on(UsersActions.setUsersAction, (state, { payload }) => ({
    users: [...payload.users],
  }))
);
