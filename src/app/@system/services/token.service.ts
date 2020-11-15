import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TokenService {

  private readonly storageKey: string = 'wkToken';
  private readonly wkToken$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(localStorage.getItem(this.storageKey));

  public signIn(wkToken: string): void {
    localStorage.setItem(this.storageKey, wkToken);
    this.wkToken$.next(wkToken);
  }

  public signOut(): void {
    localStorage.removeItem(this.storageKey);
    this.wkToken$.next(null);
  }

  public getWkToken(): Observable<string | null> {
    return this.wkToken$.asObservable();
  }
}
