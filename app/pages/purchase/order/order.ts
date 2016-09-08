import { Component , ViewChild} from '@angular/core';
import { NavController,Slides, AlertController, NavParams } from 'ionic-angular';

import {OrderItemPage} from '../order-item/order-item';
import {OrderListPage} from '../order-list/order-list';
import {PurchaseGoodsListPage} from '../purchase-goodslist/purchase-goodslist';

/*
  Generated class for the OrderPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/purchase/order/order.html',
})
export class OrderPage {

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
  typeTmp: string;

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

  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private  navParams: NavParams) {
    this.initializeEmployeeList();

  }

  gotoSlider(i: number){
    this.slider.slideTo(i, 300);
  }

  popHome(){
    this.navCtrl.popToRoot();
  }

  pushMore()
  {
    this.navCtrl.push(OrderListPage,{});
  }


  pushItem(index: number)
  {

    switch (index) {
      case 1:
        this.typeTmp = '审批';
        break;
      case 2:
        this.typeTmp = '付款';
        break;
      case 3:
        this.typeTmp = '发票';
        break;
      case 4:
        this.typeTmp = '验收';
        break;
      case 5:
        this.typeTmp = '入库';
        break;
    }

    this.navCtrl.push(OrderItemPage,{
      id:"123",
      type:this.typeTmp

    });
  }

  pushGoodsItem(){
    this.navCtrl.push(PurchaseGoodsListPage, {'temlist': this.items});
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

  EditGoods(item: any){
    let alert = this.alertCtrl.create({
      title: '修改数量',
      inputs:[
        {
          name: 'number',
          placeholder: '商品数量',
          value: item.num
        }
      ],
      buttons:[
        {
          text: '取消',
          role: 'cancel',
          handler: data => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
            item.num = data.number;
            //console.log(data);
          }
        }
      ]
    });
    alert.present();
  }

  DeleteGoods(item: any){
    let alert = this.alertCtrl.create({
      title: '您确定要删除这条商品吗？',
      buttons: [
        {
          text: '不删除',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: '删除',
          handler: data => {
            //this.items.remove(d=>d.id  = data.id);
            for(var i=0;i<this.items.length;i++)
            {
              if(this.items[i].id == item.id) {
                this.items = this.items.slice(0,i).concat(this.items.slice(i+1,this.items.length));
              }
            }
            console.log(this.items);
          }
        }
      ]
    });
    alert.present();
  }


}
