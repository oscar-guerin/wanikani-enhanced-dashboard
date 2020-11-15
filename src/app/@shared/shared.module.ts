import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbUserModule
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const COMPONENTS: any[] = [
  LayoutComponent,
  HeaderComponent
];

const MODULES: any[] = [
  CommonModule,
  FormsModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbDialogModule.forRoot(),
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule.forRoot(),
  NbSidebarModule.forRoot(),
  NbSpinnerModule,
  NbUserModule,
  NbEvaIconsModule,
  ReactiveFormsModule,
  RouterModule,
  TranslateModule
];

const PIPES: any[] = [];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES,
    ...PIPES
  ]
})
export class SharedModule {
}
