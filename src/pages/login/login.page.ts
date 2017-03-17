import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home.page';
import { RegisterPage } from '../register/register.page';
import { User } from '../../models/user.model';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.page.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

model = new User('', '', ''); /*Enter user names here*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToRegister(){
    this.navCtrl.push(RegisterPage); //move to the Home page
    //this.navCtrl.push(TabsPage);
  }

  goToHomePage(){
    this.navCtrl.push(HomePage);
  }

}
