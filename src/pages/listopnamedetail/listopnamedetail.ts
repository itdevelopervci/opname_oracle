import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-listopnamedetail',
  templateUrl: 'listopnamedetail.html',
})
export class ListopnamedetailPage {

  opnameid: any;
  opname_item_arr: any;
  opnamedate: any;
  totalitem: any;
  hidedelete: any;

  constructor(
    private sqlite: SQLite,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.getCurrentData(
      navParams.get('opnameid')
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListopnamedetailPage');
  }

  getCurrentData(opnameid) {
    console.log(opnameid)
    this.opnameid = opnameid;
    this.sqlite.create({
      name: 'vci_mobile_oracle.db',
      location: 'default'
    }).then((db: SQLiteObject) => {

      db.executeSql('select * from oracle_opname_detail a where a.opname_id = ? and send_status = 0', [this.opnameid]).then(res => {
        if (res.rows.length > 0) {
          this.hidedelete = 0;
          console.log("Success SELECT table oracle_opname_detail", res)
          this.opname_item_arr = [];
          this.opnamedate = res.rows.item(0).Opname_date;
          for (let i = 0; i < res.rows.length; i++) {
            this.opname_item_arr.push({
              rowid: i + 1,
              Opname_id: res.rows.item(i).Opname_id,
              Locator_id: res.rows.item(i).Locator_id,
              Locator_code: res.rows.item(i).Locator_code,
              Item_code: res.rows.item(i).Item_code,
              Item_name: res.rows.item(i).Item_name,
              Lot_number: res.rows.item(i).Lot_number,
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
              send_status: res.rows.item(i).send_status,
              SubInventoryCode: res.rows.item(i).SubInventoryCode,
              Opname_date: res.rows.item(i).Opname_date
            })
          }

          db.executeSql('select sum(Opname_quantity1) as Opname_quantity1 from oracle_opname_detail where send_status = 0 and opname_id = ?', [this.opnameid]).then(res => {
            if (res.rows.length > 0) {
              console.log("Success SELECT table oracle_opname_detail", res)
              this.totalitem = res.rows.item(0).Opname_quantity1;
              console.log("totalitem", this.totalitem)
            }
          }).catch(e => console.log("Failed SELECT table oracle_opname_detail", e));

        } else {

          this.hidedelete = 1;
          db.executeSql('select * from oracle_opname_detail a where a.opname_id = ? and send_status = 1', [this.opnameid]).then(res => {
            if (res.rows.length > 0) {
              console.log("Success SELECT table oracle_opname_detail", res)
              this.opname_item_arr = [];
              this.opnamedate = res.rows.item(0).Opname_date;
              for (let i = 0; i < res.rows.length; i++) {
                this.opname_item_arr.push({
                  rowid: i + 1,
                  Opname_id: res.rows.item(i).Opname_id,
                  Locator_id: res.rows.item(i).Locator_id,
                  Locator_code: res.rows.item(i).Locator_code,
                  Item_code: res.rows.item(i).Item_code,
                  Item_name: res.rows.item(i).Item_name,
                  Lot_number: res.rows.item(i).Lot_number,
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
                  send_status: res.rows.item(i).send_status,
                  SubInventoryCode: res.rows.item(i).SubInventoryCode,
                  Opname_date: res.rows.item(i).Opname_date
                })
              }

              db.executeSql('select sum(Opname_quantity1) as Opname_quantity1 from oracle_opname_detail where send_status = 1 and opname_id = ?', [this.opnameid]).then(res => {
                if (res.rows.length > 0) {
                  console.log("Success SELECT table oracle_opname_detail", res)
                  this.totalitem = res.rows.item(0).Opname_quantity1;
                  console.log("totalitem", this.totalitem)
                }
              }).catch(e => console.log("Failed SELECT table oracle_opname_detail", e));

            } else {



            }
          }).catch(e => console.log("Failed SELECT table oracle_opname_detail", e));
        }
      }).catch(e => console.log("Failed SELECT table oracle_opname_detail", e));


    });

  }

  deleteItem(i) {
    // const toast = this.toastCtrl.create({
    //   message: i,
    //   duration: 2000,
    //   position: 'top'
    // });
    // toast.present();

    this.sqlite.create({
      name: 'vci_mobile_oracle.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('delete from oracle_opname_detail where Count_date1 = ?', [i]).then(res => {
        console.log("Success delete item", res)
        const toast = this.toastCtrl.create({
          message: 'Item Deleted',
          duration: 2000,
          position: 'top'
        });
        toast.present();

        this.sqlite.create({
          name: 'vci_mobile_oracle.db',
          location: 'default'
        }).then((db: SQLiteObject) => {
          db.executeSql('select * from oracle_opname_detail a where a.opname_id = ? and send_status = 0', [this.opnameid]).then(res => {
            if (res.rows.length > 0) {
              console.log("Success SELECT table oracle_opname_detail", res)
              console.log("subinventorycode", res.rows.item(0).subinventorycode)
              this.opname_item_arr = [];
              this.opnamedate = res.rows.item(0).Opname_date;
              for (let i = 0; i < res.rows.length; i++) {
                this.opname_item_arr.push({
                  rowid: i + 1,
                  Opname_id: res.rows.item(i).Opname_id,
                  Locator_id: res.rows.item(i).Locator_id,
                  Locator_code: res.rows.item(i).Locator_code,
                  Item_code: res.rows.item(i).Item_code,
                  Item_name: res.rows.item(i).Item_name,
                  Lot_number: res.rows.item(i).Lot_number,
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
                  send_status: res.rows.item(i).send_status,
                  SubInventoryCode: res.rows.item(i).SubInventoryCode,
                  Opname_date: res.rows.item(i).Opname_date
                })
              }

              db.executeSql('select sum(Opname_quantity1) as Opname_quantity1 from oracle_opname_detail where send_status = 0 and opname_id = ?', [this.opnameid]).then(res => {
                if (res.rows.length > 0) {
                  console.log("Success SELECT table oracle_opname_detail", res)
                  this.totalitem = res.rows.item(0).Opname_quantity1;
                  console.log("totalitem", this.totalitem)
                } else {
                  this.navCtrl.setRoot(DashboardPage);
                }
              }).catch(e => console.log("Failed SELECT table oracle_opname_detail", e));

            } else {
              this.navCtrl.setRoot(DashboardPage);
            }
          }).catch(e => console.log("Failed SELECT table oracle_opname_detail", e));
        });
      }).catch(e => console.log("Failed delete item", e));
    });
  }

}
