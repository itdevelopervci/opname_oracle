import {
  Component,
  ViewChild
} from '@angular/core';
import {
  AlertController,
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from 'ionic-angular';
import {
  Storage
} from '@ionic/Storage';

@IonicPage()
@Component({
  selector: 'page-searchlocator',
  templateUrl: 'searchlocator.html',
})
export class SearchlocatorPage {

  @ViewChild('search') search: any;

  items;
  itemx: any;
  val: any;
  selectlocator: any;
  selectlocatorid: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController) {

    setTimeout(() => {
      this.search.setFocus();
    }, 500);

    this.storage.get("locator").then((res) => {
      console.log(res)
      this.itemx = [];
      for (let i = 0; i < res.length; i++) {
        // let str_name = res[i].Locator_code + " " + res[i].Subinventory_code;
        this.itemx.push({
          Locator_Id: res[i].Locator_Id,
          Subinventory_code: res[i].Subinventory_code,
          Locator_code: res[i].Locator_code,
          creation_date: res[i].creation_date,
        });
      }
      console.log(res.length)
      this.initializeItems();
    });
  }

  initializeItems() {
    this.items = this.itemx;
  }

  getItems(ev) {
    this.initializeItems();
    const val = ev.target.value;
    if (val && val.trim() != "") {
      this.items = this.items.filter((item) => {
        return (item.Locator_code.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  itemSelected(item, item2) {
    this.selectlocator = item;
    this.selectlocatorid = item2;
    const alert = this.alertCtrl.create({
      // title: this.selectlocatorid,
      subTitle: this.selectlocator,
      buttons: [{
        text: "Select",
        handler: () => {
          var selectlocator = [{
            selectlocator: this.selectlocator,
            selectlocatorid: this.selectlocatorid,

          }];
          this.storage.set("selectlocator", selectlocator);
          this.getDismiss(true);
        }
      }]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchlocatorPage');
  }

  getDismiss(reload) {
    this.viewCtrl.dismiss({
      reload: reload
    });
  }

}
