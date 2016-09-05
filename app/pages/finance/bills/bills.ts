import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the BillsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/finance/bills/bills.html',
})
export class BillsPage {

  billid:string="#201609040008";
  billstate:string="草案";
  billtotal:string ="30，380.00元";
  dateissue:string ="2016年9月3日";
  customer:string ="鞍山汽贸";
  customeraddress:string ="鞍山铁东湖南34号";




  constructor(private navCtrl: NavController) {

  }

}
