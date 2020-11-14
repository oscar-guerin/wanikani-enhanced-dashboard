import { NgModule } from '@angular/core';
import { SignComponent } from './components/sign.component';
import { SignRoutingModule } from './sign-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [SignComponent],
  imports: [
    SignRoutingModule,
    SharedModule
  ]
})
export class SignModule {
}
