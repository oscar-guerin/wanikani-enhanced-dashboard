import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  imports: [],
  exports: [],
  providers: [],
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
