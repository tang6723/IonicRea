import { Component } from '@angular/core';
import { NavController,  AlertController} from 'ionic-angular';

import {GoodsPage} from '../goods/goods';

/*
  Generated class for the GoodsListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/setting/goods-list/goods-list.html',
})
export class GoodsListPage {
  billTime1: string = "商品类";
  billTime2: string = "费用类";

  private GoodsItems1: any = [
    {imgurl: 'ios-flag-outline', id: '123456', name: '商品1', price: 200.00, num: 3, specification: '规格33MM'},
    {imgurl: 'ios-flame-outline', id: '123457', name: '商品2', price: 1120.00, num: 9, specification: '规格66MM'},
    {imgurl: 'ios-flash-outline', id: '123458', name: '商品3', price: 280.00, num: 6, specification: '规格40MM'},
    {imgurl: 'ios-flash-outline', id: '123459', name: '商品4', price: 2450.23, num: 15, specification: '规格20MM'},
    {imgurl: 'ios-flash-outline', id: '123460', name: '商品5', price: 900, num: 30, specification: '规格10MM'}
  ];

  private GoodsItems2: any = [
    {imgurl: 'ios-flag-outline', id: '654321', name: '运输费', price: 200.00, num: 3, specification: '说明1'},
    {imgurl: 'ios-flame-outline', id: '654322', name: '安装费', price: 1120.00, num: 9, specification: '说明2'},
    {imgurl: 'ios-flash-outline', id: '654323', name: '莫名其妙费', price: 280.00, num: 6, specification: '说明3'},
  ];

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {

  }

  EditGoods(item: any) {
    this.navCtrl.push(GoodsPage, {"item": item});
  }

  DeleteGoods(item: any) {
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
            if (item.id.substr(0, 1) != "6") {
              for (var i = 0; i < this.GoodsItems1.length; i++) {
                if (this.GoodsItems1[i].id == item.id) {
                  this.GoodsItems1 = this.GoodsItems1.slice(0, i).concat(this.GoodsItems1.slice(i + 1, this.GoodsItems1.length));
                }
              }
            }
            else {
              for (var i = 0; i < this.GoodsItems2.length; i++) {
                if (this.GoodsItems2[i].id == item.id) {
                  this.GoodsItems2 = this.GoodsItems2.slice(0, i).concat(this.GoodsItems2.slice(i + 1, this.GoodsItems2.length));
                }
              }
            }
          }
        }
      ]
    });
    alert.present();
  }

}
