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
  selector: 'page-searchsubinventory',
  templateUrl: 'searchsubinventory.html',
})
export class SearchsubinventoryPage {

  @ViewChild('search') search: any;

  items;
  itemx: any;
  val: any;
  selected: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController) {

    setTimeout(() => {
      this.search.setFocus();
    }, 500);

    this.storage.get("subinventory").then((res) => {
      console.log(res)
      this.itemx = [];
      for (let i = 0; i < res.length; i++) {
        // let str_name = res[i].Subinvetory_Code + " " + res[i].Subinventory_name;
        this.itemx.push({
          Subinvetory_Code: res[i].Subinvetory_Code,
          Subinventory_name: res[i].Subinventory_name,
          Creation_date: res[i].Creation_date,
          Locator_type: res[i].Locator_type,
          // CodeSearch: str_name,
        });
      }
      this.initializeItems();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchsubinventoryPage');
  }

  initializeItems() {
    this.items = this.itemx;
  }

  getItems(ev) {
    this.initializeItems();
    const val = ev.target.value;
    if (val && val.trim() != "") {
      this.items = this.items.filter((item) => {
        return (item.Subinvetory_Code.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  itemSelected(item, itemname) {
    this.selected = item;
    const alert = this.alertCtrl.create({
      title: this.selected,
      subTitle: itemname,
      buttons: [{
        text: "Select",
        handler: () => {
          var subinventorycode = [{
            subinventorycode: this.selected
          }];
          this.storage.set("selectsubinventorycode", subinventorycode);
          this.getDismiss(true);
        }
      }]
    });
    alert.present();
  }

  getDismiss(reload) {
    this.viewCtrl.dismiss({
      reload: reload
    });
  }



}
