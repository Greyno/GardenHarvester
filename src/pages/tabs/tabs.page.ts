import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ExistingPage } from '../existing/existing.page';
import { NewgardenPage } from '../newgarden/newgarden.page';
import { SummaryPage } from '../summary/summary.page';
import { AlertController } from 'ionic-angular';
import { VegetableModel } from '../../models/vegetables.model';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.page.html'
})
export class TabsPage {

  newGardenTab = NewgardenPage;
  existingPageTab = ExistingPage;
  summaryPageTab = SummaryPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  openModal(){//read more on Prompt Alerts
    let prompt = this.alertCtrl.create({
      title: 'Enter a new vegetable',
      message: "Enter information for the harvested vegetable",
      inputs: [
        {
          type: 'type',
          placeholder: 'Vegetable type'
        },
        {
          name: 'name',
          placeholder: 'Vegetable name'
        },
        {
          type: 'weight',
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
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
