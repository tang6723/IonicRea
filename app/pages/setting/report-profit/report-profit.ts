import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ReportProfitPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/setting/report-profit/report-profit.html',
})
export class ReportProfitPage {
  pet: string = "1";
  stock:string = "stock1";
  isAndroid: boolean = false;

  appType = "Paid";
  safari = "Shared Links";
  weather = "sunny";

  apps = {
    "Paid": [
      {
        name: 'Monopoly',
        price: '$0.99'
      },
      {
        name: 'Angry Birds',
        price: '$2.99'
      }
    ],
    "Free": [
      {
        name: 'Snapchat',
        price: 'GET'
      },
      {
        name: 'Instagram',
        price: 'OPEN'
      }
    ],
    "Top": [
      {
        name: 'Spotify',
        price: 'OPEN'
      },
      {
        name: 'Pandora',
        price: 'GET'
      }
    ]
  };

  items = {
    "Bookmarks": [
      {
        name: 'Favorites',
        icon: 'ios-star-outline'
      },
      {
        name: 'History',
        icon: 'ios-clock-outline'
      }
    ],
    "Reading List": [
      {
        name: 'Terms of Service',
        icon: 'create'
      },
      {
        name: 'User Guide',
        icon: 'book'
      }
    ],
    "Shared Links": [
      {
        name: 'Ionic Framework',
        icon: 'ionic'
      },
      {
        name: 'Learn Angular',
        icon: 'logo-angular'
      }
    ]
  };

  constructor(private navCtrl: NavController) {

  }
  getItems(type) {
    return this.apps[type];
  }

  getSafariItems(type) {
    return this.items[type];
  }
  popHome(){
    this.navCtrl.popToRoot();
  }

}
