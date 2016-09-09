import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ContractPage} from '../sales/contract/contract';
import {OrderPage} from '../purchase/order/order';
import {GoodsListPage} from '../setting/goods-list/goods-list';
import {BillsListPage} from '../finance/bills-list/bills-list';
import {ExpensePage} from '../finance/expense/expense';
import {SettinghomePage} from '../setting/settinghome/settinghome';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  contractPage=ContractPage;
  orderPage=OrderPage;
  goodsListPage=GoodsListPage;
  billsListPage=BillsListPage;
  expensePage=ExpensePage;
  settinghomePage=SettinghomePage;

  time: Date;

  public username:string="王宝强";
  public usertitle:string="管理员";
  public myDate:string;

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor(public navCtrl: NavController) {

    this.time = new Date();
    this.myDate = new Date().toISOString();
    setInterval(() => this.myDate = new Date().toISOString(), 1000);

  }
}
