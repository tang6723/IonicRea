import { Component, ViewChild } from '@angular/core';
import {NavController, Slides} from 'ionic-angular';

/*
  Generated class for the ContractPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sales/contract/contract.html',
})
export class ContractPage {

  @ViewChild("myClider") slider: Slides;

  constructor(private navCtrl: NavController) {

  }

  gotoSlider(i: number){
    this.slider.slideTo(i, 300);
  }

}
