import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-f-exercice3',
  templateUrl: './f-exercice3.component.html',
  styleUrls: ['./f-exercice3.component.css']
})
export class FExercice3Component {
  form: FormGroup = this._fb.group({
    generalForm: this._fb.group({
      pseudo: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.required],
      mail: ['', Validators.required],
      birthDate: ['', [Validators.required, Validators.pattern(/^\d\d\/\d\d\/\d{4}$/)]]
    }),
    otherForm: this._fb.group({
      continueCourse: [false],
      angularKnowledge: ['', Validators.required],
      gradeCourse: [5]
    })
  })

  constructor(private _fb:FormBuilder) {
  }

  printConsole() {
    console.log(this.form.value)
  }

  autocomplete() {
    this.form.setValue({
      generalForm: {
        pseudo: "Roger",
        password: "roger8test",
        mail: "roger@pro.be",
        birthDate: "10/10/1993"
      },
      otherForm: {
        continueCourse: true,
        angularKnowledge: "both",
        gradeCourse: 10
      }
    })
  }

  get controlPseudo(): AbstractControl {
    return this.form.get('generalForm.pseudo')!!;
  }
}
