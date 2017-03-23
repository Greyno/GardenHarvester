import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user.model';
import { ExistingPage} from '../existing/existing.page';
import { MyFormService } from '../../services/myform';
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.page.html'
})
export class RegisterPage {

  private data: any;
  private isSubmitted: Boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formData: MyFormService) {
    this.data = {
      name: '',
      email: '',
      password: ''
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  onSubmit(myForm){
    var storage = window.localStorage;
    storage.setItem('string', 'value');
    var value = storage.getItem('string');
    this.isSubmitted = true;
    console.log(value);
    console.log('onSubmit');
    
    if(myForm.valid){
      this.formData.name = this.data.name;
      this.formData.email = this.data.email;
      this.formData.password = this.data.password;
      this.navCtrl.push(ExistingPage); //move to a new garden
    }

    storage.setItem('name', this.data.name);
    storage.setItem('email', this.data.email);
    storage.setItem('password', this.data.password);
    console.log(storage.getItem('name'));
  }

model = new User('', '', ''); /*Enter user names here*/
  // registerNewAccount(){

  // }


}
