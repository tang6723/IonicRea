import { Component } from '@angular/core';
import {NavController, ActionSheet, AlertController} from 'ionic-angular';

import {CustomerPage} from '../customer/customer';

/*
  Generated class for the CustomerListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/setting/customer-list/customer-list.html',
})
export class CustomerListPage {

  private items:any =
  [
    {id:"111", name:"客户1", address: "北京长安街1号", person: "张三", phone: "1234567", remark: "说明"},
    {id:"222", name:"客户2", address: "北京长安街2号", person: "李四", phone: "1234567", remark: "说明"},
    {id:"333", name:"客户3", address: "北京长安街3号", person: "王五", phone: "1234567", remark: "说明"},
    {id:"444", name:"客户4", address: "北京长安街4号", person: "赵六", phone: "1234567", remark: "说明"}
  ];

  constructor(private navCtrl: NavController, private alertCtrl:AlertController) {

  }

  EditGoods(item: any) {
    this.navCtrl.push(CustomerPage, {"item": item});
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
            for (var i = 0; i < this.items.length; i++) {
              if (this.items[i].id == item.id) {
                this.items = this.items.slice(0, i).concat(this.items.slice(i + 1, this.items.length));
              }
            }
          }
        }
      ]
    });
    alert.present();
  }

  addCustomer()
  {
    this.navCtrl.push(CustomerPage, {});
  }

}
