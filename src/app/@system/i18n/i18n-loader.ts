import {TranslateLoader} from '@ngx-translate/core';
import {Observable, of} from 'rxjs';
import { en } from '../../i18n/en';

const langs: any = {
  en
};

export class I18nLoader extends TranslateLoader {

  public getTranslation(lang: string): Observable<any> {
    return of(langs[lang]);
  }
}
