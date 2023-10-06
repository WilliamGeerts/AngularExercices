import { Component } from '@angular/core';
import {formatNumber} from "@angular/common";

@Component({
  selector: 'app-cdb-exercice3',
  templateUrl: './cdb-exercice3.component.html',
  styleUrls: ['./cdb-exercice3.component.css']
})
export class CdbExercice3Component {

  incrementation:number = 1
  number:number = 0
  plusOne() {
    this.number = this.number + this.incrementation
  }
}
