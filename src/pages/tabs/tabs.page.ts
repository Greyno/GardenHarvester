import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ExistingPage } from '../existing/existing.page';
import { NewgardenPage } from '../newgarden/newgarden.page';
import { SummaryPage } from '../summary/summary.page';
import { AlertController } from 'ionic-angular';
import { VegetableModel } from '../../models/vegetables.model';
import { HomePage } from '../home/home.page';
import { MyFormService } from '../../services/myform';

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
  name: any;
  
  homePage = HomePage;
  newGardenTab = NewgardenPage;
  existingPageTab = ExistingPage;
  summaryPageTab = SummaryPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, 
  public formData:MyFormService) {
    this.name = navParams.get("name");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  

}
