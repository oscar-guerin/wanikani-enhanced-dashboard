import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';

@Injectable()
export class AuthService {


  public constructor() {
  }

  public signIn(): Observable<void> {
    return EMPTY; // TODO
  }

  public isAuthenticated(): Observable<boolean> {
    return of(false); // TODO
  }
}
