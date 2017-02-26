import { Component, OnInit } from '@angular/core';
import { Character } from './character';

import { raceDescriptions } from './character-data';
import { classDescriptions } from './character-data';
import { characterStats } from './character-data';
import { StatRoll } from './stat-roll.service';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css'],
  providers: [
  	StatRoll
  ]
})




export class CharacterCreationComponent implements OnInit {
  
  phaseList = 
  [ {'phase' : 'race', 'desc' : 'Please choose a Race'},
  	{'phase': 'class', 'desc' : 'Please choose a Class'},
  	{'phase': 'custom', 'desc' : 'Customize yourslef'},
  	{'phase': 'stats', 'desc' : 'Rolling Stats'},
  	{'phase': 'finish', 'desc' : 'Check Details'}
  ];

  races = raceDescriptions;
  classes = classDescriptions;
  stats = characterStats;

  phaseIndex: number;
  currentPhase: string;
  stage: string;

  rolled = false;
  submitted = false;
  model: Character;
  

  constructor( 
  	private statRoll: StatRoll
  	) { }

  setUpPhase(): void {
  	this.currentPhase = this.phaseList[this.phaseIndex].phase;
  	this.stage = this.phaseList[this.phaseIndex].desc;
  }

  ngOnInit(): void {
  	this.phaseIndex = 3;
  	this.setUpPhase();
  	this.model = new Character('', '', '', '', [], '', null, null, 0, 0, 0, 0, 0, 0, 0, 0);
  }

  choose(value: string, change: string) {
  	change == "race" ? this.model.race = value : this.model.charClass = value;
  	if (change == 'race' && value == 'Tellari'){
  		this.classes.push({class : 'Heirophant', desc : 'An ancient profession of the Tellari'});
  	}
  	this.nextPhase();
  }

  nextPhase(){
  	++this.phaseIndex;
  	this.setUpPhase();
  }

  changeDetails(){
  	this.phaseIndex = 0;
  	this.setUpPhase();
  }

  onSubmit() {
  	if (!this.rolled){
  		this.roll();
  	}
  	this.submitted = true; 
  }

  getStat(stat: string): string {
  	switch (stat) {
  	 	case "Agility":
  	 		return this.model.agi ? this.model.agi.toString() : null;
  	 	case "Martial Skill":
  	 		return this.model.msk ? this.model.msk.toString() : null;
  	 	case "Vitality":
  	 		return this.model.vit ? this.model.vit.toString() : null;
  	 	case "Strength":
  	 		return this.model.str ? this.model.str.toString() : null;
  	 	case "Steadiness":
  	 		return this.model.std ? this.model.std.toString() : null;
  	 	case "Wisdom":
  	 		return this.model.wis ? this.model.wis.toString() : null;	
  	 	case "Intelligence":
  	 		return this.model.int ? this.model.int.toString() : null;	
  	 	case "Charisma":
  	 		return this.model.cha ? this.model.cha.toString() : null;
  	 	default:
  	 		return null;
  	 }
  }

  roll(){
  	this.model.agi = this.statRoll.getStat();
  	this.model.vit = this.statRoll.getStat();
  	this.model.msk = this.statRoll.getStat();
  	this.model.str = this.statRoll.getStat();
  	this.model.std = this.statRoll.getStat();
  	this.model.wis = this.statRoll.getStat();
  	this.model.int = this.statRoll.getStat();
  	this.model.cha = this.statRoll.getStat();
  	this.rolled = true;
  }
}
