import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"pets-b7682","appId":"1:1057219605493:web:0502e751810bb0eb33e6bc","storageBucket":"pets-b7682.appspot.com","apiKey":"AIzaSyA9B0RTp6gg3gOsqi6rkJUIwc7eIOXFD8Y","authDomain":"pets-b7682.firebaseapp.com","messagingSenderId":"1057219605493","measurementId":"G-GZXG9N6LTG"})), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
