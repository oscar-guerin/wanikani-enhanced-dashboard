import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'wkd-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

  public menuItems: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/app/dashboard',
      home: true
    }
  ];
}
