import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

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
  }

  ngOnInit(): void {
		this.weapons = this.af.database.list('/0/weapons');
  }

}