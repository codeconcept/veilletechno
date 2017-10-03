import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AddTechnoPage } from '../pages/add-techno/add-techno';
import { SchedulePage } from '../pages/schedule/schedule';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataService } from '../providers/data/data.service';
import { ScheduleListPage } from '../pages/schedule-list/schedule-list';
import { ScheduleDetailsPage } from '../pages/schedule-details/schedule-details';

@NgModule({
  declarations: [
    MyApp,
    AddTechnoPage,
    SchedulePage,
    HomePage,
    ScheduleListPage,
    TabsPage,
    ScheduleDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddTechnoPage,
    SchedulePage,
    ScheduleListPage,
    HomePage,
    TabsPage,
    ScheduleDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService
  ]
})
export class AppModule {}
