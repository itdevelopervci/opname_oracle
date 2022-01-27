import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/Storage';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";

import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    private storage: Storage,
    private sqlite: SQLite,
    public splashScreen: SplashScreen) {

    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString("#ffffff");
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storage.get("session_user_login_oracle").then((res) => {
      if (res == null) {
        this.rootPage = LoginPage;
      } else {
        this.rootPage = DashboardPage;
      }
    });

    this.createDatabaseSqlite();
  }

  createDatabaseSqlite() {
    this.sqlite.create({ name: "vci_mobile_oracle.db", location: "default" }).then((db: SQLiteObject) => {
      db.executeSql("CREATE TABLE IF NOT EXISTS oracle_opname_header \
                    (\
                      Opname_id VARCHAR(50), \
                      Opname_date VARCHAR(50), \
                      subinventorycode VARCHAR(50), \
                      send_status INTEGER \
                    )", []).then((res) => {
        console.log("Success create oracle_opname_header", res)
      }).catch((e) => {
        console.log("Failed create oracle_opname_header", e)
      });

      db.executeSql("CREATE TABLE IF NOT EXISTS oracle_opname_detail \
                    (\
                      Opname_id VARCHAR(50), \
                      Locator_id VARCHAR(50), \
                      Locator_code VARCHAR(50), \
                      Item_code VARCHAR(50), \
                      Item_name VARCHAR(100), \
                      Lot_number VARCHAR(50), \
                      SubInventoryCode VARCHAR(20), \
                      Lot_expired_date VARCHAR(50), \
                      Opname_quantity1 VARCHAR(50), \
                      Opname_quantity2 VARCHAR(50), \
                      Opname_quantity3 VARCHAR(50), \
                      Count_by1 VARCHAR(50), \
                      Count_by2 VARCHAR(50), \
                      Count_by3 VARCHAR(50), \
                      Count_date1 VARCHAR(50), \
                      Count_date2 VARCHAR(50), \
                      Count_date3 VARCHAR(50), \
                      Opname_date VARCHAR(50), \
                      send_status INTEGER \
                    )", []).then((res) => {
        console.log("Success create oracle_opname_detail", res)
      }).catch((e) => {
        console.log("Failed create oracle_opname_detail", e)
      });

    });
  }

}

