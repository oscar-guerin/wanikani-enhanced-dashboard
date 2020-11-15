import { NgModule, Optional, SkipSelf } from '@angular/core';
import { UserService } from '@core/services/user.service';

export const SERVICES: any = [
  UserService
];

@NgModule({
  imports: [],
  exports: [],
  providers: [
    ...SERVICES
  ],
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
