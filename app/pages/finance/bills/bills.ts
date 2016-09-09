import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the BillsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/finance/bills/bills.html',
})
export class BillsPage {

  title:string="收款";

  billid:string="#201609040008";
  billstate:string="草案";
  billtype:string="销售";
  billtotal:string ="30，380.00元";
  dateissue:string ="2016年9月3日";
  customer:string ="鞍山汽贸";
  customeraddress:string ="鞍山铁东湖南34号";




  constructor(private navCtrl: NavController, private navPara: NavParams) {
    this.billid = this.navPara.get("item").id;
    this.billtype=this.navPara.get("item").billtype;
    if(this.billtype=="销售"){
      this.title="收款";
    }else {
      this.title="付款";
    }
  }

}
