import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ContractPage} from '../sales/contract/contract';
import {OrderPage} from '../purchase/order/order';
import {GoodsPage} from '../setting/goods/goods';
import {BillsPage} from '../finance/bills/bills';
import {ExpensePage} from '../finance/expense/expense';
import {SettinghomePage} from '../setting/settinghome/settinghome';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  contractPage=ContractPage;
  orderPage=OrderPage;
  goodsPage=GoodsPage;
  billsPage=BillsPage;
  expensePage=ExpensePage;
  settinghomePage=SettinghomePage;

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor(public navCtrl: NavController) {

  }
}
