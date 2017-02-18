import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Planet } from './planet/planet';
import { PlanetService } from './planet.service'

@Component({
  moduleId: module.id,
  selector: 'planet',
  templateUrl: './planet.component.html',
  styleUrls: [ './planet.component.css' ],
  providers: [PlanetService]	
})

export class PlanetComponent implements OnInit { 
	constructor(
		private planetService: PlanetService,
		private router: Router	
	) { }

	planets: Planet[];
	selectedPlanet: Planet;

	onSelect(planet: Planet): void {
  		this.selectedPlanet = planet;
	}

	ngOnInit(): void {
		this.getPlanets();
	}

	getPlanets(): void {
		this.planetService.getPlanets().then(planets => this.planets = planets);
  	}

  	add(name: string): void {
	  name = name.trim();
	  if (!name) { return; }
	  this.planetService.create(name)
	    .then(planet => {
	      this.planets.push(planet);
	      this.selectedPlanet = null;
	    });
	}

	delete (planet: Planet): void {
		this.planetService
			.delete(planet.id)
			.then(() => {
				this.planets = this.planets.filter(p => p !== planet);
				if (this.selectedPlanet === planet) { this.selectedPlanet = null }
			});
	}

  	gotoDetail(): void{
  		this.router.navigate(['/detail', this.selectedPlanet.id]);
  	}
}
