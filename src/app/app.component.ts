import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage, TabsPage, HomePage, RegisterPage} from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage = HomePage; 
  rootPage = LoginPage;

//see: https://webcake.co/exploring-nav-hierarchy-in-the-ionic-2-tabs-page/
//possible help with getting tabs to show on another page?

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
