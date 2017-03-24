import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { HomePage } from '../pages/home/home.page';
import { LoginPage } from '../pages/login/login.page';
import { RegisterPage } from '../pages/register/register.page';
import { ExistingPage } from '../pages/existing/existing.page';
import { TabsPage } from '../pages/tabs/tabs.page';
import { NewgardenPage } from '../pages/newgarden/newgarden.page'
import { SummaryPage } from '../pages/summary/summary.page'

//import { LoginPage, TabsPage, HomePage, RegisterPage} from '../pages';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage = HomePage;
  rootPage = LoginPage;
  //LoginPage;
  items: FirebaseListObservable<any[]>;

  constructor(platform: Platform, af: AngularFire) {
    this.items = af.database.list('/items');
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
