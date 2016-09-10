import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ReportAssetPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/setting/report-asset/report-asset.html',
})
export class ReportAssetPage {

  constructor(private navCtrl: NavController) {

  }

  popHome(){
    this.navCtrl.popToRoot();
  }

}
