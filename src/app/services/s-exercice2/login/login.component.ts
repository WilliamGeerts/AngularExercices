import { Component } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any = {};

  constructor(private _authService : AuthService) {
  }

  login() {
    this._authService.login(this.user.mail);
  }
}
