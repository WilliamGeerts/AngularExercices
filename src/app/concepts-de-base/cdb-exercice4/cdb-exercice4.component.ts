import { Component } from '@angular/core';

@Component({
  selector: 'app-cdb-exercice4',
  templateUrl: './cdb-exercice4.component.html',
  styleUrls: ['./cdb-exercice4.component.css']
})
export class CdbExercice4Component {
  value:string = ""
  answer:string = ""

  protected readonly parseInt = parseInt;
  protected readonly isNaN = isNaN;
  protected readonly Number = Number;

  refreshNumber() {
    if(this.value == "") {this.answer = ""}
    else if(Number(this.value) % 2 == 0) {this.answer = "Pair"}
    else if(isNaN(Number(this.value))) {this.answer = "Il ne s'agit pas d'un numérique"}
    else {this.answer = "Impair"}
  }
}
