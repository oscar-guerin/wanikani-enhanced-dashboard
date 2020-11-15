import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Page } from '@witty-services/ngx-repository';
import { IndexedDbPageBuilder } from './indexed-db-page-builder';

/**
 * @ignore
 */
@Injectable()
export class IndexedDbNoPageBuilder implements IndexedDbPageBuilder {

  public buildPage(response$: Observable<any>): Observable<Page<any>> { // TODO review typing
    return response$.pipe(
      map((response: any) => new Page(response.body)), // TODO @OGU review this
      tap((page: Page<any>) => page.currentPage = 1),
      tap((page: Page<any>) => page.itemsPerPage = page.length),
      tap((page: Page<any>) => page.totalItems = page.length)
    );
  }
}
