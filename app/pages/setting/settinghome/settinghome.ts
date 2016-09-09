import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {GoodsPage} from '../goods/goods';
import {CustomerPage} from '../customer/customer';
import {EmployeePage} from '../employee/employee';
import {EventsPage} from '../events/events';
import {HumanPage} from '../human/human';
import {ReportAssetPage} from '../report-asset/report-asset';
import {ReportBalancePage} from '../report-balance/report-balance';
import {ReportProfitPage} from '../report-profit/report-profit';
import {ReportIncomePage} from '../report-income/report-income';
import {ReportPayoutPage} from '../report-payout/report-payout';




/*
  Generated class for the SettinghomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/setting/settinghome/settinghome.html',
})
export class SettinghomePage {

  goodsPage=GoodsPage;
  customerPage=CustomerPage;
  employeePage=EmployeePage;
  eventsPage=EventsPage;
  humanPage=HumanPage;
  reportAssetPage=ReportAssetPage;
  reportBalancePage=ReportBalancePage;
  reportProfitPage=ReportProfitPage;
  reportIncomePage=ReportIncomePage;
  reportPayoutPage=ReportPayoutPage;r


  constructor(private navCtrl: NavController) {

  }

}
