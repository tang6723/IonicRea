import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, AlertController, NavParams } from 'ionic-angular';

import {ExpenseItemPage} from '../expense-item/expense-item';
import {ExpenseListPage} from '../expense-list/expense-list';

/*
  Generated class for the ExpensePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/finance/expense/expense.html',
})
export class ExpensePage {

  @ViewChild("myClider") slider: Slides;

  billid:string="#201609040008";
  billstate:string="草案";
  billtype:string="销售";
  billtotal:string ="3，380.00";
  dateissue:string ="2016年9月3日";
  customer:string ="微小宝";
  customeraddress:string ="鞍山铁东湖南34号";

  typeTmp: string;
  employeeList: any;

  initializeEmployeeList(){
    this.employeeList = [
      {id:12345, name:"张三", post: "销售"},
      {id:12346, name:"李四", post: "销售"},
      {id:12347, name:"王五", post: "经理"},
      {id:12348, name:"赵六", post: "会计"}
    ];
  };

  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private  navParams: NavParams) {
    this.initializeEmployeeList();
  }

  pushItem(index: number)
  {

    switch (index) {
      case 1:
        this.typeTmp = '申请';
        break;
      case 2:
        this.typeTmp = '审批';
        break;
      case 3:
        this.typeTmp = '付款';
        break;
    }

    this.navCtrl.push(ExpenseItemPage,{
      id:this.billid,
      type:this.typeTmp

    });
  }

  showEmployeeRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('客户');
    for(var i=0;i<this.employeeList.length;i++){
      alert.addInput({
        type:'radio',
        label: this.employeeList[i].name ,
        value:  this.employeeList[i].id
      });
    }
    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        for(var i=0;i<this.employeeList.length;i++) {
          if(this.employeeList[i].id == data)
          {
            this.customer = this.employeeList[i].name;
            this.customeraddress = this.employeeList[i].post;
          }
        }

        console.log(data);
      }
    });
    alert.present();
  }

  pushMore(){
    this.navCtrl.push(ExpenseListPage, {});
  };

  gotoSlider(i: number){
    this.slider.slideTo(i, 300);
  }

  popHome(){
    this.navCtrl.popToRoot();
  }

}
