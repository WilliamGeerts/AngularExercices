import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cdb-exercice6',
  templateUrl: './cdb-exercice6.component.html',
  styleUrls: ['./cdb-exercice6.component.css']
})
export class CdbExercice6Component implements OnInit {
  numbers: number[] = []

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      let stringNumber = (Math.random() * 100).toFixed(0)
      let randomNumber = parseInt(stringNumber);
      this.numbers.push(randomNumber)
    }
  }

  deleteNumber(numToDelete: number) {
    this.numbers = this.numbers.filter(num => num !== numToDelete);
  }

}
