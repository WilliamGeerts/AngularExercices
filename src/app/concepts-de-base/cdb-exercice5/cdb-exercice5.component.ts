import { Component } from '@angular/core';
import {Computer} from "./computer";

@Component({
  selector: 'app-cdb-exercice5',
  templateUrl: './cdb-exercice5.component.html',
  styleUrls: ['./cdb-exercice5.component.css']
})
export class CdbExercice5Component {
  computers: Computer[] = [
    {
      name: 'Appoul',
      price: 59.99,
      isPowerful: false,
    },
    {
      name: 'Msou',
      price: 59.99,
      isPowerful: false,
    },
    {
      name: 'Acou',
      price: 59.99,
      isPowerful: false,
    },
    {
      name: 'Omou',
      price: 59.99,
      isPowerful: false,
    }
  ]
}
