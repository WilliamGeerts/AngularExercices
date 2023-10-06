import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-c-exercice2-child',
  templateUrl: './c-exercice2-child.component.html',
  styleUrls: ['./c-exercice2-child.component.css']
})
export class CExercice2ChildComponent {
  @Output() numberCreated: EventEmitter<number> = new EventEmitter<number>();

  sendNumber() {
    this.numberCreated.next(Math.random() * 100);
  }
}
