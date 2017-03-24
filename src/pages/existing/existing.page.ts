import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { MyFormService } from '../../services/myform';
import { RegisterPage } from '../register/register.page';
import { VegetableModel } from '../../models/vegetables.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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

  vegetables: FirebaseListObservable<any>;
  weights: any;
  name: any;
  email: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formData: MyFormService, 
  public alertCtrl: AlertController, public angularFire: AngularFire) {
    this.name = navParams.get("name");
    this.email = navParams.get("email");
    this.vegetables = angularFire.database.list("/vegetables");

    this.weights=[1, 1.5, 1, 2, 3, 4, 5];
  }

  addVegetable(){//read more on Prompt Alerts
      let prompt = this.alertCtrl.create({
        title: 'Enter a new vegetable',
        message: "Enter information for the harvested vegetable",
        inputs: [
          {
            name: 'type',
            placeholder: 'Vegetable type'
          },
          {
            name: 'name',
            placeholder: 'Vegetable name'
          },
          {
            name: 'weight',
            placeholder: 'Weight'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              this.vegetables.push(data);
            }
          }
        ]
      });
      prompt.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExistingPage');
  }

//Function for when an item is selected in the table
  vegetableSelected(item: string) {
    console.log("Selected Item", item);
  }

}
