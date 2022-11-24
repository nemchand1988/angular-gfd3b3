import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private _http: HttpClient) {}

  getData() {
    return this._http.get('https://random-data-api.com/api/v2/users');
  }
}
