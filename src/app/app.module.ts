import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home.page';
import { LoginPage } from '../pages/login/login.page';
import { RegisterPage } from '../pages/register/register.page';
import { ExistingPage } from '../pages/existing/existing.page';
import { MyFormService } from '../services/myform';
import { TabsPage } from '../pages/tabs/tabs.page';
import { NewgardenPage } from '../pages/newgarden/newgarden.page';
import { SummaryPage } from '../pages/summary/summary.page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ExistingPage,
    TabsPage,
    NewgardenPage,
    SummaryPage
  
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ExistingPage,
    TabsPage,
    NewgardenPage,
    SummaryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, MyFormService]
})
export class AppModule {}
