import { HttpResource } from '@witty-services/ngx-http-repository';
import { Column, Id } from '@witty-services/ngx-repository';

@HttpResource({
  read: '/wanikani/user'
})
export class User {

  @Id('data.id')
  public id?: string;

  @Column('data.username')
  public username?: string;

  @Column('data.level')
  public level?: number;
}
