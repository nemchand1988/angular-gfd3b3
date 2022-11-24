import { createAction, props } from '@ngrx/store';
import { Post } from './reducers';

const loadPosts = '[POSTS ACTION] load posts';
const loadPostsSuccess = '[POSTS ACTION] load posts success';
const loadPostsFailed = '[POSTS ACTION] load posts fialed';

const setPosts = '[POSTS ACTION] set posts';

export const loadPostsAction = createAction(loadPosts);

export const loadPostsSuccessAction = createAction(loadPostsSuccess);
export const loadPostsFailedAction = createAction(loadPostsFailed);

export const setPostsAction = createAction(
  setPosts,
  props<{
    payload: {
      posts: Post[];
    };
  }>()
);
