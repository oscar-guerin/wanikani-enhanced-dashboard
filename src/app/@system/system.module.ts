import { Injector, NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { I18nLoader } from './i18n/i18n-loader';
import * as moment from 'moment';
import { indexOf } from 'lodash';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: I18nLoader,
      },
    }),
  ],
  exports: [
    TranslateModule
  ],
  providers: [],
})
export class SystemModule {
  private static systemInjector: Injector;

  public constructor(@Optional() @SkipSelf() parentModule: SystemModule,
                     translateService: TranslateService,
                     injector: Injector) {
    if (parentModule) {
      throw new Error('SystemModule is already loaded. Import it in the AppModule only');
    }

    SystemModule.systemInjector = injector;

    const defaultLanguage: string = 'en';
    const languages: string[] = ['fr', 'en'];

    translateService.addLangs(languages);
    translateService.setDefaultLang(defaultLanguage);

    let browserLang: string = translateService.getBrowserLang();

    if (indexOf(languages, browserLang) === -1) {
      browserLang = defaultLanguage;
    }

    translateService.use(browserLang);
    moment.locale(translateService.currentLang);
  }

  public static get injector(): Injector {
    return SystemModule.systemInjector;
  }
}
