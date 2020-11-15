import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { first, switchMap } from 'rxjs/operators';
import { TokenService } from '@system/services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public static readonly ANONYMOUS_URLS: string[] = [];

  public constructor(private readonly injector: Injector) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (AuthInterceptor.ANONYMOUS_URLS.find((url: string) => req.url.indexOf(url) !== -1)) {
      return next.handle(req);
    }

    return this.injector.get(TokenService).getWkToken().pipe(
      first(),
      switchMap((token: string | null) => next.handle(req.clone({
        headers: req.headers.append('Authorization', `Bearer ${token}`)
      }))),
    );
  }
}
