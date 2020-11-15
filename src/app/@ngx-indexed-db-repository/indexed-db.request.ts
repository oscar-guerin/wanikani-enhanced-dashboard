import { PathRequest } from '@witty-services/ngx-repository';

/**
 * @ignore
 */
export class IndexedDbRequest<K> extends PathRequest<K> {

  public constructor(data: Partial<IndexedDbRequest<K>> = {}) {
    super(data);
    Object.assign(this, data);
  }
}
