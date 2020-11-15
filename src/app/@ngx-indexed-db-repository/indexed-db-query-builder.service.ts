import { Injectable } from '@angular/core';
import { IndexedDbResourceContext } from './decorator/indexed-db-resource.decorator';
import { IndexedDbQuerySettings } from './indexed-db-query.settings';
import { IndexedDbRequest } from './indexed-db.request';
import { PathQueryBuilder } from '@witty-services/ngx-repository';

/**
 * @ignore
 */
@Injectable()
export class IndexedDbQueryBuilder extends PathQueryBuilder<IndexedDbResourceContext> {

  public buildRequestFromQuery<T, K>(query: IndexedDbQuerySettings<K>, object?: T): IndexedDbRequest<K> {
    return new IndexedDbRequest(super.buildRequestFromQuery(query, object));
  }
}
