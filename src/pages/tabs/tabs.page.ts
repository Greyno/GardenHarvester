import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewgardenPage, SummaryPage, ExistingPage } from '../pages';

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
  summaryPageTab =  SummaryPage;
  existingPageTab = ExistingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
