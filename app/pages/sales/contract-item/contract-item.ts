import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NavParams} from 'ionic-angular';

/*
  Generated class for the ContractItemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sales/contract-item/contract-item.html',
})
export class ContractItemPage {

  billid:string="#201609040008";
  billstate:string="草案";
  billtotal:string ="30，380.00";
  freight:string ="0.00";
  dateissue:string ="2016年9月3日";
  customer:string ="鞍山汽贸";
  telephone:string ="13599915899";
  customeraddress:string ="辽宁省鞍山市铁东区湖南街34号";

  public firstParam:any;
  public secondParam:any;

  constructor(private navCtrl: NavController,private  navParams: NavParams) {
    this.firstParam=navParams.get('id');
    this.secondParam=navParams.get('type');


  }

}
