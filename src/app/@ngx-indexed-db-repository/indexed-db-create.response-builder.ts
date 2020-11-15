import { AbstractRepository } from '@witty-services/ngx-repository';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IndexedDbResponseBuilder } from './indexed-db-response-builder';

/**
 * @ignore
 */
@Injectable()
export class IndexedDbCreateResponseBuilder implements IndexedDbResponseBuilder {

  public build(response$: Observable<any>, repository: AbstractRepository<any, any, any, any>): Observable<any> {
    return response$.pipe(
      map((response: any) => 'TODO')
    );
  }
}
