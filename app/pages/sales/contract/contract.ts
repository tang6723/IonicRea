import { Component, ViewChild } from '@angular/core';
import {NavController, Slides} from 'ionic-angular';

import {ContractListPage} from '../contract-list/contract-list';

/*
  Generated class for the ContractPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sales/contract/contract.html',
})
export class ContractPage {

  @ViewChild("myClider") slider: Slides;

  billid:string="#201609040008";
  billstate:string="草案";
  billtotal:string ="30，380.00";
  freight:string ="0.00";
  dateissue:string ="2016年9月3日";
  customer:string ="鞍山汽贸";
  telephone:string ="13599915899";
  customeraddress:string ="辽宁省鞍山市铁东区湖南街34号";

  private items: any = [
    {imgurl: 'ios-flag-outline',id: '123456', name: '商品1', price: 200.00, num: 3, specification: '规格33MM'},
    {imgurl: 'ios-flame-outline',id: '123457', name: '商品2', price: 1120.00, num: 9, specification: '规格66MM'},
    {imgurl: 'ios-flash-outline',id: '123458', name: '商品3', price: 280.00, num: 6, specification: '规格40MM'},
    {imgurl: 'ios-flash-outline',id: '123459', name: '商品4', price: 2450.23, num: 15, specification: '规格20MM'},
    {imgurl: 'ios-flash-outline',id: '123460', name: '商品5', price: 900, num: 30, specification: '规格10MM'}
  ];

  constructor(private navCtrl: NavController) {

  }

  gotoSlider(i: number){
    this.slider.slideTo(i, 300);
  }

  gotoMore()
  {
    this.navCtrl.push(ContractListPage,{});
  }

}
