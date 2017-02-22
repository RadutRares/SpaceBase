import { Component, OnInit, Input } from '@angular/core';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.css']
})

export class WeaponDetailComponent implements OnInit {
  weapon: FirebaseObjectObservable<any>;

  constructor(
  	  private af: AngularFire,
  	  private route: ActivatedRoute,
	  private location: Location
	) {}

  ngOnInit() {
	this.route.params
		.switchMap((params: Params) => this.af.database.object('/0/weapons/'+params['id']))
    	.subscribe(weapon => this.weapon = weapon);
  }

}
