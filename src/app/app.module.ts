import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/pages';
import { ExistingPage } from '../pages/pages';
import { NewgardenPage } from '../pages/pages';
import { SummaryPage, TabsPage, LoginPage, RegisterPage } from '../pages/pages';
import { AuthService } from '../providers/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExistingPage, 
    NewgardenPage,
    SummaryPage,
    TabsPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExistingPage,
    NewgardenPage,
    SummaryPage,
    TabsPage,
    LoginPage,
    RegisterPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService]
})
export class AppModule {}
