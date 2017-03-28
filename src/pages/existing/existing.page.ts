import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
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
  name: any;
  email: any;

/*Inject Angular2 and initialize the vegetables variable*/
  constructor(public navCtrl: NavController, public navParams: NavParams, public formData: MyFormService, 
  public alertCtrl: AlertController, public angularFire: AngularFire, 
  public actionSheetCtrl: ActionSheetController) {
    this.name = navParams.get("name");
    this.email = navParams.get("email");
    this.vegetables = angularFire.database.list("/vegetables");
  }

  addVegetable(){//read more on Prompt Alerts; need harvest date
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
          {
            name: 'date',
            placeholder: 'mm/dd/yyyy'
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


showOptions(veggieId, veggieTitle, veggieType, veggieWeight, harvestDate){
  
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    buttons: [
      {
        text: 'Delete Vegetable',
        role: 'destructive',
        handler: () => {
          this.removeVegetable(veggieId);
        }
      },{
        text: 'Update Name',
        handler: () => {
          this.updateVegetable(veggieId, veggieTitle, veggieType, veggieWeight, harvestDate);
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();

}

removeVegetable(veggieId: string){
  this.vegetables.remove(veggieId);
}

updateVegetable(veggieId, veggieType, veggieTitle, veggieWeight, harvestDate){
  let prompt = this.alertCtrl.create({
    title: 'Vegetable Information',
    message: "Update the information for this vegetable",
    inputs: [
      {
        name: 'type',
        placeholder: 'Vegetable type',
        value: veggieType
      },
      {
        name: 'title',
        placeholder: 'Vegetable name',
        value: veggieTitle
      },
      {
        name: 'weight',
        placeholder: 'Vegetable weight',
        value: veggieWeight
      },
      {
        name: 'date',
        placeholder: 'Harvest date',
        value: harvestDate
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
          this.vegetables.update(veggieId, {
            type: data.type, title: data.title, weight:data.weight, date:data.date});
        }
      }
    ]
  });
  prompt.present();
}

}
