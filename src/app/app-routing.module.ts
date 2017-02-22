import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { PlanetDetailComponent } from './planet-detail.component';
import { PlanetComponent } from './planet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { ArmorComponent } from './armor/armor.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{ path: 'planets', component: PlanetComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'detail/:id', component: PlanetDetailComponent },
	{ path: 'weapons', component: WeaponsComponent },
	{ path: 'weapondetail/:id', component: WeaponDetailComponent },
	{ path: 'armor', component: ArmorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

