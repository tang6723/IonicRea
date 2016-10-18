import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ContractPage} from '../sales/contract/contract';
import {ContractListPage} from '../sales/contract-list/contract-list';
import {OrderPage} from '../purchase/order/order';
import {OrderListPage} from '../purchase/order-list/order-list';

import {GoodsListPage} from '../setting/goods-list/goods-list';
import {GoodsPage} from '../setting/goods/goods'
import {BillsListPage} from '../finance/bills-list/bills-list';
import {BillsPage} from '../finance/bills/bills'

import {ExpensePage} from '../finance/expense/expense';
import {ExpenseListPage} from '../finance/expense-list/expense-list'


import {SettinghomePage} from '../setting/settinghome/settinghome';

declare var hprose;


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  contractPage=ContractPage;
  contractListPage=ContractListPage;
  orderPage=OrderPage;
  orderListPage=OrderListPage;

  goodsListPage=GoodsListPage;
  goodsPage=GoodsPage;
  billsListPage=BillsListPage;
  billsPage=BillsPage;

  expenseListPage=ExpenseListPage;
  expensePage=ExpensePage;

  //设置放到上面去了
  settinghomePage=SettinghomePage;

  time: Date;

  public username:string=document.getElementById("rootRealName").getAttribute("value");
  public usertitle:string=document.getElementById("rootRole").getAttribute("value");
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
