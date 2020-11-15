import { NgModule } from '@angular/core';

import { DashboardComponent } from './components/dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {
}
