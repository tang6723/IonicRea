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

  stock:string = "stock1";
  public myDate:string;
  typeList = "Type";
  isAndroid: boolean = false;





  constructor(private navCtrl: NavController) {
    this.isAndroid = false;


    this.myDate = new Date().toISOString();
    setInterval(() => this.myDate = new Date().toISOString(), 1000);
  }

  popHome(){
    this.navCtrl.popToRoot();
  }

}
