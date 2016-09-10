import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {EmployeeListPage} from '../employee-list/employee-list';

/*
  Generated class for the EmployeePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/setting/employee/employee.html',
})
export class EmployeePage {

  constructor(private navCtrl: NavController) {

  }

  pushemployeelist()
  {
    this.navCtrl.push(EmployeeListPage, {});
  }

}
