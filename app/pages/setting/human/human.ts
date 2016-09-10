import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {HumanListPage} from '../human-list/human-list';

/*
  Generated class for the HumanPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/setting/human/human.html',
})
export class HumanPage {

  constructor(private navCtrl: NavController) {

  }

  pushhumanlist()
  {
    this.navCtrl.push(HumanListPage, {});
  }

}
