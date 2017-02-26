import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { Planet } from '../planet/planet'
import { PlanetService } from '../planet.service'
import { PlanetSearchComponent } from '../planet-search.component';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
	planets: Planet[] = [];
  	armor: FirebaseListObservable<any[]>;

	constructor(
		private planetService: PlanetService,
		private af: AngularFire
		) {}

	ngOnInit() {
		this.planetService.getPlanets()
			.then(planets => this.planets = planets.slice(1,5));

		console.log('Got here?');

  		this.armor = this.af.database.list('/armor', {
  			query : {
  				limitToFirst: 4
  			}
  		});
	}
}