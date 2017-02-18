import { Component, OnInit } from '@angular/core';

import { Planet } from '../planet/planet'
import { PlanetService } from '../planet.service'
import { PlanetSearchComponent } from '../planet-search.component';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent {
	planets: Planet[] = [];

	constructor(private planetService: PlanetService) {}

	ngOnInit(): void {
		this.planetService.getPlanets()
			.then(planets => this.planets = planets.slice(1,5))
	}
}