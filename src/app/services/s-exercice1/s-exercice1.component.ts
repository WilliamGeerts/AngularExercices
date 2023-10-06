import {Component, OnInit} from '@angular/core';
import {PersonService} from "./person.service";
import {Person} from "./person";

@Component({
  selector: 'app-s-exercice1',
  templateUrl: './s-exercice1.component.html',
  styleUrls: ['./s-exercice1.component.css']
})
export class SExercice1Component implements OnInit {

  persons: Person[] = [];

  ngOnInit() {
    this.getPersons();
  }

  constructor(private _personService: PersonService) {
  }

  getPersons() {
    this._personService.getPersons().subscribe(personsFromService => this.persons = personsFromService)
  }
}
