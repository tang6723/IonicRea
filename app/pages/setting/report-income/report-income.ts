import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ReportIncomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/setting/report-income/report-income.html',
})
export class ReportIncomePage {

  constructor(private navCtrl: NavController) {

  }

  popHome(){
    this.navCtrl.popToRoot();
  }

}
