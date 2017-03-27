import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs.page';
import { MyFormService } from '../../services/myform';
import { ExistingPage } from '../existing/existing.page'
import { LoginPage } from '../login/login.page';
//import { NewgardenPage, SummaryPage, TabsPage} from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  private data: any;
  constructor(public navCtrl: NavController, public formData: MyFormService, public navParam: NavParams) {
   //this.name = navParam.get("name");
   this.data = {
      name: '',
    }
  }

  goToExistingGarden(){
    this.navCtrl.push(TabsPage); //move to the tabs page
  }

  logout(){
    this.navCtrl.push(LoginPage); //move back to the login page w/ logout
  }

  // goToNewGardenSetup(){
  //   this.navCtrl.push(NewgardenPage); //move to a new garden
  // }

  //goToSummary()
  // { 
  //   this.navCtrl.push(SummaryPage); //move to the summary page
  // }

}
