import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RegalPage } from '../pages/regal/regal';
import { NewPage } from '../pages/new/new';
import { StatistikenPage } from '../pages/statistiken/statistiken';
import { TabsPage } from '../pages/tabs/tabs';

import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../providers/data/data';
//import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    RegalPage,
    NewPage,
    StatistikenPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegalPage,
    NewPage,
    StatistikenPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Data,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //DataProvider
  ]
})
export class AppModule {}
