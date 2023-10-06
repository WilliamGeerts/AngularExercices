import { Component } from '@angular/core';

@Component({
  selector: 'app-f-exercice1',
  templateUrl: './f-exercice1.component.html',
  styleUrls: ['./f-exercice1.component.css']
})
export class FExercice1Component {
  user: any ={name: "", username: ""}
  isSent: Boolean = false;

  log() {
    console.log(this.user)
  }
}
