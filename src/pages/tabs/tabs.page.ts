import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ExistingPage } from '../existing/existing.page';
import { NewgardenPage } from '../newgarden/newgarden.page';
import { SummaryPage } from '../summary/summary.page';
import { AlertController } from 'ionic-angular';

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
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
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
