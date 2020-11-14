import { InjectionToken } from '@angular/core';
import firebase from 'firebase/app';
import App = firebase.app.App;

export const FIREBASE_APP_TOKEN: InjectionToken<App> = new InjectionToken<App>('FIREBASE_APP_TOKEN');
