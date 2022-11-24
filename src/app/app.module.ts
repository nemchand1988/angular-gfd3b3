import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ApiService } from './api.service';
import { userReducer, UsersEffects } from './store';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ posts: userReducer }),
    EffectsModule.forRoot([UsersEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true,
    }),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [ApiService],
})
export class AppModule {}
