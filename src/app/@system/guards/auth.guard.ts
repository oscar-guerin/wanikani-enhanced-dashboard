import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '@core/services/user.service';
import { log } from '@witty-services/rxjs-common';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  public constructor(private readonly userService: UserService,
                     private readonly router: Router) {
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.isAuthenticated().pipe(
      log(10),
      tap((isAuthenticated: boolean) => !isAuthenticated ? this.router.navigate(['/', 'sign']) : void 0)
    );
  }

  public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }
}
