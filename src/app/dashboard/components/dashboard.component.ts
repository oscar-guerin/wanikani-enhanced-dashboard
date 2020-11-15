import { Component } from '@angular/core';
import { InjectRepository } from '@witty-services/ngx-repository';
import { IndexedDbRepository } from '../../@ngx-indexed-db-repository/public-api';
import { Book } from './book';

@Component({
  selector: 'wkd-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  @InjectRepository({repository: () => IndexedDbRepository, resourceType: () => Book})
  private readonly bookRepository?: IndexedDbRepository<Book, string>;

  public constructor() {
    this.bookRepository?.create(new Book({
      name: 'My book'
    })).subscribe(console.log);
  }
}
