import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from '@angular/fire/database';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ListVisitComponent } from './components/list-visit/list-visit.component';
import { HomeComponent } from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ListVisitComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'appVisitas'),
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  providers: [
    AngularFirestore,
    AngularFireDatabase,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
