import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

/*
 Generated class for the ReportPayoutPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/setting/report-payout/report-payout.html',
})
export class ReportPayoutPage {

  typeList: string = "class";
  isAndroid: boolean = false;
  isValidClass:boolean=true;
  isValidMonth:boolean=false;
  totalSum: number = 0;
  totalSumMonth: number = 0;
  public myDate:string;

  classList: any = [
    {name: "销售成本", sum: 80000, percent: "69.29%"},
    {name: "税费", sum: 660, percent: "0.57%"},
    {name: "工资福利", sum: 12000, percent: "10.39%"},
    {name: "交通运输费", sum: 8000, percent: "6.93%"},
    {name: "财务费用", sum: 4200, percent: "3.64%"},
    {name: "招待费", sum: 400, percent: "0.35%"},
    {name: "电脑配件", sum: 1000, percent: "0.87%"},
    {name: "其它支出", sum: 200, percent: "0.17%"},
    {name: "意外支出", sum: 9000, percent: "7.79%"}
    ];

  monthList: any = [
    {date: "2016年1月", sum: 180000, percent: "69.29%"},
    {date: "2016年2月", sum: 1660, percent: "0.57%"},
    {date: "2016年3月", sum: 112000, percent: "10.39%"},
    {date: "2016年4月", sum: 18000, percent: "6.93%"},
    {date: "2016年5月", sum: 14200, percent: "3.64%"},
    {date: "2016年6月", sum: 1400, percent: "0.35%"},
    {date: "2016年7月", sum: 11000, percent: "0.87%"},
    {date: "2016年8月", sum: 1200, percent: "0.17%"},
    {date: "2016年9月", sum: 19000, percent: "7.79%"}
  ];

  constructor(private navCtrl: NavController, private platform: Platform) {
    this.isAndroid = platform.is('android');
    this.myDate = new Date().toISOString();
    this.isValidClass=true;
    this.isValidMonth=false;

    for(var i=0;i<this.classList.length;i++)
    {
      this.totalSum += this.classList[i].sum;
    }

    for(var i=0;i<this.monthList.length;i++)
    {
      this.totalSumMonth += this.monthList[i].sum;
    }
  }

  popHome() {
    this.navCtrl.popToRoot();
  }
  selectedClass(){
    this.isValidClass=true;
    this.isValidMonth=false;
  }
  selectedMonth(){
    this.isValidClass=false;
    this.isValidMonth=true;
  }

}
