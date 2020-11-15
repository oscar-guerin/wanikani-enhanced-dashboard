import { Component } from '@angular/core';
import { NbMenuBag, NbMenuItem, NbMenuService } from '@nebular/theme';
import { Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { ObservableDestroy } from '@witty-services/ngx-common';
import { Observable } from 'rxjs';
import { UserService } from '@core/services/user.service';
import { User } from '@core/models/user';

@Component({
  selector: 'wkd-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent extends ObservableDestroy {

  public readonly userMenus: NbMenuItem[] = [
    {
      title: this.translateService.instant('user_menu.profile'),
      icon: 'fa-user',
      link: '/app/my-profile'
    },
    {
      title: this.translateService.instant('user_menu.logout'),
      icon: 'fa-sign-out'
    }
  ];

  public user$: Observable<User | null>;

  public constructor(userService: UserService,
                     menuService: NbMenuService,
                     private readonly router: Router,
                     private readonly translateService: TranslateService) {
    super();

    this.user$ = userService.getCurrentUser();

    menuService.onItemClick().pipe(
      takeUntil(this.onDestroy$),
      filter((menu: NbMenuBag) => menu.tag === 'user-menu' && menu.item === this.userMenus[1]),
    ).subscribe(() => this.router.navigate(['/', 'sign']));
  }
}
