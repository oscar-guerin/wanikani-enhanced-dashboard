import { IndexedDbRepository } from './indexed-db.repository';
import { Inject, Injectable, Injector, Type } from '@angular/core';
import { INDEXED_DB_RESOURCE_METADATA_KEY, IndexedDbResourceContext } from './decorator/indexed-db-resource.decorator';
import { AbstractRepository, Connection, Normalizer, PathDenormalizer, ResponseBuilder } from '@witty-services/ngx-repository';
import { IndexedDbDriver } from './indexed-db.driver';
import { IndexedDbQueryBuilder } from './indexed-db-query-builder.service';
import {
  INDEXED_DB_CREATE_RESPONSE_BUILDER,
  INDEXED_DB_FIND_ONE_RESPONSE_BUILDER,
  INDEXED_DB_PAGE_BUILDER_TOKEN
} from './ngx-indexed-db-repository.module.di';
import { IndexedDbPageBuilder } from './indexed-db-page-builder';
import { IndexedDbResponseBuilder } from './indexed-db-response-builder';

/**
 * @ignore
 */
@Injectable()
export class IndexedDbConnection extends Connection<IndexedDbResourceContext, any> { // TODO review typing

  public constructor(private readonly indexedDbDriver: IndexedDbDriver,
                     private readonly normalizer: Normalizer,
                     private readonly pathDenormalizer: PathDenormalizer,
                     private readonly indexedDbQueryBuilder: IndexedDbQueryBuilder,
                     @Inject(INDEXED_DB_PAGE_BUILDER_TOKEN) private readonly indexedDbPageBuilder: IndexedDbPageBuilder,
                     @Inject(INDEXED_DB_CREATE_RESPONSE_BUILDER) private indexedDbCreateResponseBuilder: IndexedDbResponseBuilder,
                     @Inject(INDEXED_DB_FIND_ONE_RESPONSE_BUILDER) private readonly indexedDbFindOneResponseBuilder: IndexedDbResponseBuilder,
                     private readonly parentInjector: Injector) {
    super(INDEXED_DB_RESOURCE_METADATA_KEY);
  }

  public supports<T, K>(repositoryType: Type<AbstractRepository<T, K, IndexedDbResourceContext, any>>): boolean { // TODO review typing
    return repositoryType === IndexedDbRepository;
  }

  protected getRepositoryInstance<T, K>(resourceType: new(...args: any) => T): IndexedDbRepository<T, K> {
    const indexedDbResourceContext: IndexedDbResourceContext = Reflect.getMetadata(this.resourceContextKey, resourceType);
    if (indexedDbResourceContext.create && indexedDbResourceContext.create instanceof Object) {
      const createResponseBuilder: ResponseBuilder<any> = this.parentInjector.get(indexedDbResourceContext.create.responseBuilder); // TODO review response typing
      if (!createResponseBuilder) {
        throw new Error(`${indexedDbResourceContext.create.responseBuilder.name} is not found in Angular Injector.`);
      }
      this.indexedDbCreateResponseBuilder = createResponseBuilder;
    }

    return new IndexedDbRepository<T, K>(
      this.indexedDbDriver,
      this.normalizer,
      this.pathDenormalizer,
      this.indexedDbQueryBuilder,
      this.indexedDbPageBuilder,
      this.indexedDbCreateResponseBuilder,
      this.indexedDbFindOneResponseBuilder
    );
  }
}
