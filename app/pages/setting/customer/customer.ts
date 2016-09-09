import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {CustomerListPage} from '../customer-list/customer-list';

/*
  Generated class for the CustomerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/setting/customer/customer.html',
})
export class CustomerPage {

  constructor(private navCtrl: NavController) {

  }

  popCustomerList()
  {
    this.navCtrl.push(CustomerListPage, {});
  }

}
