import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IndexedDbResponseBuilder } from './indexed-db-response-builder';

/**
 * @ignore
 */
@Injectable()
export class IndexedDbFindOneResponseBuilder implements IndexedDbResponseBuilder {

  public build(response$: Observable<any>): Observable<any> {
    return response$.pipe(
      map((response: any) => 'TODO')
    );
  }
}
