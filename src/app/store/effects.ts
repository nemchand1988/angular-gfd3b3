import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { of } from 'rxjs';
import {
  loadUsersAction,
  loadUsersSuccessAction,
  loadUsersFailedAction,
  setUsersAction,
} from './actions';

@Injectable()
export class PostsEffects {
  public loadUnitList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsersAction),
      mergeMap(() => {
        return this.ApiService.getData().pipe(
          map((response: any[]) => {
            console.log(response);
            loadUsersSuccessAction();
            return setUsersAction({ payload: { users: response } });
          }),
          catchError(() => of(loadUsersFailedAction()))
        );
      })
    );
  });

  constructor(
    private actions$: Actions<Action>,
    private ApiService: ApiService
  ) {}
}
