import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';
import { Keyboard } from '@ionic-native/keyboard';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { PostProvider } from '../providers/post-provider';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/Storage';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SearchsubinventoryPage } from '../pages/searchsubinventory/searchsubinventory';
import { SearchlocatorPage } from '../pages/searchlocator/searchlocator';
import { OpnameproccessPage } from '../pages/opnameproccess/opnameproccess';
import { ListopnamePage } from '../pages/listopname/listopname';
import { ListopnamedetailPage } from '../pages/listopnamedetail/listopnamedetail';
import { ListopnameserverdetailPage } from '../pages/listopnameserverdetail/listopnameserverdetail';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    SearchsubinventoryPage,
    SearchlocatorPage,
    OpnameproccessPage,
    ListopnamePage,
    ListopnamedetailPage,
    ListopnameserverdetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    SearchsubinventoryPage,
    SearchlocatorPage,
    OpnameproccessPage,
    ListopnamePage,
    ListopnamedetailPage,
    ListopnameserverdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PostProvider,
    BarcodeScanner,
    SQLite,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
