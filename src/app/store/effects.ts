import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { of } from 'rxjs';
import {
  loadPostsAction,
  loadPostsSuccessAction,
  loadPostsFailedAction,
  setPostsAction,
} from './actions';

@Injectable()
export class PostsEffects {
  public loadUnitList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPostsAction),
      mergeMap(() => {
        return this.postsApiService.getData().pipe(
          map((response: any[]) => {
            console.log(response);
            loadPostsSuccessAction();
            return setPostsAction({ payload: { posts: response.first_name } });
          }),
          catchError(() => of(loadPostsFailedAction()))
        );
      })
    );
  });

  constructor(
    private actions$: Actions<Action>,
    private postsApiService: ApiService
  ) {}
}
