import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyFormService } from '../../services/myform';
import { RegisterPage } from '../register/register.page';
import { VegetableModel } from '../../models/vegetables.model';

/*
  Generated class for the Existing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-existing',
  templateUrl: 'existing.page.html'
})
export class ExistingPage {

  vegetables: any;
  weights: any;
  name: any;
  email: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formData: MyFormService) {
    this.name = navParams.get("name");
    this.email = navParams.get("email");
    this.vegetables = ['Pepper', 
    'Tomato', 
    'Jalapeno', 
    'Cucumber', 
    'Basil', 
    'Carrot', 
    'Lettuce',
    'Sweet peas',
    'Squash',
    'Eggplant'];

    this.weights=[1, 1.5, 1, 2, 3, 4, 5];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExistingPage');
  }

//Function for when an item is selected in the table
  vegetableSelected(item: string) {
    console.log("Selected Item", item);
  }

}
