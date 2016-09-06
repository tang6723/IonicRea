import { Component } from '@angular/core';
import {Page, NavController } from 'ionic-angular';

/*
  Generated class for the OrderPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/purchase/order/order.html',
})
export class OrderPage {

  constructor(private navCtrl: NavController) {


  }
  backToPage(){
    this.navCtrl.pop();
  }

}
