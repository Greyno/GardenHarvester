import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExistingPage } from '../pages';
import { NewgardenPage } from '../pages';
import { SummaryPage } from '../pages';
import { TabsPage } from '../pages';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

/* Use constructor injection to inject the navcontroller into the class */
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToExistingGarden(){
    this.navCtrl.push(TabsPage); //move to the tabs page
    //this.navCtrl.push(TabsPage);
  }

  goToNewGardenSetup(){
    this.navCtrl.push(NewgardenPage); //move to a new garden
  }

  goToSummary()
  { 
    this.navCtrl.push(SummaryPage); //move to the summary page
  }
  
}
