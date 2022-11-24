import { createAction, props } from '@ngrx/store';
import { User } from './reducers';

const loadUsers = '[USERS ACTION] load users';
const loadUsersSuccess = '[USERS ACTION] load users success';
const loadUsersFailed = '[USERS ACTION] load users fialed';

const setUsers = '[USERS ACTION] set posts';

export const loadUsersAction = createAction(loadUsers);

export const loadUsersSuccessAction = createAction(loadUsersSuccess);
export const loadUsersFailedAction = createAction(loadUsersFailed);

export const setUsersAction = createAction(
  setUsers,
  props<{
    payload: {
      users: User[];
    };
  }>()
);
