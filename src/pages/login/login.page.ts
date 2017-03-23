import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home.page';
import { RegisterPage } from '../register/register.page';
import { User } from '../../models/user.model';
import { MyFormService } from '../../services/myform';
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

  private data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formData:MyFormService) {
    this.data = {
      name: '',
      email: '',
      password: ''
    }
  }

model = new User('', '', ''); /*Enter user names here*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToRegister(){
    this.navCtrl.push(RegisterPage); //move to the Home page
    //this.navCtrl.push(TabsPage);
  }

isValid(){
  var storage = window.localStorage;
if(this.data.name != storage.getItem('name')){
  return false;
}
if(this.data.email != storage.getItem('email')){
  return false;
}
if(this.data.password != storage.getItem('password')){
  return false;
} return true;
}
  
  goToHomePage(){
    console.log(this.data);
    
    //if(this.isValid()){
      this.navCtrl.push(HomePage, {
      name: this.data.name
    });
    //}
  
  }

}
