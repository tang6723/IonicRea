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
  dateissue:string ="2016年9月3日";
  customer:string ="鞍山汽贸";
  customeraddress:string ="鞍山铁东湖南34号";

  private items: any = [
    {imgurl: 'img/fuwa.jpg',id: '123456', name: '商品1', price: 200.00, num: 3, remark: '这是商品1的简介占位'},
    {imgurl: 'img/fuwa.jpg',id: '123457', name: '商品2', price: 1120.00, num: 9, remark: '这是商品2的简介占位'},
    {imgurl: 'img/fuwa.jpg',id: '123458', name: '商品3', price: 280.00, num: 6, remark: '这是商品3的简介占位'},
    {imgurl: 'img/fuwa.jpg',id: '123459', name: '商品4', price: 2450.23, num: 15, remark: '这是商品4的简介占位'},
    {imgurl: 'img/fuwa.jpg',id: '123460', name: '商品5', price: 900, num: 30, remark: '这是商品5的简介占位'}
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
