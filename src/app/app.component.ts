import { Component, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User, PostState } from './store';
import { loadPostsAction } from './store/actions';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts$: Observable<any>;

  constructor(private store: Store<PostState>) {
    this.posts$ = this.store.select('users');
    this.store.dispatch(loadUsersAction());
  }
}