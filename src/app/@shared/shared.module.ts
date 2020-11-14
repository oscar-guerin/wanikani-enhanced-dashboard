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
  NbIconLibraries,
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

const COMPONENTS: any[] = [];

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

  public constructor(iconLibraries: NbIconLibraries) {
    iconLibraries.registerFontPack('fab', {
      packClass: 'fab'
    });
    iconLibraries.registerFontPack('fad', {
      packClass: 'fad'
    });
    iconLibraries.registerFontPack('fal', {
      packClass: 'fal'
    });
    iconLibraries.registerFontPack('far', {
      packClass: 'far'
    });
    iconLibraries.registerFontPack('fas', {
      packClass: 'fas'
    });
    iconLibraries.setDefaultPack('far');
  }
}
