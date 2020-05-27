import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { config } from './firebase';

import { AngularFireModule                } from '@angular/fire';
import {AngularFireAuthModule} from "@angular/fire/auth";

import {AngularFirestoreModule} from "@angular/fire/firestore";
import { HomePagePipe } from './home-page.pipe';

@NgModule({
  declarations: [AppComponent, HomePagePipe],
  entryComponents: [],
  imports: [ BrowserModule,
     
      IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireModule.initializeApp(config),
      AngularFireAuthModule,
       ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
