import { IndexedDbResourceContext } from './decorator/indexed-db-resource.decorator';
import { PathQuerySettings } from '@witty-services/ngx-repository';

/**
 * @ignore
 */
export interface IndexedDbQuerySettings<K> extends PathQuerySettings<IndexedDbResourceContext, K> {
}
