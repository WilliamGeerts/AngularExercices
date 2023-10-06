import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {Person} from "./person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  public getPersons() : Observable<Person[]> {
    return of([
      {
        firstName: "Roger",
        surName: "Pal"
      },
      {
        firstName: "William",
        surName: "Geerts"
      },
      {
        firstName: "Jason",
        surName: "Chalier"
      }
    ]).pipe(delay(2000));
  }
}
