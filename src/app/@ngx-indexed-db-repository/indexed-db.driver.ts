import { EMPTY, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IndexedDbRequest } from './indexed-db.request';
import { Driver } from '@witty-services/ngx-repository';
import { NgxIndexedDBService } from 'ngx-indexed-db';

/**
 * @ignore
 */
@Injectable()
export class IndexedDbDriver implements Driver<number | any[]> {

  public constructor(private readonly indexedDbService: NgxIndexedDBService) {
  }

  public create<K>(object: any, request: IndexedDbRequest<K>): Observable<number> {
    console.log(object, request);

    return EMPTY;
  }

  public delete<K>(request: IndexedDbRequest<K>): Observable<any[]> {
    return EMPTY;
  }

  public findBy<K>(request: IndexedDbRequest<K>): Observable<any> {
    return EMPTY;
  }

  public findOne<K>(request: IndexedDbRequest<K>): Observable<any> {
    return EMPTY;
  }

  public update<K>(object: any, request: IndexedDbRequest<K>): Observable<any> {
    return EMPTY;
  }
}
