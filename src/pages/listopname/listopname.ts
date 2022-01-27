import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { Storage } from '@ionic/Storage';
import { ListopnamedetailPage } from '../listopnamedetail/listopnamedetail';
import { PostProvider } from '../../providers/post-provider';
import { DashboardPage } from '../dashboard/dashboard';
import { ListopnameserverdetailPage } from '../listopnameserverdetail/listopnameserverdetail';

@IonicPage()
@Component({
  selector: 'page-listopname',
  templateUrl: 'listopname.html',
})
export class ListopnamePage {

  listopname: string = "pending";

  totalpending: any;
  opname_item_arr: any;
  totalsend: any;
  opname_item_send_arr: any;
  loader: any;
  oracle_opname_detail: any;
  oracle_opname_header: any;
  username: any;
  get_data_opname: any;

  constructor(
    private sqlite: SQLite,
    private storage: Storage,
    public postPvdr: PostProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListopnamePage');
  }

  async presentLoading(x) {
    this.loader = await this.loadingCtrl.create({
      content: x,
    });
    return await this.loader.present();
  }

  ionViewDidEnter() {
    this.countItem();
    this.countItemOpnameId();

    this.countItemSend();
    this.countItemOpnameIdSend();

    this.storage.get('session_user_login_oracle').then((res) => {
      this.username = res[0].username;
    });
  }

  countItem() {
    this.sqlite.create({
      name: 'vci_mobile_oracle.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('select Opname_id from oracle_opname_detail where send_status = ? group by Opname_id', [0]).then(res => {
        if (res.rows.length > 0) {
          console.log("Success SELECT table oracle_opname_detail", res)
          for (let i = 0; i < res.rows.length; i++) {
            this.totalpending = res.rows.length;
            console.log('jumlah opname header yg belum ke kirim ', res.rows.length);
          }
        }
      }).catch(e => console.log("Failed SELECT table oracle_opname_detail", e));
    });
  }

  countItemOpnameId() {
    this.sqlite.create({
      name: 'vci_mobile_oracle.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('select Opname_id as opnameid,count(Opname_id) as tot_item, count_date1 as date from oracle_opname_detail where send_status = ? group by Opname_id order by count_date1 desc', [0]).then(res => {
        if (res.rows.length > 0) {
          console.log("Success SELECT count(opname_id) on table oracle_opname_detail", res);
          this.opname_item_arr = [];
          for (let i = 0; i < res.rows.length; i++) {
            this.opname_item_arr.push({
              opname_id: res.rows.item(i).opnameid,
              tot_item: res.rows.item(i).tot_item,
              count_date1: res.rows.item(i).date
            })
            console.log("opname_id", res.rows.item(i).opnameid);
            console.log("tot_item", res.rows.item(i).tot_item);
            console.log("count_date1", res.rows.item(i).date);
          }
        }
      }).catch(e => console.log("Failed SELECT table oracle_opname_detail", e));
    });
  }

  countItemSend() {
    this.sqlite.create({
      name: 'vci_mobile_oracle.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('select Opname_id from oracle_opname_detail where send_status = ? group by Opname_id', [1]).then(res => {
        if (res.rows.length > 0) {
          console.log("Success SELECT table oracle_opname_detail", res)
          for (let i = 0; i < res.rows.length; i++) {
            this.totalsend = res.rows.length;
            console.log('jumlah opname header yg belum ke kirim ', res.rows.length);
          }
        }
      }).catch(e => console.log("Failed SELECT table oracle_opname_detail", e));
    });
  }

  countItemOpnameIdSend() {
    this.sqlite.create({
      name: 'vci_mobile_oracle.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('select Opname_id as opnameid,count(Opname_id) as tot_item, count_date1 as date from oracle_opname_detail where send_status = ? group by Opname_id order by count_date1 desc', [1]).then(res => {
        if (res.rows.length > 0) {
          console.log("Success SELECT count(opname_id) on table oracle_opname_detail", res);
          this.opname_item_send_arr = [];
          for (let i = 0; i < res.rows.length; i++) {
            this.opname_item_send_arr.push({
              opname_id: res.rows.item(i).opnameid,
              tot_item: res.rows.item(i).tot_item,
              count_date1: res.rows.item(i).date
            })
            console.log("opname_id", res.rows.item(i).opnameid);
            console.log("tot_item", res.rows.item(i).tot_item);
            console.log("count_date1", res.rows.item(i).date);
          }
        }
      }).catch(e => console.log("Failed SELECT table oracle_opname_detail", e));
    });
  }

  openListDetail(opnameid) {
    this.navCtrl.push(ListopnamedetailPage, { opnameid: opnameid });
  }

  sendAllPending() {
    this.selectAllPendingOpnameDetail();
    const confirm = this.alertCtrl.create({
      enableBackdropDismiss: false,
      // title: 'Send All Pending Opaname?',
      mode: 'ios',
      message: 'Send All Pending Opaname?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Send',
          handler: () => {
            console.log('Agree clicked');
            this.sendTransactionDet();
          }
        }
      ]
    });
    confirm.present();
  }

  selectAllPendingOpnameDetail() {
    // Detail
    this.sqlite.create({
      name: 'vci_mobile_oracle.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('select * from oracle_opname_detail where send_status = ?', [0]).then(res => {
        if (res.rows.length > 0) {
          console.log("Success SELECT table oracle_opname_detail", res);
          this.oracle_opname_detail = [];
          for (let i = 0; i < res.rows.length; i++) {
            this.oracle_opname_detail.push({
              Opname_id: res.rows.item(i).Opname_id,
              Locator_id: res.rows.item(i).Locator_id,
              Locator_code: res.rows.item(i).Locator_code,
              Item_code: res.rows.item(i).Item_code,
              Item_name: res.rows.item(i).Item_name,
              Lot_number: res.rows.item(i).Lot_number,
              SubInventoryCode: res.rows.item(i).SubInventoryCode,
              Lot_expired_date: res.rows.item(i).Lot_expired_date,
              Opname_quantity1: res.rows.item(i).Opname_quantity1,
              Opname_quantity2: res.rows.item(i).Opname_quantity2,
              Opname_quantity3: res.rows.item(i).Opname_quantity3,
              Count_by1: res.rows.item(i).Count_by1,
              Count_by2: res.rows.item(i).Count_by2,
              Count_by3: res.rows.item(i).Count_by3,
              Count_date1: res.rows.item(i).Count_date1,
              Count_date2: res.rows.item(i).Count_date2,
              Count_date3: res.rows.item(i).Count_date3,
              Opname_date: res.rows.item(i).Opname_date,
              send_status: res.rows.item(i).send_status
            });
          }
          console.log('oracle_opname_detail Data ', this.oracle_opname_detail);
        }
      }).catch(e => console.log("Failed SELECT table oracle_opname_detail", e));
    });

    // header
    this.sqlite.create({
      name: 'vci_mobile_oracle.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('select * from oracle_opname_header where send_status = ?', [0]).then(res => {
        if (res.rows.length > 0) {
          console.log("Success SELECT table oracle_opname_header", res);
          this.oracle_opname_header = [];
          for (let i = 0; i < res.rows.length; i++) {
            this.oracle_opname_header.push({
              Opname_id: res.rows.item(i).Opname_id,
              Opname_date: res.rows.item(i).Opname_date,
              subinventorycode: res.rows.item(i).subinventorycode
            });
          }
          console.log('oracle_opname_header Data ', this.oracle_opname_header);
        }
      }).catch(e => console.log("Failed SELECT table oracle_opname_header", e));
    });
  }

  sendTransactionDet() {
    let body = {
      oracle_opname_detail: this.oracle_opname_detail,
      aksi: 'send_opname_det'
    };
    this.presentLoading('Please wait..');
    this.postPvdr.postData(body, 'Transaction').subscribe((data) => {
      if (data.success) {
        // send trans_so_det
        // this.sendTransactionHeader();
        // update status
        this.sqlite.create({
          name: 'vci_mobile_oracle.db',
          location: 'default'
        }).then((db: SQLiteObject) => {
          db.executeSql('UPDATE oracle_opname_detail SET send_status = ?', [1])
            .then(res => {
              console.log("Success update table oracle_opname_detail ", res);
            })
            .catch(e => console.log("Failed update table oracle_opname_detail", e));
        });

        this.loader.dismiss();
        const toast = this.toastCtrl.create({
          message: 'Send data opname success',
          duration: 2000,
          position: 'middle'
        });
        toast.present();

        this.navCtrl.setRoot(DashboardPage);

      } else {
        this.loader.dismiss();
        const toast = this.toastCtrl.create({
          message: 'Transaksi Detail Tidak Terkirim',
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
          subTitle: 'Tidak tersabung dengan Internet, cek kembali signal atau kuota internet anda. [Detail]',
          // buttons: ['OK']
          buttons: [
            {
              text: 'Kirim Ulang',
              handler: () => {
                this.sendTransactionDet();
              }
            },
            {
              text: 'Ok',
              handler: () => {
                // code here
              }
            }
          ]
        });
      alert.present();
    });
  }

  sendTransactionHeader() {
    let body = {
      oracle_opname_header: this.oracle_opname_header,
      aksi: 'send_opname_header'
    };
    // this.presentLoading('Please wait..');
    this.postPvdr.postData(body, 'Transaction').subscribe((data) => {
      if (data.success) {
        // update status
        this.sqlite.create({
          name: 'vci_mobile_oracle.db',
          location: 'default'
        }).then((db: SQLiteObject) => {
          db.executeSql('UPDATE oracle_opname_header SET send_status = ?', [1])
            .then(res => {
              console.log("Success update table oracle_opname_header ", res);
            })
            .catch(e => console.log("Failed update table oracle_opname_header", e));
        });

        this.loader.dismiss();
        const toast = this.toastCtrl.create({
          message: 'Send data opname success',
          duration: 2000,
          position: 'middle'
        });
        toast.present();

        this.navCtrl.setRoot(DashboardPage);

      } else {
        this.loader.dismiss();
        const toast = this.toastCtrl.create({
          message: 'Transaksi Detail Tidak Terkirim',
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
          subTitle: 'Tidak tersabung dengan Internet, cek kembali signal atau kuota internet anda. [Header]',
          buttons: [
            {
              text: 'Kirim Ulang',
              handler: () => {
                this.sendTransactionHeader();
              }
            },
            {
              text: 'Ok',
              handler: () => {
                // code here
              }
            }
          ]
        });
      alert.present();
    });
  }

  getOpnameDataServer() {
    let body = {
      username: this.username,
      aksi: 'get_data_opname'
    };
    this.presentLoading('Please wait..');
    this.postPvdr.postData(body, 'Transaction').subscribe((data) => {
      if (data.success) {
        // Code here
        this.loader.dismiss();
        this.get_data_opname = [];
        for (let i = 0; i < data.result.length; i++) {
          this.get_data_opname.push({
            'Opname_id': data.result[i].Opname_id,
            'Count_date1': data.result[i].Count_date1,
            'Opname_date': data.result[i].Opname_date
          })
        }
      } else {
        this.loader.dismiss();
        const toast = this.toastCtrl.create({
          message: 'Empty',
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
          subTitle: 'Tidak tersabung dengan Internet, cek kembali signal atau kuota internet anda.',
          buttons: [
            {
              text: 'Try Again',
              handler: () => {
                this.getOpnameDataServer();
              }
            },
            {
              text: 'Ok',
              handler: () => {
                // code here
              }
            }
          ]
        });
      alert.present();
    });
  }

  openListDetailOnServer(opnameid) {
    this.navCtrl.push(ListopnameserverdetailPage, { opnameid: opnameid });
  }

}
