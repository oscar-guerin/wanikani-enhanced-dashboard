import { Injectable } from '@angular/core';
import { InjectRepository } from '@witty-services/ngx-repository';
import { HttpRepository } from '@witty-services/ngx-http-repository';
import { User } from '@core/models/user';
import { Observable, of } from 'rxjs';
import { TokenService } from '@system/services/token.service';
import { catchError, defaultIfEmpty, map, switchMap } from 'rxjs/operators';
import { softCache } from '@witty-services/rxjs-common';

@Injectable()
export class UserService {

  private readonly currentUser$: Observable<User | null>;

  @InjectRepository({repository: () => HttpRepository, resourceType: () => User})
  private readonly userRepository?: HttpRepository<User, string>;

  public constructor(authService: TokenService) {
    this.currentUser$ = authService.getWkToken().pipe(
      switchMap((token: string | null) =>
        this.userRepository && !!token ? this.userRepository.findOne().pipe(
          catchError(() => { // TODO @OGU better error management
            authService.signOut();

            return of(null);
          })
        ) : of(null)
      ),
      softCache()
    );
  }

  public getCurrentUser(): Observable<User | null> {
    return this.currentUser$;
  }

  public isAuthenticated(): Observable<boolean> {
    return this.currentUser$.pipe(
      map((user: User | null) => !!user),
      defaultIfEmpty(false)
    );
  }
}
