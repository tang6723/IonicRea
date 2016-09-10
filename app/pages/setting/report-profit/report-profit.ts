import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ReportProfitPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/setting/report-profit/report-profit.html',
})
export class ReportProfitPage {

  constructor(private navCtrl: NavController) {

  }

  popHome(){
    this.navCtrl.popToRoot();
  }

}
