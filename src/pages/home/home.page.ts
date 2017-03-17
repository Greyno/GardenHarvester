import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs.page';
//import { NewgardenPage, SummaryPage, TabsPage} from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  // goToExistingGarden(){
  //   this.navCtrl.push(TabsPage); //move to the tabs page
  //   //this.navCtrl.push(TabsPage);
  // }

  // goToNewGardenSetup(){
  //   this.navCtrl.push(NewgardenPage); //move to a new garden
  // }

  //goToSummary()
  // { 
  //   this.navCtrl.push(SummaryPage); //move to the summary page
  // }

}
