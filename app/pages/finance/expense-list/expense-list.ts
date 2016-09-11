import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ExpensePage} from '../expense/expense';

/*
  Generated class for the ExpenseListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/finance/expense-list/expense-list.html',
})
export class ExpenseListPage {

  expenseList: any = [
    {name:"张三", remark: "XXX项目差旅费", post:"销售", total:"1234", date:"2016-07-02"},
    {name:"李四", remark: "礼品", post:"经理", total:"12343", date:"2016-05-02"},
    {name:"王五", remark: "XXX项目差旅费", post:"销售", total:"1234", date:"2016-03-02"}
  ];

  constructor(private navCtrl: NavController) {

  }

  itemSelected(item: any){
    this.navCtrl.push(ExpensePage, '');
  }

}
