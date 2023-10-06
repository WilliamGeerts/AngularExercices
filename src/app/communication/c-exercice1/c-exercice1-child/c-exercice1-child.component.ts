import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-c-exercice1-child',
  templateUrl: './c-exercice1-child.component.html',
  styleUrls: ['./c-exercice1-child.component.css']
})
export class CExercice1ChildComponent {
  @Input() varToRead: string = ""
}
