import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { DashboardPage } from '../dashboard/dashboard';
import { Storage } from '@ionic/Storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string = "";
  password: string = "";
  loader: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public postPvdr: PostProvider,
    public alertCtrl: AlertController,
    public storage: Storage
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
      content: "",
    });
    return await this.loader.present();
  }

  Login() {
    if (this.username == "" && this.password == "") {
      const toast = this.toastCtrl.create({
        message: 'Username dan Password tidak boleh kosong.',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else if (this.username == "" || this.password == "") {
      const toast = this.toastCtrl.create({
        message: 'Username atau Password tidak boleh kosong.',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else {
      let body = {
        username: this.username,
        password: this.password,
        aksi: 'login_system'
      };
      this.presentLoading();
      this.postPvdr.postData(body, 'Login').subscribe((data) => {
        var alertpesan = data.msg;
        if (data.success) {
          this.storage.set('session_user_login_oracle', data.result);
          this.loader.dismiss();
          this.navCtrl.setRoot(DashboardPage);
        } else {
          this.loader.dismiss();
          const toast = this.toastCtrl.create({
            message: alertpesan,
            duration: 2000,
            position: 'top'
          });
          toast.present();
        }
      }, error => {
        this.loader.dismiss();
        const alert = this.alertCtrl.create
          ({
            title: 'Pehatian',
            subTitle: 'Internet tidak tersambung, cek kembali signal atau kuota internet Anda.',
            buttons: ['OK']
          });
        alert.present();
      });

    }
  }

}
