import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';

@IonicPage()
@Component({
  selector: 'page-listopnameserverdetail',
  templateUrl: 'listopnameserverdetail.html',
})
export class ListopnameserverdetailPage {

  opnameid: any;
  get_data_opname_detail: any;
  loader: any;

  constructor(
    public postPvdr: PostProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.getCurrentData(
      navParams.get('opnameid')
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListopnameserverdetailPage');
  }

  async presentLoading(x) {
    this.loader = await this.loadingCtrl.create({
      content: x,
    });
    return await this.loader.present();
  }

  getCurrentData(opnameid) {
    this.opnameid = opnameid;
    let body = {
      opnameid: opnameid,
      aksi: 'get_data_opname_detail'
    };
    this.presentLoading('Please wait..');
    this.postPvdr.postData(body, 'Transaction').subscribe((data) => {
      if (data.success) {
        // Code here
        this.loader.dismiss();
        this.get_data_opname_detail = [];
        for (let i = 0; i < data.result.length; i++) {
          this.get_data_opname_detail.push({
            'Opname_id': data.result[i].Opname_id,
            'Locator_id': data.result[i].Locator_id,
            'Locator_code': data.result[i].Locator_code,
            'Item_code': data.result[i].Item_code,
            'Item_name': data.result[i].Item_name,
            'Lot_number': data.result[i].Lot_number,
            'SubInventoryCode': data.result[i].SubInventoryCode,
            'Lot_expired_date': data.result[i].Lot_expired_date,
            'Opname_quantity1': data.result[i].Opname_quantity1,
            'Opname_quantity2': data.result[i].Opname_quantity2,
            'Opname_quantity3': data.result[i].Opname_quantity3,
            'Count_by1': data.result[i].Count_by1,
            'Count_by2': data.result[i].Count_by2,
            'Count_by3': data.result[i].Count_by3,
            'Count_date1': data.result[i].Count_date1,
            'Count_date2': data.result[i].Count_date2,
            'Count_date3': data.result[i].Count_date3,
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
                this.getCurrentData(this.opnameid);
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
