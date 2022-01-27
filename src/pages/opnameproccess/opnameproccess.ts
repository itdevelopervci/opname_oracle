import { Component, ViewChild } from '@angular/core';
import { AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { SearchsubinventoryPage } from '../searchsubinventory/searchsubinventory';
import { PostProvider } from '../../providers/post-provider';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/Storage';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { SearchlocatorPage } from '../searchlocator/searchlocator';
import { ListopnamePage } from '../listopname/listopname';
import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-opnameproccess',
  templateUrl: 'opnameproccess.html',
})
export class OpnameproccessPage {

  @ViewChild('search') search: any;
  @ViewChild('searchcsub') searchcsub: any;

  myDate: String = new Date().toISOString();

  today = new Date();
  date = this.today.getFullYear() + "-" + this.pickMonth(this.today.getMonth() + 1) + "-" + this.pickDate(this.today.getDate());
  myTime: String = new Date(this.today.getTime() - this.today.getTimezoneOffset() * 60000).toISOString();

  employee_nik: any;
  scannedItemCode: any;
  codesubinv: any;
  codelocator: any;
  codelocatorid: any;
  itemcode: any;
  itemname: any;
  uom: any;
  lot: any;
  rgdate: any;
  exprdate: any;
  loader: any;
  quantity: any;
  scannedlocator: any;
  username: any;
  iduser: any;
  opnameid: any;
  count_opname_id: any;
  date_opname: any;
  searchitem: any;
  searchsubandlocator: any;
  oracle_opname_detail: any;
  oracle_opname_header: any;

  opnamedate: String = new Date().toISOString();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public postPvdr: PostProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private barcodeScanner: BarcodeScanner,
    private storage: Storage,
    public modalCtrl: ModalController,
    private sqlite: SQLite,
    public plt: Platform
  ) {

    this.myDate = this.myDate.substring(0, 10);
    this.opnamedate = this.myDate.substring(0, 10);
    console.log('date ', this.opnamedate)

    var opname_date = this.date + " " + this.myTime.substring(11, 19);
    console.log('date time ', opname_date)

    this.searchitem = '';
    this.searchsubandlocator = '';
    setTimeout(() => {
      this.search.setFocus();
    }, 500);
    setTimeout(() => {
      this.searchcsub.setFocus();
    }, 500);


    this.storage.get("subinventory").then((res) => {
      if (res == null) {
        this.getSync();
      }
    });

    if (this.plt.is('android')) {
      this.getCurrentData(
        navParams.get('itemcode'),
        navParams.get('itemname'),
        navParams.get('uom'),
        navParams.get('lot'),
        navParams.get('rgdate'),
        navParams.get('exprdate')
      );
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpnameproccessPage');
  }

  ionViewDidEnter() {

    this.storage.get("selectsubinventorycode").then((res) => {
      if (res == null) {
        this.codesubinv = '';
      } else {
        this.codesubinv = res[0].subinventorycode;
      }
      console.log(this.codesubinv);
    });

    this.storage.get("selectlocator").then((res) => {
      console.log(res);
      if (res == null) {
        this.codelocator = '';
      } else {
        this.codelocator = res[0].selectlocator;
        this.codelocatorid = res[0].selectlocatorid;
      }
      console.log(this.codelocator);
      console.log(this.codelocatorid);
    });

    this.storage.get('session_user_login_oracle').then((res) => {
      console.log(res);
      this.username = res[0].username;
      this.iduser = res[0].employee_id;
      this.employee_nik = res[0].employee_nik;
      this.storage.get("opnameid").then((opnameid) => {
        console.log('opnameid get ', opnameid)
        var year_month = this.opnamedate.substring(2, 4) + "" + this.opnamedate.substring(5, 7) + "" + this.opnamedate.substring(8, 10);
        console.log("year_month : ", year_month);
        var id = opnameid;
        if (id == 0 || id == null) {
          this.opnameid = this.employee_nik + year_month;
          console.log("opnameid baru : ", this.opnameid);
          // } else {
          //   this.opnameid = parseInt(id) + 1;
          //   console.log("opnameid : ", this.opnameid);
        }
      });
    });

    this.countItem();

  }

  getCurrentData(itemcode, itemname, uom, lot, rgdate, exprdate) {
    var a = itemcode;
    this.itemcode = a.trim();
    this.itemname = itemname;
    this.uom = uom;
    this.lot = lot;
    this.rgdate = rgdate;
    this.exprdate = exprdate;
    console.log(this.itemcode, this.itemname, this.lot, this.rgdate, this.exprdate,)

    if (this.itemcode != '') {
      this.inputQty();
    }
  }

  selectDate() {
    this.myDate = this.myDate.substring(0, 10);
    console.log('Date picker : ', this.myDate);
  }

  gotoSearchSubInventory() {
    const modal = this.modalCtrl.create(SearchsubinventoryPage);
    modal.present();
    modal.onDidDismiss((data) => {
      if (data.reload) {
        this.checkCodeSubInv();
      }
    });
  }

  checkCodeSubInv() {
    this.storage.get("selectsubinventorycode").then((res) => {
      if (res == null) {
        this.codesubinv = '';
      } else {
        this.codesubinv = res[0].subinventorycode;
      }
      console.log(this.codesubinv);
    });
  }

  gotoSearchLocator() {
    const modal = this.modalCtrl.create(SearchlocatorPage);
    modal.present();

    modal.onDidDismiss((data) => {
      if (data.reload) {
        this.checkCodeLocator();
      }
    });
  }

  checkCodeLocator() {
    this.storage.get("selectlocator").then((res) => {
      console.log(res);
      if (res == null) {
        this.codelocator = '';
      } else {
        this.codelocator = res[0].selectlocator;
        this.codelocatorid = res[0].selectlocatorid;
      }
      console.log(this.codelocator);
      console.log(this.codelocatorid);
    });
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
        this.loader.dismiss();
        this.storage.set('subinventory', data.result);
        // const toast = this.toastCtrl.create({
        //   message: alertpesan,
        //   duration: 2000,
        //   position: 'top'
        // });
        // toast.present();
        this.storage.get("locator").then((res) => {
          if (res == null) {
            this.getMasterLocator();
          }
        });
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
    this.presentLoading('Please wait..');
    this.postPvdr.postData(body, 'Sync').subscribe((data) => {
      var alertpesan = data.msg;
      if (data.success) {
        this.loader.dismiss();
        this.storage.set('locator', data.result);
        const toast = this.toastCtrl.create({
          message: alertpesan,
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

  getLocator() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.codelocator = barcodeData.text;
    }).catch(err => {
      console.log('Error', err);
    });
  }

  pickMonth(m) {
    if (m * 1 < 10) {
      m = '0' + m;
    } else {
      m = m;
    }
    return m;
  }

  pickDate(d) {
    if (d * 1 < 10) {
      d = '0' + d;
    } else {
      d = d;
    }
    return d;
  }

  monthNow(m) {
    if (m * 1 < 10) {
      m = '0' + m;
    } else {
      m = m;
    }
    return m;
  }

  dateNow(d) {
    if (d * 1 < 10) {
      d = '0' + d;
    } else {
      d = d;
    }
    return d;
  }

  inputQty() {
    const prompt = this.alertCtrl.create({
      enableBackdropDismiss: false,
      mode: 'ios',
      message: "Enter quantity for this item.",
      inputs: [{
        name: 'qty',
        placeholder: 'Input quantity',
        type: 'number'
      },],
      buttons: [{
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Input',
        handler: data => {
          this.quantity = data.qty;
        }
      }
      ]
    });
    prompt.present();
  }

  insertOpnameDetail() {
    var today = new Date();
    var date = today.getFullYear() + "-" + this.pickMonth(this.today.getMonth() + 1) + "-" + this.pickDate(this.today.getDate());
    var myTime: String = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString();
    var opname_date_time = date + " " + myTime.substring(11, 19);
    console.log('date time ', opname_date_time)

    this.sqlite.create({
      name: 'vci_mobile_oracle.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO oracle_opname_detail (\
        Opname_id, \
        Locator_id, \
        Locator_code, \
        Item_code, \
        Item_name, \
        Lot_number, \
        SubInventoryCode, \
        Lot_expired_date, \
        Opname_quantity1, \
        Opname_quantity2, \
        Opname_quantity3, \
        Count_by1, \
        Count_by2, \
        Count_by3, \
        Count_date1, \
        Count_date2, \
        Count_date3, \
        Opname_date, \
        send_status)\
        VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [
          this.opnameid,
          this.codelocatorid,
          this.codelocator,
          this.itemcode,
          this.itemname,
          this.lot,
          this.codesubinv,
          this.exprdate,
          this.quantity,
          '',
          '',
          this.username,
          '',
          '',
          opname_date_time,
          '',
          '',
          this.myDate,
          0
        ])
        .then(res => {
          console.log("Success insert table oracle_opname_detail", res);
          this.countItem();
          this.confirmAddMoreItem();
          this.itemcode = '';
          this.itemname = '';
          this.uom = '';
          this.lot = '';
          this.rgdate = '';
          this.exprdate = '';
          this.quantity = 0;
          // this.insertHeader();
        })
        .catch(e => console.log("Failed insert table oracle_opname_detail", e));
    });
  }

  insertHeader() {
    this.sqlite.create({
      name: 'vci_mobile_oracle.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO oracle_opname_header (\
        Opname_id, \
        Opname_date, \
        subinventorycode, \
        send_status)\
        VALUES(?,?,?,?)',
        [
          this.opnameid,
          this.opnamedate,
          this.codesubinv,
          0,
        ])
        .then(res => {
          console.log("Success insert table oracle_opname_header", res);
          this.countItem();
          this.confirmAddMoreItem();
          this.itemcode = '';
          this.itemname = '';
          this.uom = '';
          this.lot = '';
          this.rgdate = '';
          this.exprdate = '';
          this.quantity = 0;
        })
        .catch(e => console.log("Failed insert table oracle_opname_header", e));
    });
  }

  countItem() {

    this.storage.get('session_user_login_oracle').then((res) => {
      console.log(res);
      this.username = res[0].username;
      this.iduser = res[0].employee_id;
      this.employee_nik = res[0].employee_nik;
      this.storage.get("opnameid").then((opnameid) => {
        console.log('opnameid get ', opnameid)
        var year_month = this.opnamedate.substring(2, 4) + "" + this.opnamedate.substring(5, 7) + "" + this.opnamedate.substring(8, 10);
        console.log("year_month : ", year_month);
        var id = opnameid;
        if (id == 0 || id == null) {
          this.opnameid = this.employee_nik + year_month;
          console.log("opnameid baru : ", this.opnameid);
          // } else {
          //   this.opnameid = parseInt(id) + 1;
          //   console.log("opnameid : ", this.opnameid);

          this.sqlite.create({
            name: 'vci_mobile_oracle.db',
            location: 'default'
          }).then((db: SQLiteObject) => {
            //   db.executeSql('SELECT * FROM oracle_opname_detail WHERE send_status = ?', [0]).then(res => {
            //     if (res.rows.length > 0) {
            //       console.log("Success SELECT table oracle_opname_detail", res)
            //       for (let i = 0; i < res.rows.length; i++) {
            //         this.opnameid = res.rows.item(i).Opname_id;
            //         console.log('opnameid ', this.opnameid);

            db.executeSql('select count(Opname_id) as Opname_id from oracle_opname_detail where Opname_id = ? and send_status = 0', [this.opnameid]).then(res => {
              if (res.rows.length > 0) {
                console.log("Success SELECT table oracle_opname_detail", this.opnameid)
                this.count_opname_id = res.rows.item(0).Opname_id;
              } else {
                console.log("Failed SELECT table oracle_opname_detail", res)
              }
            }).catch(e => console.log("Failed SELECT table oracle_opname_detail", e));

            //     }
            //   }
            // }).catch(e => console.log("Failed SELECT table oracle_opname_detail", e));

          });

        }
      });
    });
  }

  confirmAddMoreItem() {
    const confirm = this.alertCtrl.create({
      // title: 'Scan more item?',
      enableBackdropDismiss: false,
      mode: 'ios',
      message: 'Scan more item?',
      buttons: [{
        text: 'No',
        handler: () => {
          console.log('Disagree clicked');
          this.confirmSendOpname();
        }
      },
      {
        text: 'Yes',
        handler: () => {
          console.log('Agree clicked');
          this.chooseScanInput();
        }
      }
      ]
    });
    confirm.present();
  }

  scanSubinvAndLocator() {
    const confirm = this.alertCtrl.create({
      enableBackdropDismiss: false,
      mode: 'ios',
      message: 'Choose option to scan',
      buttons: [{
        text: 'Camera Scan',
        handler: () => {
          this.getSubInvandLocatorCamera();
        }
      },
      {
        text: 'Flash Scan',
        handler: () => {
          document.getElementById('title').style.display = 'none';
          document.getElementById('scansubinvandlocator').style.display = '';
          this.searchsubandlocator = '';
          setTimeout(() => {
            this.searchcsub.setFocus();
          }, 500);
        }
      }
      ]
    });
    confirm.present();
  }

  getSubInvandLocator(event) {
    var scannedItemCode = event.data;
    var itemscan = scannedItemCode;
    var item = itemscan.split('*');
    this.codelocator = item[0].trim();
    this.codesubinv = item[1].trim();
    this.codelocatorid = item[2].trim();
    if (this.scannedItemCode != null) {
      document.getElementById('title').style.display = '';
      document.getElementById('scansubinvandlocator').style.display = 'none';
    }
  }

  getSubInvandLocatorCamera() {
    this.barcodeScanner.scan().then(barcodeData => {
      var scannedItemCode = barcodeData.text;
      var itemscan = scannedItemCode;
      var item = itemscan.split('*');
      this.codelocator = item[0].trim();
      this.codesubinv = item[1].trim();
    }).catch(err => {
      console.log('Error', err);
    });
  }

  getLocatorOption() {
    const confirm = this.alertCtrl.create({
      // title: 'Scan more item?',
      enableBackdropDismiss: false,
      mode: 'ios',
      message: 'Choose option to select locator',
      buttons: [
        {
          text: 'Delete',
          handler: () => {
            this.codelocator = '';
          }
        },
        {
          text: 'Camrea Scan',
          handler: () => {
            this.getLocator();

          }
        },
        {
          text: 'Search',
          handler: () => {
            this.gotoSearchLocator();

          }
        }
      ]
    });
    confirm.present();
  }

  getCodeItem() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedItemCode = barcodeData.text;
      var itemscan = this.scannedItemCode;
      var item = itemscan.split('*');
      var a = item[0];
      this.itemcode = a.trim();
      this.itemname = item[1];
      this.uom = item[2];
      this.lot = item[3];
      this.rgdate = item[4];
      this.exprdate = item[5];
      this.inputQty()
    }).catch(err => {
      console.log('Error', err);
    });
  }

  chooseScanInput() {
    const confirm = this.alertCtrl.create({
      // title: 'Scan more item?',
      enableBackdropDismiss: false,
      mode: 'ios',
      message: 'Choose scan type',
      buttons: [{
        text: 'Camera Scan',
        handler: () => {
          console.log('Agree clicked');
          this.getCodeItem();
        }
      },
      {
        text: 'Flash Scan',
        handler: () => {
          console.log('Disagree clicked');
          document.getElementById('title').style.display = 'none';
          document.getElementById('searchitem').style.display = '';
          this.searchitem = '';
          setTimeout(() => {
            this.search.setFocus();
          }, 500);
        }
      }
      ]
    });
    confirm.present();
  }

  getItems(event) {
    this.scannedItemCode = event.data;
    var itemscan = this.scannedItemCode;
    var item = itemscan.split('*');
    var a = item[0];
    this.itemcode = a.trim();
    this.itemname = item[1];
    this.uom = item[2];
    this.lot = item[3];
    this.rgdate = item[4];
    this.exprdate = item[5];
    this.inputQty();

    if (this.itemcode != null) {
      document.getElementById('title').style.display = '';
      document.getElementById('searchitem').style.display = 'none';
    }

  }

  confirmSendOpname() {
    this.selectAllPendingOpnameDetail();
    const confirm = this.alertCtrl.create({
      enableBackdropDismiss: false,
      mode: 'ios',
      message: 'Send data opname?',
      buttons: [{
        text: 'later',
        handler: () => {
          console.log('cancel clicked');
          this.navCtrl.setRoot(DashboardPage);
        }
      },
      // {

      //   text: 'check list opname',
      //   handler: () => {
      //     console.log('check list opname clicked');
      //   }
      // },
      {
        text: 'send',
        handler: () => {
          console.log('send clicked');
          this.sendTransactionDet();
        }
      }
      ]
    });
    confirm.present();
  }

  openListOpname() {
    this.navCtrl.push(ListopnamePage);
  }

  gotoDashboard() {
    this.navCtrl.setRoot(DashboardPage);
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
        this.sendTransactionHeader();
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



}
