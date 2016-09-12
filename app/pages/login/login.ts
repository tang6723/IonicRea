/**
 * Created by zhangyiwei1 on 2016/9/12.
 */
import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {HomePage} from '../home/home';

import {MyApp} from '../../app';

@Component({
  templateUrl: 'build/pages/login/login.html',
})

export class LoginPage {

  userName: string = "";
  passWord: string = "";

  userList: any = [
    {username: "1", password: "1", role: "员工", realname: "张三"},
    {username: "2", password: "1", role: "经理", realname: "李四"},
    {username: "3", password: "1", role: "财务", realname: "王五"}
  ];


  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  loginClick() {
    let err: string = "";

    switch (this.userName) {
      case "1":
        if (this.passWord == "1") {
          //var t = this.userList.find(d=> d.username == this.userName)[0];
          document.getElementById("rootUserName").setAttribute("value","1");
          document.getElementById("rootRole").setAttribute("value", "员工");
          document.getElementById("rootRealName").setAttribute("value", "张三");
          this.navCtrl.setRoot(HomePage);
        }
        else {
          err = "用户名或密码错误！";
        }
        break;
      case "2":
        if (this.passWord == "1") {
          //var t = this.userList.find(d=> d.username == this.userName)[0];
          document.getElementById("rootUserName").setAttribute("value", "2");
          document.getElementById("rootRole").setAttribute("value", "经理");
          document.getElementById("rootRealName").setAttribute("value", "李四");
          this.navCtrl.setRoot(HomePage);
        }
        else {
          err = "用户名或密码错误！";
        }
        break;
      case "3":
        if (this.passWord == "1") {
          //var t = this.userList.find(d=> d.username == this.userName)[0];
          document.getElementById("rootUserName").setAttribute("value", "3");
          document.getElementById("rootRole").setAttribute("value", "财务");
          document.getElementById("rootRealName").setAttribute("value", "王五");
          this.navCtrl.setRoot(HomePage);
        }
        else {
          err = "用户名或密码错误！";
        }
        break;
      default:
        err = "用户名或密码错误！";
        break;
    }

    if (err != '') {
      let alert = this.alertCtrl.create({
        title: '错误：',
        subTitle: err,
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
