import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.css']
})
export class ArmorComponent implements OnInit {
  armor: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { }

  ngOnInit() {
  	this.armor = this.af.database.list('/1/armor');
  }

}
