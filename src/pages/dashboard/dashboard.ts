import { Component, ViewChild } from '@angular/core';
import { ActionSheetController, AlertController, IonicPage, LoadingController, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { OpnameproccessPage } from '../opnameproccess/opnameproccess';
import { Storage } from '@ionic/Storage';
import { LoginPage } from '../login/login';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { ListopnamePage } from '../listopname/listopname';
import { ListopnamedetailPage } from '../listopnamedetail/listopnamedetail';
import { PostProvider } from '../../providers/post-provider';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  @ViewChild('search') search: any;

  scannedItemCode: any;
  scannedItems: any;
  emlpoyee_id: any;
  username: any;
  full_name: any;
  jabatan: any;
  divisi: any;
  searchitem: any;
  totalpending: any;
  opname_item_arr: any;
  opname_id: any;
  tot_item: any;
  count_date1: any;
  loader: any;
  oracle_opname_detail: any;
  oracle_opname_header: any;

  todaydate: String = new Date().toISOString();


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private barcodeScanner: BarcodeScanner,
    private storage: Storage,
    private sqlite: SQLite,
    public platform: Platform,
    public postPvdr: PostProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController
  ) {

    // this.storage.set('opnameid', 0);

    this.storage.get('session_user_login_oracle').then((res) => {
      console.log(res);
      this.emlpoyee_id = res[0].employee_id;
      this.username = res[0].username;
      this.full_name = res[0].employee_name;
      this.jabatan = res[0].jabatan_name;
      this.divisi = res[0].divisi_name;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  ionViewDidEnter() {

    this.countItem();
    this.countItemOpnameId();

    this.searchitem = '';
  }

  presentActionSheet() {

    const actionSheet = this.actionSheetCtrl.create({
      title: 'Menu',
      buttons: [
        {
          text: 'Sync Data',
          handler: () => {
            this.getSync();
          }
        },
        {
          text: 'List Opname',
          handler: () => {
            this.navCtrl.push(ListopnamePage);
          }
        },
        {
          text: 'Logout',
          role: 'destructive',
          handler: () => {
            this.navCtrl.setRoot(LoginPage);
            this.storage.clear();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  getCodeItem() {
    this.barcodeScanner.scan().then(barcodeData => {
      if (barcodeData.cancelled == true) {
        this.navCtrl.pop()
      } else {
        this.scannedItemCode = barcodeData.text;
        var itemscan = this.scannedItemCode;
        var item = itemscan.split('*');
        this.navCtrl.setRoot(OpnameproccessPage, {
          itemcode: item[0], itemname: item[1], uom: item[2], lot: item[3], rgdate: item[4], exprdate: item[5]
        });
      }
    }).catch(err => {
      console.log('Error', err);
    });

    // this.navCtrl.setRoot(OpnameproccessPage)
  }

  flashScan() {
    setTimeout(() => {
      this.search.setFocus();
    }, 500);
  }


  getItems(event) {
    this.scannedItemCode = event.data;
    console.log(this.scannedItemCode);
    var itemscan = this.scannedItemCode;
    var item = itemscan.split('*');
    console.log('item 1 : ', item[1]);
    if (item[1] != undefined) {
      this.navCtrl.setRoot(OpnameproccessPage, {
        itemcode: item[0].trim(), itemname: item[1], uom: item[2], lot: item[3], rgdate: item[4], exprdate: item[5]
      });
    }
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

    // // header
    // this.sqlite.create({
    //   name: 'vci_mobile_oracle.db',
    //   location: 'default'
    // }).then((db: SQLiteObject) => {
    //   db.executeSql('select * from oracle_opname_header where send_status = ?', [0]).then(res => {
    //     if (res.rows.length > 0) {
    //       console.log("Success SELECT table oracle_opname_header", res);
    //       this.oracle_opname_header = [];
    //       for (let i = 0; i < res.rows.length; i++) {
    //         this.oracle_opname_header.push({
    //           Opname_id: res.rows.item(i).Opname_id,
    //           Opname_date: res.rows.item(i).Opname_date,
    //           subinventorycode: res.rows.item(i).subinventorycode
    //         });
    //       }
    //       console.log('oracle_opname_header Data ', this.oracle_opname_header);
    //     }
    //   }).catch(e => console.log("Failed SELECT table oracle_opname_header", e));
    // });
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

        // this.countItem();
        // this.countItemOpnameId();
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

        // this.countItem();
        // this.countItemOpnameId();
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
          // buttons: ['OK']
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

  openListDetail(opnameid) {
    this.navCtrl.push(ListopnamedetailPage, { opnameid: opnameid });
  }

  async presentLoading(x) {
    this.loader = await this.loadingCtrl.create({
      content: x,
    });
    return await this.loader.present();
  }

  getSync() {
    let body = {
      aksi: 'getSync',
    };
    this.presentLoading('Please wait..');
    this.postPvdr.postData(body, 'Sync').subscribe((data) => {
      var alertpesan = data.msg;
      if (data.success) {
        // this.loader.dismiss();
        this.storage.set('subinventory', data.result);
        // const toast = this.toastCtrl.create({
        //   message: alertpesan,
        //   duration: 2000,
        //   position: 'top'
        // });
        // toast.present();
        // this.storage.get("locator").then((res) => {
        //   if (res == null) {
        // this.getMasterLocator();
        //   }
        // });

        this.getMasterLocator();

      } else {
        this.loader.dismiss();
        const toast = this.toastCtrl.create({
          message: alertpesan,
          duration: 1000,
          position: 'top'
        });
        toast.present();
      }
    }, error => {
      this.loader.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Pehatian',
        subTitle: 'Sinkronisasi produk gagal',
        buttons: ['OK']
      });
      alert.present();
    });
  }

  getMasterLocator() {
    let body = {
      aksi: 'getLocator',
    };
    // this.presentLoading('Please wait..');
    this.postPvdr.postData(body, 'Sync').subscribe((data) => {
      var alertpesan = data.msg;
      if (data.success) {
        this.loader.dismiss();
        this.storage.set('locator', data.result);
        const toast = this.toastCtrl.create({
          message: 'Sync Success',
          duration: 2000,
          position: 'top'
        });
        toast.present();
      } else {
        this.loader.dismiss();
        const toast = this.toastCtrl.create({
          message: alertpesan,
          duration: 1000,
          position: 'top'
        });
        toast.present();
      }
    }, error => {
      this.loader.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Pehatian',
        subTitle: 'Sinkronisasi produk gagal',
        buttons: ['OK']
      });
      alert.present();
    });
  }

}
