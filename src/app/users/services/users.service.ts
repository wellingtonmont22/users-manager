import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly api: string = '/v1/users';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.api).pipe(first());
  }
}
