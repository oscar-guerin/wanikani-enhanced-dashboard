import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FIREBASE_APP_TOKEN } from './app.module.di';
import { CoreModule } from '@core/core.module';
import { SystemModule } from '@system/system.module';
import firebase from 'firebase/app';
import { NbThemeModule } from '@nebular/theme';
import App = firebase.app.App;

export function initializeApp(): App {
  return firebase.initializeApp({
    apiKey: 'AIzaSyDzJ2cAnpyhecUKXjSv5DJv5svW4sCW0hw',
    authDomain: 'wanikani-enhanced-dashboard.firebaseapp.com',
    databaseURL: 'https://wanikani-enhanced-dashboard.firebaseio.com',
    projectId: 'wanikani-enhanced-dashboard',
    storageBucket: 'wanikani-enhanced-dashboard.appspot.com',
    messagingSenderId: '152578202323',
    appId: '1:152578202323:web:65de5176face9a17715226',
    measurementId: 'G-294G1YFSP7'
  });
}

const PROVIDERS: Provider[] = [
  {
    provide: FIREBASE_APP_TOKEN,
    useFactory: initializeApp,
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SystemModule,
    NbThemeModule.forRoot(),
  ],
  providers: [
    ...PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
