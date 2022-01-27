import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ActionSheetController, AlertController, LoadingController, NavController, Platform, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/Storage';


import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  qty_type: any;
  opnamedate: String = new Date().toISOString();
  val: any;
  items;
  selected: any;
  scannedItemCode: any;

  loader: any;
  itemx: any;

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    public postPvdr: PostProvider,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private barcodeScanner: BarcodeScanner
  ) {

    this.qty_type = 'Kg';
    this.val = '';

    this.getDataSubinventory();

    this.storage.get("subinventory").then((res) => {
      console.log(res)
      this.itemx = [];
      for (let i = 0; i < res.length; i++) {
        let str_name = res[i].Subinvetory_Code + " " + res[i].Subinventory_name;
        this.itemx.push({
          Subinvetory_Code: res[i].Subinvetory_Code,
          Subinventory_name: res[i].Subinventory_name,
          Creation_date: res[i].Creation_date,
          Locator_type: res[i].Locator_type,
          CodeSearch: str_name,
        });
      }
      this.initializeItems();
    });


  }

  // initializeItems() {
  //   this.items = [
  //     'Amsterdam',
  //     'Bogota',
  //     'Buenos Aires',
  //     'Cairo',
  //     'Dhaka',
  //     'Edinburgh',
  //     'Geneva',
  //     'Genoa',
  //     'Glasglow',
  //     'Hanoi',
  //     'Hong Kong',
  //     'Islamabad',
  //     'Istanbul',
  //     'Jakarta',
  //     'Kiel',
  //     'Kyoto',
  //     'Le Havre',
  //     'Lebanon',
  //     'Lhasa',
  //     'Lima',
  //     'London',
  //     'Los Angeles',
  //     'Madrid',
  //     'Manila',
  //     'New York',
  //     'Olympia',
  //     'Oslo',
  //     'Panama City',
  //     'Peking',
  //     'Philadelphia',
  //     'San Francisco',
  //     'Seoul',
  //     'Taipeh',
  //     'Tel Aviv',
  //     'Tokio',
  //     'Uelzen',
  //     'Washington'
  //   ];
  // }

  // getItems(ev) {
  //   // Reset items back to all of the items
  //   this.initializeItems();

  //   // set val to the value of the ev target
  //   this.val = ev.target.value;

  //   if (this.val == '') {
  //     this.val = '';
  //   }

  //   // if the value is an empty string don't filter the items
  //   if (this.val && this.val.trim() != '') {
  //     this.items = this.items.filter((item) => {
  //       return (item.toLowerCase().indexOf(this.val.toLowerCase()) > -1);
  //     })
  //   }
  // }

  itemSelected(item) {
    this.selected = item;
    this.val = '';
  }

  getCodeItem() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedItemCode = barcodeData.text;
      console.log('Result', this.scannedItemCode);
    }).catch(err => {
      console.log('Error', err);
    });
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Menu',
      buttons: [
        {
          text: 'Synchronize',
          handler: () => {
            // console.log('Destructive clicked');
            this.getSync()
          }
        },
        {
          text: 'Logout',
          handler: () => {
            this.navCtrl.setRoot(LoginPage);
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
          subTitle: 'Sinkronisasi produk gagal',
          buttons: ['OK']
        });
      alert.present();
    });
  }

  getDataSubinventory() {
    this.storage.get("subinventory").then((res) => {
      console.log(res)
      this.itemx = [];
      for (let i = 0; i < res.length; i++) {
        let str_name = res[i].Subinvetory_Code + " " + res[i].Subinventory_name;
        this.itemx.push({
          Subinvetory_Code: res[i].Subinvetory_Code,
          Subinventory_name: res[i].Subinventory_name,
          Creation_date: res[i].Creation_date,
          Locator_type: res[i].Locator_type,
          CodeSearch: str_name,
        });
      }
      this.initializeItems();
    });
  }

  initializeItems() {
    this.items = this.itemx;
  }

  getItems(ev) {
    this.initializeItems();

    this.val = ev.target.value;

    if (this.val == '') {
      this.val = '';

    }
    
    if (this.val && this.val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.Subinvetory_Code.toLowerCase().indexOf(this.val.toLowerCase()) > -1);
      });
    }
  }

}
