import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Planet } from './planet/planet';
import { PlanetService } from './planet.service';
import 'rxjs/add/operator/switchMap';
 
@Component({
  moduleId: module.id,
  selector: 'planet-detail',
  templateUrl: 'planet-detail.component.html',
  styleUrls: ['planet-detail.component.css'],
})

export class PlanetDetailComponent implements OnInit {
  	planet: Planet;
  	stringExtension: string;

  	constructor(
	  private planetService: PlanetService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

	ngOnInit(): void {
	  this.route.params
	    .switchMap((params: Params) => this.planetService.getPlanet(+params['id']))
	    .subscribe(planet => this.planet = planet);
	}

	addExtension(): void {
		this.planet.description += " " + this.stringExtension;
	}

	save(): void {
		this.planetService.update(this.planet)
    		.then(() => this.goBack());
	}

	goBack(): void {
	  this.location.back();
	}
}