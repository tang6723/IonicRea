import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ContractPage} from '../sales/contract/contract';
import {OrderPage} from '../purchase/order/order';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  contractPage=ContractPage;
  orderPage=OrderPage;

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor(public navCtrl: NavController) {

  }
}
