import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userConnected: any = {}

  constructor() { }

  public login(mail: string) {
    this._userConnected.mail = mail;
  }

  public isConnected(): boolean {
    return !!Object.keys(this._userConnected).length;
  }

  public get mail(): string {
    return this._userConnected.mail ?? "";
  }
}
