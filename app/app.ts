import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from './pages/home/home';
import {LoginPage} from "./pages/login/login";



@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>' +
  '<input type="hidden" id="rootUserName" value="">' +
  '<input type="hidden" id="rootRole" value="">' +
  '<input type="hidden" id="rootRealName" value="">'
})

export class MyApp {
  //rootPage: any = HomePage;
  rootPage: any = LoginPage;

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
