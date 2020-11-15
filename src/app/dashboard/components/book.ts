import { IndexedDbResource } from '../../@ngx-indexed-db-repository/public-api';
import { Column, Id } from '@witty-services/ngx-repository';

@IndexedDbResource({
  path: 'books'
})
export class Book {

  @Id()
  public id?: string;

  @Column()
  public name?: string;

  public constructor(data: Partial<Book>) {
    Object.assign(this, data);
  }
}
