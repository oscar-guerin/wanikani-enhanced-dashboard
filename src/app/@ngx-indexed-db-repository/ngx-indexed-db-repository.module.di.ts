import { InjectionToken } from '@angular/core';
import { PageBuilder, ResponseBuilder } from '@witty-services/ngx-repository';

// TODO review typing in file

/** @ignore */
export const INDEXED_DB_PAGE_BUILDER_TOKEN: InjectionToken<PageBuilder<any>> = new InjectionToken<PageBuilder<any>>('INDEXED_DB_PAGE_BUILDER_TOKEN');

/** @ignore */
export const INDEXED_DB_CREATE_RESPONSE_BUILDER: InjectionToken<ResponseBuilder<any>> = new InjectionToken<ResponseBuilder<any>>('INDEXED_DB_CREATE_RESPONSE_BUILDER');

/** @ignore */
export const INDEXED_DB_FIND_ONE_RESPONSE_BUILDER: InjectionToken<ResponseBuilder<any>> = new InjectionToken<ResponseBuilder<any>>('INDEXED_DB_FIND_ONE_RESPONSE_BUILDER');
