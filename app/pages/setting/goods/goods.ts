import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {GoodsListPage} from '../goods-list/goods-list';

/*
  Generated class for the GoodsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/setting/goods/goods.html',
})
export class GoodsPage {

  private goodsName : String;
  private goodsID: String;

  constructor(private navCtrl: NavController, private  navPara: NavParams) {
    //this.goodsName = this.navPara.get("item").name;
    //this.goodsID = this.navPara.get("item").id;
  }

  popGoodsList() {
    this.navCtrl.push(GoodsListPage, {});
  }

}
