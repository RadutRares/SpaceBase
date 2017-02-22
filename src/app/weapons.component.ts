import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';


export class Weapon {
	name: string;
	damage: string;
  type: string;
  producer: string;
}

@Component({
  moduleId: module.id,
  selector: 'weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css'],
})
export class WeaponsComponent implements OnInit {
  title = 'Weapons Database';
  weapons: FirebaseListObservable<any[]>;

  constructor(
  	private af: AngularFire) {
    //this.weapon = af.database.object('/Weapons/0');
  }

  isActive: boolean;

  weaponsLocal: Weapon[] = [{name: "Roach", damage: "1d8+3 kn", type: "Pistol", producer: "Echelon"},
						{name: "Ghost", damage: "1d8+4 kn", type: "Pistol", producer: "Echelon"}];

  ngOnInit(): void {
  	this.isActive = false;
  	if (this.isActive){
		  this.weapons = this.af.database.list('/Weapons');
  	}

  }
  
}