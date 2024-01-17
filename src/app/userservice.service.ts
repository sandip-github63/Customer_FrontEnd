import { Injectable } from '@angular/core';
import { User } from './user';
import endPoint from 'helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  constructor(private http: HttpClient) {}

  public addUser(user: User) {
    return this.http.post(`${endPoint}/user/register`, user);
  }
}
