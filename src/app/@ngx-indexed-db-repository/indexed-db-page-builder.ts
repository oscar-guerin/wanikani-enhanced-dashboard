import { PageBuilder } from '@witty-services/ngx-repository';
import { IndexedDbRepository } from './indexed-db.repository';

export interface IndexedDbPageBuilder extends PageBuilder<any, IndexedDbRepository<any, any>> { // TODO review typing
}
