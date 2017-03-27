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
            name: 'harvest date',
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


showOptions(veggieId, veggieTitle, veggieType){
  
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
          this.updateVegetable(veggieId, veggieTitle, veggieType);
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

updateVegetable(veggieId, veggieTitle, veggieType){
  let prompt = this.alertCtrl.create({
    title: 'Vegetable Name',
    message: "Update the name for this vegetable",
    inputs: [
      {
        name: 'title',
        placeholder: 'Vegetable name',
        value: veggieTitle
      },
      {
        name: 'type',
        placeholder: 'Vegetable type',
        value: veggieType
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
            type: data.title,
          });
        }
      }
    ]
  });
  prompt.present();
}

}
