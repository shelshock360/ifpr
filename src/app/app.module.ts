import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireDatabaseModule, AngularFirestoreModule,
    FormsModule, AngularFireAuthModule,
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyAiwB64M4yQxSx73PEddeUa1RIksFgYXtc",
    authDomain: "ifpr-bac42.firebaseapp.com",
    databaseURL: "https://ifpr-bac42.firebaseio.com",
    projectId: "ifpr-bac42",
    storageBucket: "ifpr-bac42.appspot.com",
    messagingSenderId: "11868818095",
    appId: "1:11868818095:web:bee7b4bd8d44cb6c89e25a",
    measurementId: "G-G0KM18JQJR"

    }),

  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
