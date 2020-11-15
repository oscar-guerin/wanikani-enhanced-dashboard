import { INDEXED_DB_RESOURCE_METADATA_KEY, IndexedDbResourceContext } from './decorator/indexed-db-resource.decorator';
import { IndexedDbDriver } from './indexed-db.driver';
import { IndexedDbQueryBuilder } from './indexed-db-query-builder.service';
import { Inject, Injector, Optional } from '@angular/core';
import {
  INDEXED_DB_CREATE_RESPONSE_BUILDER,
  INDEXED_DB_FIND_ONE_RESPONSE_BUILDER,
  INDEXED_DB_PAGE_BUILDER_TOKEN
} from './ngx-indexed-db-repository.module.di';
import { AbstractRepository, Normalizer, PathDenormalizer } from '@witty-services/ngx-repository';
import { IndexedDbPageBuilder } from './indexed-db-page-builder';
import { IndexedDbResponseBuilder } from './indexed-db-response-builder';

/**
 * @ignore
 */
export class IndexedDbRepository<T, K> extends AbstractRepository<T, K, IndexedDbResourceContext, any> { // TODO typing

  public constructor(indexedDbDriver: IndexedDbDriver,
                     normalizer: Normalizer,
                     denormalizer: PathDenormalizer,
                     indexedDbQueryBuilder: IndexedDbQueryBuilder,
                     @Inject(INDEXED_DB_PAGE_BUILDER_TOKEN) indexedDbPageBuilder: IndexedDbPageBuilder,
                     @Inject(INDEXED_DB_CREATE_RESPONSE_BUILDER) indexedDbCreateResponseBuilder: IndexedDbResponseBuilder,
                     @Inject(INDEXED_DB_FIND_ONE_RESPONSE_BUILDER) indexedDbFindOneResponseBuilder: IndexedDbResponseBuilder,
                     @Optional() injector?: Injector) {
    super(
      INDEXED_DB_RESOURCE_METADATA_KEY,
      indexedDbDriver,
      normalizer,
      denormalizer,
      indexedDbQueryBuilder,
      indexedDbPageBuilder,
      indexedDbCreateResponseBuilder,
      indexedDbFindOneResponseBuilder
    );

    if (!this.repositoryContextConfiguration) {
      return;
    }

    if (!(this.resourceContextConfiguration.create instanceof Object)) {
      return;
    }

    if (!injector) {
      return;
    }

    this.createResponseBuilder = injector.get(this.resourceContextConfiguration.create.responseBuilder());
  }
}
