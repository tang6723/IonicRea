import { Component, ViewChild } from '@angular/core';
import {NavController, Slides, AlertController} from 'ionic-angular';

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
  customerList; any;

  private items: any = [
    {imgurl: 'ios-flag-outline',id: '123456', name: '商品1', price: 200.00, num: 3, specification: '规格33MM'},
    {imgurl: 'ios-flame-outline',id: '123457', name: '商品2', price: 1120.00, num: 9, specification: '规格66MM'},
    {imgurl: 'ios-flash-outline',id: '123458', name: '商品3', price: 280.00, num: 6, specification: '规格40MM'},
    {imgurl: 'ios-flash-outline',id: '123459', name: '商品4', price: 2450.23, num: 15, specification: '规格20MM'},
    {imgurl: 'ios-flash-outline',id: '123460', name: '商品5', price: 900, num: 30, specification: '规格10MM'}
  ];

  initializeEmployeeList() {
    this.customerList = [
      {"id": "010101", "name": "客户1", "telephone": '12345678', "deptname": "联系人1", "sex": "ios-woman", "customeraddress": "客户1地址"},
      {"id": "010102", "name": "客户2", "telephone": '7654321', "deptname": "联系人2", "sex": "ios-man", "customeraddress": "客户2地址"},
      {"id": "010103", "name": "客户3", "telephone": 'gsdfgsdfgsdf', "deptname": "联系人3", "sex": "ios-man", "customeraddress": "客户3地址"},
      {"id": "010111", "name": "客户4", "telephone": '7895456564564', "deptname": "联系人4", "sex": "ios-woman", "customeraddress": "客户4地址"},
      {"id": "010121", "name": "客户5", "telephone": '0A45564560A', "deptname": "联系人5", "sex": "ios-man", "customeraddress": "客户5地址"},
      {"id": "010104", "name": "客户6", "telephone": '0A07868678678A', "deptname": "联系人6", "sex": "ios-man", "customeraddress": "客户6地址"}
    ];
  }
  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {
    this.initializeEmployeeList();
  }

  gotoSlider(i: number){
    this.slider.slideTo(i, 300);
  }

  gotoHome(){
    this.navCtrl.popToRoot();
  }

  gotoMore()
  {
    this.navCtrl.push(ContractListPage,{});
  }

  showCustomerRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('客户');
    for(var i=0;i<this.customerList.length;i++){
      alert.addInput({
        type:'radio',
        label: this.customerList[i].name ,
        value:  this.customerList[i].id
      });
    }
    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        for(var i=0;i<this.customerList.length;i++) {
          if(this.customerList[i].id == data)
          {
            this.customer = this.customerList[i].name;
            this.telephone = this.customerList[i].telephone;
            this.customeraddress = this.customerList[i].customeraddress;
          }
        }

          console.log(data);
      }
    });
    alert.present();
  }

}
