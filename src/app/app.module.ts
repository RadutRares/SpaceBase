import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }   from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AngularFireModule } from 'angularfire2';

import { AppComponent }  from './app.component';

import { PlanetDetailComponent } from './planet-detail.component';
import { PlanetComponent } from './planet.component';
import { PlanetService } from './planet.service';
import { PlanetSearchComponent } from './planet-search.component';

import { DashboardComponent } from './dashboard/dashboard.component'
import { WeaponsComponent } from './weapons/weapons.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { ArmorComponent } from './armor/armor.component'

export const firebaseConfig = {
    apiKey: "AIzaSyCl50N55EyCKpDCnmuJZxNGC6K4CJTjoDo",
    authDomain: "spacebase-4c000.firebaseapp.com",
    databaseURL: "https://spacebase-4c000.firebaseio.com",
    storageBucket: "spacebase-4c000.appspot.com",
    messagingSenderId: "1070743232907"
};

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
  	AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  declarations: [ 
  	AppComponent,
  	PlanetDetailComponent,
  	PlanetComponent,
  	DashboardComponent,
    PlanetSearchComponent,
    WeaponsComponent,
    WeaponDetailComponent,
    ArmorComponent,
  ],
  providers: [
  	PlanetService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


