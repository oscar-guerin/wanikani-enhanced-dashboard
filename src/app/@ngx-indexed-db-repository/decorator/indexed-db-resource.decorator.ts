import { PathContext } from '@witty-services/ngx-repository';

/**
 * @ignore
 */
export const INDEXED_DB_RESOURCE_METADATA_KEY: string = 'indexedDbResource';

export interface IndexedDbResourceContext extends PathContext {
}

export function IndexedDbResource(params: IndexedDbResourceContext): any {
  return (target: any): void => {
    Reflect.defineMetadata(INDEXED_DB_RESOURCE_METADATA_KEY, params, target);
  };
}
