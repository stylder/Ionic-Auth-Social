import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Facebook
import { Facebook } from '@ionic-native/facebook';

// Google+
import { GooglePlus } from '@ionic-native/google-plus';

// Providers
import { DataProvider } from '../providers/data';
import { AuthProvider } from '../providers/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAoBPLS7FIlr4nm27rsKdjJfv4XJxpru2Q",
  authDomain: "taller-utez.firebaseapp.com",
  databaseURL: "https://taller-utez.firebaseio.com",
  projectId: "taller-utez",
  storageBucket: "taller-utez.appspot.com",
  messagingSenderId: "1059387814946"
};


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    AuthProvider,
    Keyboard,
    SplashScreen,
    StatusBar,
    Facebook,
    GooglePlus
  ]
})
export class AppModule {}
