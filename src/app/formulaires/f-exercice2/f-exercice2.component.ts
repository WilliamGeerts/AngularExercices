import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-f-exercice2',
  templateUrl: './f-exercice2.component.html',
  styleUrls: ['./f-exercice2.component.css']
})
export class FExercice2Component {
  form: FormGroup = this._fb.group({
    name:['',[Validators.minLength(4), Validators.required]],
    username:['', [Validators.minLength(4), Validators.required]]
  });
  isSent: boolean = false;

constructor(private _fb:FormBuilder) {
}

  get controlName(): AbstractControl {
    return this.form.controls['name'];
  }
  get controlUsername(): AbstractControl {
    return this.form.controls['username'];
  }
}
