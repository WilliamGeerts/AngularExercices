import { Component } from '@angular/core';

@Component({
  selector: 'app-cdb-exercice42',
  templateUrl: './cdb-exercice4.2.component.html',
  styleUrls: ['./cdb-exercice4.2.component.css']
})
export class CdbExercice42Component {
  userInput : any = ""
  generateFeedback():string {
    if (!/^\d+(?:\.\d+)?$/.test(this.userInput)) {return "non numérique !"}

    let parseduserInput: number = parseInt(this.userInput);

    return parseduserInput  % 2 === 0 ? "Pair" : "Impair";
  }
}
