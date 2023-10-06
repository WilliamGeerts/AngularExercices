import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-c-exercice3-child',
  templateUrl: './c-exercice3-child.component.html',
  styleUrls: ['./c-exercice3-child.component.css']
})
export class CExercice3ChildComponent {
  @Input()  name: string = "";
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();

  emitNameChanged() {
    this.nameChange.next(this.name);
  }
}
