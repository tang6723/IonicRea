import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

/*
 Generated class for the ReportPayoutPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/setting/report-payout/report-payout.html',
})
export class ReportPayoutPage {

  typeList: string = "class";
  isAndroid: boolean = false;

  constructor(private navCtrl: NavController, private platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  popHome() {
    this.navCtrl.popToRoot();
  }

}
