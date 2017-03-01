import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

/* Create a user object to hold info for login*/
/*see: https://devdactic.com/login-ionic-2/*/
export class User{
  private _name: String;
  private _email: String;

  constructor(name: string, email: string) {
    this._name = name;
    this._email = email;
  }

get name(){
    return this._name;
}

set name(newVal){
    console.log('Set name = ' + newVal);
    this._name=newVal;
}

get email(){
    return this._email;
}

set email(newVal){
    console.log('Set email = ' + newVal);
    this._email = newVal;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;

  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

}
