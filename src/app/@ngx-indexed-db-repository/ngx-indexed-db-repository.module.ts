import 'reflect-metadata';

import { NgModule, Provider } from '@angular/core';
import { IndexedDbDriver } from './indexed-db.driver';
import { IndexedDbConnection } from './indexed-db.connection';
import { IndexedDbQueryBuilder } from './indexed-db-query-builder.service';
import {
  INDEXED_DB_CREATE_RESPONSE_BUILDER,
  INDEXED_DB_FIND_ONE_RESPONSE_BUILDER,
  INDEXED_DB_PAGE_BUILDER_TOKEN
} from './ngx-indexed-db-repository.module.di';
import { IndexedDbNoPageBuilder } from './indexed-db-no.page-builder';
import { IndexedDbFindOneResponseBuilder } from './indexed-db-find-one.response-builder';
import { CONNECTIONS_TOKEN } from '@witty-services/ngx-repository';
import { IndexedDbCreateResponseBuilder } from './indexed-db-create.response-builder';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

const MODULE_PROVIDERS: Provider[] = [
  IndexedDbConnection,
  IndexedDbDriver,
  IndexedDbQueryBuilder,
  {
    provide: CONNECTIONS_TOKEN,
    useExisting: IndexedDbConnection,
    multi: true
  },
  {
    provide: INDEXED_DB_PAGE_BUILDER_TOKEN,
    useClass: IndexedDbNoPageBuilder
  },
  {
    provide: INDEXED_DB_CREATE_RESPONSE_BUILDER,
    useClass: IndexedDbCreateResponseBuilder
  },
  {
    provide: INDEXED_DB_FIND_ONE_RESPONSE_BUILDER,
    useClass: IndexedDbFindOneResponseBuilder
  }
];

/**
 * @ignore
 */
@NgModule({
  imports: [
    NgxIndexedDBModule.forRoot({
      name: 'NgxRepository',
      version: 1,
      objectStoresMeta: []
    })
  ],
  providers: [
    ...MODULE_PROVIDERS
  ]
})
export class NgxIndexedDbRepositoryModule {
}
