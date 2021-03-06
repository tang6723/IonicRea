import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {OrderPage} from '../order/order';

/*
  Generated class for the OrderListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/purchase/order-list/order-list.html',
})
export class OrderListPage {

  billTime1:string="2016年9月";
  billTime2:string="2016年8月";
  billTime3:string="2016年7月";
  billTime4:string="2016年6月";

  private items1: any = [
    {imgurl: 'ios-flag-outline', id: '123456', customer: '客户1',billno: '#201609040008', dateissue: '09-04', billstate: '草案',total: 30080  },
    {imgurl: 'ios-flame-outline',id: '123457', customer: '客户2',billno: '#201609040007', dateissue: '09-04', billstate: '执行',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123458', customer: '客户3',billno: '#201609040006', dateissue: '09-04', billstate: '审核',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123459', customer: '客户4',billno: '#201609040005', dateissue: '09-04', billstate: '审核',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123460', customer: '客户5',billno: '#201609040004', dateissue: '09-04', billstate: '结账',total: 30080  }
  ];

  private items2: any = [
    {imgurl: 'ios-flag-outline', id: '123456', customer: '客户1',billno: '#201608040008', dateissue: '08-04', billstate: '草案',total: 30080 },
    {imgurl: 'ios-flame-outline',id: '123457', customer: '客户2',billno: '#201608040007', dateissue: '08-04', billstate: '执行',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123458', customer: '客户3',billno: '#201608040006', dateissue: '08-04', billstate: '审核',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123459', customer: '客户4',billno: '#201608040005', dateissue: '08-04', billstate: '审核',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123460', customer: '客户5',billno: '#201608040004', dateissue: '08-04', billstate: '结账',total: 30080 }
  ];

  constructor(private navCtrl: NavController) {

  }

  itemSelected(item: any)
  {
    this.navCtrl.push(OrderPage, {});
  }

}
