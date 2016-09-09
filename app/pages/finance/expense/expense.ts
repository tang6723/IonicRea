import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ExpensePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/finance/expense/expense.html',
})
export class ExpensePage {

  billid:string="#201609040008";
  billstate:string="草案";
  billtype:string="销售";
  billtotal:string ="3，380.00";
  dateissue:string ="2016年9月3日";
  customer:string ="微小宝";
  customeraddress:string ="鞍山铁东湖南34号";

  constructor(private navCtrl: NavController) {

  }

}
