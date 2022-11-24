import { createReducer, on } from '@ngrx/store';
import * as PostsActions from './actions';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

export const postReducer = createReducer(
  initialState,
  on(PostsActions.loadPostsAction, (state) => ({ ...state })),
  on(PostsActions.loadPostsSuccessAction, (state) => ({ ...state })),
  on(PostsActions.loadPostsFailedAction, (state) => ({ ...state })),
  on(PostsActions.setPostsAction, (state, { payload }) => ({
    posts: [...payload.posts],
  }))
);
