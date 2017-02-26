import { Component, OnInit } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})

export class CharacterCreationComponent implements OnInit {
  races = ['Greymarche', 'Enrus', 'Remian', 'Korath', 'Kyvan', 'Recaren', 'M\'nar',];
  classes = ['Assassin', 'Commando', 'Soldier', 'Officer', 'Psionic']

  submitted = false;
  firstPhase = false;

  model = new Character('', '', '', [], '', null, null, 0, 0, 0);

  constructor( /*private model: Character*/) { }

  ngOnInit(): void {

  }

  nextPhase(){
  	this.firstPhase = true;
  }

  onSubmit() {
  	this.submitted = true; 
  }

  get diagnostic() { return JSON.stringify(this.model); }
  
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }

}
