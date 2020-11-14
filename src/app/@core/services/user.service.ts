import { Observable } from 'rxjs';
import { User } from '@core/models/user';

export class UserService {

  private readonly currentUser$: Observable<User>;

  public constructor() {
  }

}
