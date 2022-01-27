webpackJsonp([8],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpnameproccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__searchsubinventory_searchsubinventory__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_provider__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_Storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__searchlocator_searchlocator__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__listopname_listopname__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var OpnameproccessPage = (function () {
    function OpnameproccessPage(navCtrl, navParams, postPvdr, loadingCtrl, toastCtrl, alertCtrl, barcodeScanner, storage, modalCtrl, sqlite, plt) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postPvdr = postPvdr;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.barcodeScanner = barcodeScanner;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.sqlite = sqlite;
        this.plt = plt;
        this.myDate = new Date().toISOString();
        this.today = new Date();
        this.date = this.today.getFullYear() + "-" + this.pickMonth(this.today.getMonth() + 1) + "-" + this.pickDate(this.today.getDate());
        this.myTime = new Date(this.today.getTime() - this.today.getTimezoneOffset() * 60000).toISOString();
        this.opnamedate = new Date().toISOString();
        this.myDate = this.myDate.substring(0, 10);
        this.opnamedate = this.myDate.substring(0, 10);
        console.log('date ', this.opnamedate);
        var opname_date = this.date + " " + this.myTime.substring(11, 19);
        console.log('date time ', opname_date);
        this.searchitem = '';
        this.searchsubandlocator = '';
        setTimeout(function () {
            _this.search.setFocus();
        }, 500);
        setTimeout(function () {
            _this.searchcsub.setFocus();
        }, 500);
        this.storage.get("subinventory").then(function (res) {
            if (res == null) {
                _this.getSync();
            }
        });
        if (this.plt.is('android')) {
            this.getCurrentData(navParams.get('itemcode'), navParams.get('itemname'), navParams.get('uom'), navParams.get('lot'), navParams.get('rgdate'), navParams.get('exprdate'));
        }
    }
    OpnameproccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpnameproccessPage');
    };
    OpnameproccessPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get("selectsubinventorycode").then(function (res) {
            if (res == null) {
                _this.codesubinv = '';
            }
            else {
                _this.codesubinv = res[0].subinventorycode;
            }
            console.log(_this.codesubinv);
        });
        this.storage.get("selectlocator").then(function (res) {
            console.log(res);
            if (res == null) {
                _this.codelocator = '';
            }
            else {
                _this.codelocator = res[0].selectlocator;
                _this.codelocatorid = res[0].selectlocatorid;
            }
            console.log(_this.codelocator);
            console.log(_this.codelocatorid);
        });
        this.storage.get('session_user_login_oracle').then(function (res) {
            console.log(res);
            _this.username = res[0].username;
            _this.iduser = res[0].employee_id;
            _this.employee_nik = res[0].employee_nik;
            _this.storage.get("opnameid").then(function (opnameid) {
                console.log('opnameid get ', opnameid);
                var year_month = _this.opnamedate.substring(2, 4) + "" + _this.opnamedate.substring(5, 7) + "" + _this.opnamedate.substring(8, 10);
                console.log("year_month : ", year_month);
                var id = opnameid;
                if (id == 0 || id == null) {
                    _this.opnameid = _this.employee_nik + year_month;
                    console.log("opnameid baru : ", _this.opnameid);
                    // } else {
                    //   this.opnameid = parseInt(id) + 1;
                    //   console.log("opnameid : ", this.opnameid);
                }
            });
        });
        this.countItem();
    };
    OpnameproccessPage.prototype.getCurrentData = function (itemcode, itemname, uom, lot, rgdate, exprdate) {
        var a = itemcode;
        this.itemcode = a.trim();
        this.itemname = itemname;
        this.uom = uom;
        this.lot = lot;
        this.rgdate = rgdate;
        this.exprdate = exprdate;
        console.log(this.itemcode, this.itemname, this.lot, this.rgdate, this.exprdate);
        if (this.itemcode != '') {
            this.inputQty();
        }
    };
    OpnameproccessPage.prototype.selectDate = function () {
        this.myDate = this.myDate.substring(0, 10);
        console.log('Date picker : ', this.myDate);
    };
    OpnameproccessPage.prototype.gotoSearchSubInventory = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__searchsubinventory_searchsubinventory__["a" /* SearchsubinventoryPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data.reload) {
                _this.checkCodeSubInv();
            }
        });
    };
    OpnameproccessPage.prototype.checkCodeSubInv = function () {
        var _this = this;
        this.storage.get("selectsubinventorycode").then(function (res) {
            if (res == null) {
                _this.codesubinv = '';
            }
            else {
                _this.codesubinv = res[0].subinventorycode;
            }
            console.log(_this.codesubinv);
        });
    };
    OpnameproccessPage.prototype.gotoSearchLocator = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__searchlocator_searchlocator__["a" /* SearchlocatorPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data.reload) {
                _this.checkCodeLocator();
            }
        });
    };
    OpnameproccessPage.prototype.checkCodeLocator = function () {
        var _this = this;
        this.storage.get("selectlocator").then(function (res) {
            console.log(res);
            if (res == null) {
                _this.codelocator = '';
            }
            else {
                _this.codelocator = res[0].selectlocator;
                _this.codelocatorid = res[0].selectlocatorid;
            }
            console.log(_this.codelocator);
            console.log(_this.codelocatorid);
        });
    };
    OpnameproccessPage.prototype.presentLoading = function (x) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                content: x,
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        return [4 /*yield*/, this.loader.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    OpnameproccessPage.prototype.getSync = function () {
        var _this = this;
        var body = {
            aksi: 'getSync',
        };
        this.presentLoading('Please wait..');
        this.postPvdr.postData(body, 'Sync').subscribe(function (data) {
            var alertpesan = data.msg;
            if (data.success) {
                _this.loader.dismiss();
                _this.storage.set('subinventory', data.result);
                // const toast = this.toastCtrl.create({
                //   message: alertpesan,
                //   duration: 2000,
                //   position: 'top'
                // });
                // toast.present();
                _this.storage.get("locator").then(function (res) {
                    if (res == null) {
                        _this.getMasterLocator();
                    }
                });
            }
            else {
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: alertpesan,
                    duration: 1000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            _this.loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Pehatian',
                subTitle: 'Sinkronisasi produk gagal',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    OpnameproccessPage.prototype.getMasterLocator = function () {
        var _this = this;
        var body = {
            aksi: 'getLocator',
        };
        this.presentLoading('Please wait..');
        this.postPvdr.postData(body, 'Sync').subscribe(function (data) {
            var alertpesan = data.msg;
            if (data.success) {
                _this.loader.dismiss();
                _this.storage.set('locator', data.result);
                var toast = _this.toastCtrl.create({
                    message: alertpesan,
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: alertpesan,
                    duration: 1000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            _this.loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Pehatian',
                subTitle: 'Sinkronisasi produk gagal',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    OpnameproccessPage.prototype.getLocator = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.codelocator = barcodeData.text;
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    OpnameproccessPage.prototype.pickMonth = function (m) {
        if (m * 1 < 10) {
            m = '0' + m;
        }
        else {
            m = m;
        }
        return m;
    };
    OpnameproccessPage.prototype.pickDate = function (d) {
        if (d * 1 < 10) {
            d = '0' + d;
        }
        else {
            d = d;
        }
        return d;
    };
    OpnameproccessPage.prototype.monthNow = function (m) {
        if (m * 1 < 10) {
            m = '0' + m;
        }
        else {
            m = m;
        }
        return m;
    };
    OpnameproccessPage.prototype.dateNow = function (d) {
        if (d * 1 < 10) {
            d = '0' + d;
        }
        else {
            d = d;
        }
        return d;
    };
    OpnameproccessPage.prototype.inputQty = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Input',
                    handler: function (data) {
                        _this.quantity = data.qty;
                    }
                }
            ]
        });
        prompt.present();
    };
    OpnameproccessPage.prototype.insertOpnameDetail = function () {
        var _this = this;
        var today = new Date();
        var date = today.getFullYear() + "-" + this.pickMonth(this.today.getMonth() + 1) + "-" + this.pickDate(this.today.getDate());
        var myTime = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString();
        var opname_date_time = date + " " + myTime.substring(11, 19);
        console.log('date time ', opname_date_time);
        this.sqlite.create({
            name: 'vci_mobile_oracle.db',
            location: 'default'
        }).then(function (db) {
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
        VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [
                _this.opnameid,
                _this.codelocatorid,
                _this.codelocator,
                _this.itemcode,
                _this.itemname,
                _this.lot,
                _this.codesubinv,
                _this.exprdate,
                _this.quantity,
                '',
                '',
                _this.username,
                '',
                '',
                opname_date_time,
                '',
                '',
                _this.myDate,
                0
            ])
                .then(function (res) {
                console.log("Success insert table oracle_opname_detail", res);
                _this.countItem();
                _this.confirmAddMoreItem();
                _this.itemcode = '';
                _this.itemname = '';
                _this.uom = '';
                _this.lot = '';
                _this.rgdate = '';
                _this.exprdate = '';
                _this.quantity = 0;
                // this.insertHeader();
            })
                .catch(function (e) { return console.log("Failed insert table oracle_opname_detail", e); });
        });
    };
    OpnameproccessPage.prototype.insertHeader = function () {
        var _this = this;
        this.sqlite.create({
            name: 'vci_mobile_oracle.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('INSERT INTO oracle_opname_header (\
        Opname_id, \
        Opname_date, \
        subinventorycode, \
        send_status)\
        VALUES(?,?,?,?)', [
                _this.opnameid,
                _this.opnamedate,
                _this.codesubinv,
                0,
            ])
                .then(function (res) {
                console.log("Success insert table oracle_opname_header", res);
                _this.countItem();
                _this.confirmAddMoreItem();
                _this.itemcode = '';
                _this.itemname = '';
                _this.uom = '';
                _this.lot = '';
                _this.rgdate = '';
                _this.exprdate = '';
                _this.quantity = 0;
            })
                .catch(function (e) { return console.log("Failed insert table oracle_opname_header", e); });
        });
    };
    OpnameproccessPage.prototype.countItem = function () {
        var _this = this;
        this.storage.get('session_user_login_oracle').then(function (res) {
            console.log(res);
            _this.username = res[0].username;
            _this.iduser = res[0].employee_id;
            _this.employee_nik = res[0].employee_nik;
            _this.storage.get("opnameid").then(function (opnameid) {
                console.log('opnameid get ', opnameid);
                var year_month = _this.opnamedate.substring(2, 4) + "" + _this.opnamedate.substring(5, 7) + "" + _this.opnamedate.substring(8, 10);
                console.log("year_month : ", year_month);
                var id = opnameid;
                if (id == 0 || id == null) {
                    _this.opnameid = _this.employee_nik + year_month;
                    console.log("opnameid baru : ", _this.opnameid);
                    // } else {
                    //   this.opnameid = parseInt(id) + 1;
                    //   console.log("opnameid : ", this.opnameid);
                    _this.sqlite.create({
                        name: 'vci_mobile_oracle.db',
                        location: 'default'
                    }).then(function (db) {
                        //   db.executeSql('SELECT * FROM oracle_opname_detail WHERE send_status = ?', [0]).then(res => {
                        //     if (res.rows.length > 0) {
                        //       console.log("Success SELECT table oracle_opname_detail", res)
                        //       for (let i = 0; i < res.rows.length; i++) {
                        //         this.opnameid = res.rows.item(i).Opname_id;
                        //         console.log('opnameid ', this.opnameid);
                        db.executeSql('select count(Opname_id) as Opname_id from oracle_opname_detail where Opname_id = ? and send_status = 0', [_this.opnameid]).then(function (res) {
                            if (res.rows.length > 0) {
                                console.log("Success SELECT table oracle_opname_detail", _this.opnameid);
                                _this.count_opname_id = res.rows.item(0).Opname_id;
                            }
                            else {
                                console.log("Failed SELECT table oracle_opname_detail", res);
                            }
                        }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_detail", e); });
                        //     }
                        //   }
                        // }).catch(e => console.log("Failed SELECT table oracle_opname_detail", e));
                    });
                }
            });
        });
    };
    OpnameproccessPage.prototype.confirmAddMoreItem = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            // title: 'Scan more item?',
            enableBackdropDismiss: false,
            mode: 'ios',
            message: 'Scan more item?',
            buttons: [{
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                        _this.confirmSendOpname();
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.chooseScanInput();
                    }
                }
            ]
        });
        confirm.present();
    };
    OpnameproccessPage.prototype.scanSubinvAndLocator = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            enableBackdropDismiss: false,
            mode: 'ios',
            message: 'Choose option to scan',
            buttons: [{
                    text: 'Camera Scan',
                    handler: function () {
                        _this.getSubInvandLocatorCamera();
                    }
                },
                {
                    text: 'Flash Scan',
                    handler: function () {
                        document.getElementById('title').style.display = 'none';
                        document.getElementById('scansubinvandlocator').style.display = '';
                        _this.searchsubandlocator = '';
                        setTimeout(function () {
                            _this.searchcsub.setFocus();
                        }, 500);
                    }
                }
            ]
        });
        confirm.present();
    };
    OpnameproccessPage.prototype.getSubInvandLocator = function (event) {
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
    };
    OpnameproccessPage.prototype.getSubInvandLocatorCamera = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            var scannedItemCode = barcodeData.text;
            var itemscan = scannedItemCode;
            var item = itemscan.split('*');
            _this.codelocator = item[0].trim();
            _this.codesubinv = item[1].trim();
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    OpnameproccessPage.prototype.getLocatorOption = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            // title: 'Scan more item?',
            enableBackdropDismiss: false,
            mode: 'ios',
            message: 'Choose option to select locator',
            buttons: [
                {
                    text: 'Delete',
                    handler: function () {
                        _this.codelocator = '';
                    }
                },
                {
                    text: 'Camrea Scan',
                    handler: function () {
                        _this.getLocator();
                    }
                },
                {
                    text: 'Search',
                    handler: function () {
                        _this.gotoSearchLocator();
                    }
                }
            ]
        });
        confirm.present();
    };
    OpnameproccessPage.prototype.getCodeItem = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedItemCode = barcodeData.text;
            var itemscan = _this.scannedItemCode;
            var item = itemscan.split('*');
            var a = item[0];
            _this.itemcode = a.trim();
            _this.itemname = item[1];
            _this.uom = item[2];
            _this.lot = item[3];
            _this.rgdate = item[4];
            _this.exprdate = item[5];
            _this.inputQty();
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    OpnameproccessPage.prototype.chooseScanInput = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            // title: 'Scan more item?',
            enableBackdropDismiss: false,
            mode: 'ios',
            message: 'Choose scan type',
            buttons: [{
                    text: 'Camera Scan',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.getCodeItem();
                    }
                },
                {
                    text: 'Flash Scan',
                    handler: function () {
                        console.log('Disagree clicked');
                        document.getElementById('title').style.display = 'none';
                        document.getElementById('searchitem').style.display = '';
                        _this.searchitem = '';
                        setTimeout(function () {
                            _this.search.setFocus();
                        }, 500);
                    }
                }
            ]
        });
        confirm.present();
    };
    OpnameproccessPage.prototype.getItems = function (event) {
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
    };
    OpnameproccessPage.prototype.confirmSendOpname = function () {
        var _this = this;
        this.selectAllPendingOpnameDetail();
        var confirm = this.alertCtrl.create({
            enableBackdropDismiss: false,
            mode: 'ios',
            message: 'Send data opname?',
            buttons: [{
                    text: 'later',
                    handler: function () {
                        console.log('cancel clicked');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard__["a" /* DashboardPage */]);
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
                    handler: function () {
                        console.log('send clicked');
                        _this.sendTransactionDet();
                    }
                }
            ]
        });
        confirm.present();
    };
    OpnameproccessPage.prototype.openListOpname = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__listopname_listopname__["a" /* ListopnamePage */]);
    };
    OpnameproccessPage.prototype.gotoDashboard = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    OpnameproccessPage.prototype.selectAllPendingOpnameDetail = function () {
        var _this = this;
        // Detail
        this.sqlite.create({
            name: 'vci_mobile_oracle.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('select * from oracle_opname_detail where send_status = ?', [0]).then(function (res) {
                if (res.rows.length > 0) {
                    console.log("Success SELECT table oracle_opname_detail", res);
                    _this.oracle_opname_detail = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.oracle_opname_detail.push({
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
                    console.log('oracle_opname_detail Data ', _this.oracle_opname_detail);
                }
            }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_detail", e); });
        });
        // header
        this.sqlite.create({
            name: 'vci_mobile_oracle.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('select * from oracle_opname_header where send_status = ?', [0]).then(function (res) {
                if (res.rows.length > 0) {
                    console.log("Success SELECT table oracle_opname_header", res);
                    _this.oracle_opname_header = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.oracle_opname_header.push({
                            Opname_id: res.rows.item(i).Opname_id,
                            Opname_date: res.rows.item(i).Opname_date,
                            subinventorycode: res.rows.item(i).subinventorycode
                        });
                    }
                    console.log('oracle_opname_header Data ', _this.oracle_opname_header);
                }
            }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_header", e); });
        });
    };
    OpnameproccessPage.prototype.sendTransactionDet = function () {
        var _this = this;
        var body = {
            oracle_opname_detail: this.oracle_opname_detail,
            aksi: 'send_opname_det'
        };
        this.presentLoading('Please wait..');
        this.postPvdr.postData(body, 'Transaction').subscribe(function (data) {
            if (data.success) {
                // send trans_so_det
                _this.sendTransactionHeader();
                // update status
                _this.sqlite.create({
                    name: 'vci_mobile_oracle.db',
                    location: 'default'
                }).then(function (db) {
                    db.executeSql('UPDATE oracle_opname_detail SET send_status = ?', [1])
                        .then(function (res) {
                        console.log("Success update table oracle_opname_detail ", res);
                    })
                        .catch(function (e) { return console.log("Failed update table oracle_opname_detail", e); });
                });
            }
            else {
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Transaksi Detail Tidak Terkirim',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            _this.loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Pehatian',
                subTitle: 'Tidak tersabung dengan Internet, cek kembali signal atau kuota internet anda. [Detail]',
                // buttons: ['OK']
                buttons: [
                    {
                        text: 'Kirim Ulang',
                        handler: function () {
                            _this.sendTransactionDet();
                        }
                    },
                    {
                        text: 'Ok',
                        handler: function () {
                            // code here
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    OpnameproccessPage.prototype.sendTransactionHeader = function () {
        var _this = this;
        var body = {
            oracle_opname_header: this.oracle_opname_header,
            aksi: 'send_opname_header'
        };
        // this.presentLoading('Please wait..');
        this.postPvdr.postData(body, 'Transaction').subscribe(function (data) {
            if (data.success) {
                // update status
                _this.sqlite.create({
                    name: 'vci_mobile_oracle.db',
                    location: 'default'
                }).then(function (db) {
                    db.executeSql('UPDATE oracle_opname_header SET send_status = ?', [1])
                        .then(function (res) {
                        console.log("Success update table oracle_opname_header ", res);
                    })
                        .catch(function (e) { return console.log("Failed update table oracle_opname_header", e); });
                });
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Send data opname success',
                    duration: 2000,
                    position: 'middle'
                });
                toast.present();
                // this.countItem();
                // this.countItemOpnameId();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard__["a" /* DashboardPage */]);
            }
            else {
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Transaksi Detail Tidak Terkirim',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            _this.loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Pehatian',
                subTitle: 'Tidak tersabung dengan Internet, cek kembali signal atau kuota internet anda. [Header]',
                // buttons: ['OK']
                buttons: [
                    {
                        text: 'Kirim Ulang',
                        handler: function () {
                            _this.sendTransactionHeader();
                        }
                    },
                    {
                        text: 'Ok',
                        handler: function () {
                            // code here
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('search'),
        __metadata("design:type", Object)
    ], OpnameproccessPage.prototype, "search", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchcsub'),
        __metadata("design:type", Object)
    ], OpnameproccessPage.prototype, "searchcsub", void 0);
    OpnameproccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opnameproccess',template:/*ion-inline-start:"E:\PROJECT\opname\src\pages\opnameproccess\opnameproccess.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title id="title">Opname Proccess</ion-title>\n    <ion-searchbar id="searchitem" #search style="display: none;" [(ngModel)]="searchitem" placeholder="Input item" (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-searchbar id="scansubinvandlocator" #searchcsub style="display: none;" [(ngModel)]="searchsubandlocator" placeholder="Scan Subinventory and Locator" (ionInput)="getSubInvandLocator($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openListOpname()">\n        <ion-icon md="list-outline"></ion-icon>\n        <ion-badge mode="ios" color="goldenrod" item-end>{{count_opname_id}}</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!-- <div *ngIf="afterAddItem">\n    <ion-card class="azz-card">\n      <ion-item no-lines>\n        <ion-label style="padding-top: 8px;">\n          <p style="color: grey;">F0120002</p>\n          <h3><b>MIRANDA HAIR COLOR BLUE30 NEW KOKO ASD</b></h3>\n          <p style="color: grey;">12 Pcs | RG : 2020-01-01 | Expr : 2020-12-31</p>\n        </ion-label>\n      </ion-item>\n    </ion-card>\n  </div> -->\n\n  <ion-list no-lines>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Opname Date</ion-label>\n          <ion-datetime (ionBlur)="selectDate()" displayFormat="YYYY-MM-DD" pickerFormat="DD MM YYYY" [(ngModel)]="myDate"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Item Code</ion-label>\n          <ion-input disabled [(ngModel)]="itemcode"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Item Name</ion-label>\n          <ion-input disabled [(ngModel)]="itemname"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Lot Number</ion-label>\n          <ion-input disabled [(ngModel)]="lot"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>RG Date</ion-label>\n          <ion-input disabled [(ngModel)]="rgdate"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Expired Date</ion-label>\n          <ion-input disabled [(ngModel)]="exprdate"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Created Date</ion-label>\n          <ion-input disabled [(ngModel)]="opnamedate"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding>\n      <ion-col>\n        <button ion-button block class="azz-button" color="goldenrod" (click)="scanSubinvAndLocator()">Scan Sub Inventory & Locator</button>\n      </ion-col>\n    </ion-row>\n\n    <br>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Sub Inventory</ion-label>\n          <ion-input disabled type="text" placeholder="search sub inventory" [(ngModel)]="codesubinv">{{codesubinv}}\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3 padding>\n        <button ion-button round color="danger" (click)="gotoSearchSubInventory()" clear block icon-only>\n          <ion-icon md="search-outline"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Locator</ion-label>\n          <ion-input disabled type="text" placeholder="input locator" [(ngModel)]="codelocator">{{codelocator}}\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3 padding>\n        <button ion-button round color="danger" clear block icon-only (click)="getLocatorOption()">\n          <ion-icon md="search-outline"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Quantity ({{uom}})</ion-label>\n          <ion-input disabled class="qty" type="number" placeholder="input qty" [(ngModel)]="quantity"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3 padding>\n        <button ion-button round color="danger" (click)="inputQty()" clear block icon-only>\n          <ion-icon md="create-outline"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding>\n      <ion-col>\n        <button ion-button block class="azz-button" color="goldenrod" [disabled]="!codesubinv" (click)="insertOpnameDetail()">Add Item</button>\n      </ion-col>\n      <!-- <ion-col>\n        <button ion-button block class="azz-button" color="primary">Submit</button>\n      </ion-col> -->\n    </ion-row>\n    <ion-row padding>\n      <ion-col>\n        <button ion-button block class="azz-button-noshadow" clear (click)="gotoDashboard()">Back to Dashboard</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-list>\n\n  <!-- \n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Sub Inventory</ion-label>\n          <ion-input (click)="gotoSearchSubInventory()" disabled type="text" placeholder="search sub inventory" [(ngModel)]="codesubinv">{{codesubinv}}</ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Locator</ion-label>\n          <ion-input type="text" placeholder="input locator"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3 padding>\n        <button ion-button round color="danger" clear block icon-only>\n          <ion-icon name="qr-code-outline"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Quantity ({{uom}})</ion-label>\n          <ion-input class="qty" type="number" placeholder="input qty"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row> \n\n    <ion-item></ion-item>\n\n  </ion-list> -->\n\n</ion-content>\n\n<!-- <ion-footer style="background-color: white">\n\n  <ion-list>\n    \n\n  </ion-list>\n\n</ion-footer> -->\n`/*ion-inline-end:"E:\PROJECT\opname\src\pages\opnameproccess\opnameproccess.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_post_provider__["a" /* PostProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_Storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], OpnameproccessPage);
    return OpnameproccessPage;
}());

//# sourceMappingURL=opnameproccess.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchsubinventoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchsubinventoryPage = (function () {
    function SearchsubinventoryPage(navCtrl, navParams, storage, alertCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        setTimeout(function () {
            _this.search.setFocus();
        }, 500);
        this.storage.get("subinventory").then(function (res) {
            console.log(res);
            _this.itemx = [];
            for (var i = 0; i < res.length; i++) {
                // let str_name = res[i].Subinvetory_Code + " " + res[i].Subinventory_name;
                _this.itemx.push({
                    Subinvetory_Code: res[i].Subinvetory_Code,
                    Subinventory_name: res[i].Subinventory_name,
                    Creation_date: res[i].Creation_date,
                    Locator_type: res[i].Locator_type,
                });
            }
            _this.initializeItems();
        });
    }
    SearchsubinventoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchsubinventoryPage');
    };
    SearchsubinventoryPage.prototype.initializeItems = function () {
        this.items = this.itemx;
    };
    SearchsubinventoryPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != "") {
            this.items = this.items.filter(function (item) {
                return (item.Subinvetory_Code.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchsubinventoryPage.prototype.itemSelected = function (item, itemname) {
        var _this = this;
        this.selected = item;
        var alert = this.alertCtrl.create({
            title: this.selected,
            subTitle: itemname,
            buttons: [{
                    text: "Select",
                    handler: function () {
                        var subinventorycode = [{
                                subinventorycode: _this.selected
                            }];
                        _this.storage.set("selectsubinventorycode", subinventorycode);
                        _this.getDismiss(true);
                    }
                }]
        });
        alert.present();
    };
    SearchsubinventoryPage.prototype.getDismiss = function (reload) {
        this.viewCtrl.dismiss({
            reload: reload
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('search'),
        __metadata("design:type", Object)
    ], SearchsubinventoryPage.prototype, "search", void 0);
    SearchsubinventoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-searchsubinventory',template:/*ion-inline-start:"E:\PROJECT\opname\src\pages\searchsubinventory\searchsubinventory.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-searchbar #search placeholder="search subinventory" (input)="getItems($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="getDismiss(false)">\n        <ion-icon name="close-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list *ngIf=" val != \'\' ">\n    <ion-item *ngFor="let item of items" (click)="itemSelected(item.Subinvetory_Code,item.Subinventory_name)">\n      {{ item.Subinvetory_Code }}\n      <p style="word-wrap: break-word;">{{ item.Subinventory_name }}</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"E:\PROJECT\opname\src\pages\searchsubinventory\searchsubinventory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], SearchsubinventoryPage);
    return SearchsubinventoryPage;
}());

//# sourceMappingURL=searchsubinventory.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchlocatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchlocatorPage = (function () {
    function SearchlocatorPage(navCtrl, navParams, storage, alertCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        setTimeout(function () {
            _this.search.setFocus();
        }, 500);
        this.storage.get("locator").then(function (res) {
            console.log(res);
            _this.itemx = [];
            for (var i = 0; i < res.length; i++) {
                // let str_name = res[i].Locator_code + " " + res[i].Subinventory_code;
                _this.itemx.push({
                    Locator_Id: res[i].Locator_Id,
                    Subinventory_code: res[i].Subinventory_code,
                    Locator_code: res[i].Locator_code,
                    creation_date: res[i].creation_date,
                });
            }
            _this.initializeItems();
        });
    }
    SearchlocatorPage.prototype.initializeItems = function () {
        this.items = this.itemx;
    };
    SearchlocatorPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != "") {
            this.items = this.items.filter(function (item) {
                return (item.Locator_code.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchlocatorPage.prototype.itemSelected = function (item, item2) {
        var _this = this;
        this.selectlocator = item;
        this.selectlocatorid = item2;
        var alert = this.alertCtrl.create({
            // title: this.selectlocatorid,
            subTitle: this.selectlocator,
            buttons: [{
                    text: "Select",
                    handler: function () {
                        var selectlocator = [{
                                selectlocator: _this.selectlocator,
                                selectlocatorid: _this.selectlocatorid,
                            }];
                        _this.storage.set("selectlocator", selectlocator);
                        _this.getDismiss(true);
                    }
                }]
        });
        alert.present();
    };
    SearchlocatorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchlocatorPage');
    };
    SearchlocatorPage.prototype.getDismiss = function (reload) {
        this.viewCtrl.dismiss({
            reload: reload
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('search'),
        __metadata("design:type", Object)
    ], SearchlocatorPage.prototype, "search", void 0);
    SearchlocatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-searchlocator',template:/*ion-inline-start:"E:\PROJECT\opname\src\pages\searchlocator\searchlocator.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-searchbar #search placeholder="search locator" (input)="getItems($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="getDismiss(false)">\n        <ion-icon name="close-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list *ngIf=" val != \'\' ">\n    <ion-item *ngFor="let item of items | slice:0:100; let i=index" (click)="itemSelected(item.Locator_code,item.Locator_Id)">\n      {{ item.Locator_code }}\n      <p style="word-wrap: break-word;">{{ item.Subinventory_code }}</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"E:\PROJECT\opname\src\pages\searchlocator\searchlocator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_Storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], SearchlocatorPage);
    return SearchlocatorPage;
}());

//# sourceMappingURL=searchlocator.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListopnameserverdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_post_provider__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ListopnameserverdetailPage = (function () {
    function ListopnameserverdetailPage(postPvdr, loadingCtrl, toastCtrl, alertCtrl, navCtrl, navParams) {
        this.postPvdr = postPvdr;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getCurrentData(navParams.get('opnameid'));
    }
    ListopnameserverdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListopnameserverdetailPage');
    };
    ListopnameserverdetailPage.prototype.presentLoading = function (x) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                content: x,
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        return [4 /*yield*/, this.loader.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ListopnameserverdetailPage.prototype.getCurrentData = function (opnameid) {
        var _this = this;
        this.opnameid = opnameid;
        var body = {
            opnameid: opnameid,
            aksi: 'get_data_opname_detail'
        };
        this.presentLoading('Please wait..');
        this.postPvdr.postData(body, 'Transaction').subscribe(function (data) {
            if (data.success) {
                // Code here
                _this.loader.dismiss();
                _this.get_data_opname_detail = [];
                for (var i = 0; i < data.result.length; i++) {
                    _this.get_data_opname_detail.push({
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
                    });
                }
            }
            else {
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Empty',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            _this.loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Pehatian',
                subTitle: 'Tidak tersabung dengan Internet, cek kembali signal atau kuota internet anda.',
                buttons: [
                    {
                        text: 'Try Again',
                        handler: function () {
                            _this.getCurrentData(_this.opnameid);
                        }
                    },
                    {
                        text: 'Ok',
                        handler: function () {
                            // code here
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    ListopnameserverdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listopnameserverdetail',template:/*ion-inline-start:"E:\PROJECT\opname\src\pages\listopnameserverdetail\listopnameserverdetail.html"*/`<!--\n  Generated template for the ListopnameserverdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{opnameid}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div padding class="table-responsive fitscreen">\n    <table class="table">\n      <thead class="thead-dark">\n        <tr>\n          <th scope="col" style="text-align: left;">Opname ID</th>\n          <th scope="col" style="text-align: left;">Locator_id</th>\n          <th scope="col" style="text-align: left;">Locator_code</th>\n          <th scope="col" style="text-align: left;">Item_code</th>\n          <th scope="col" style="text-align: left;">Item_name</th>\n          <th scope="col" style="text-align: left;">Lot_number</th>\n          <th scope="col" style="text-align: left;">SubInventoryCode</th>\n          <th scope="col" style="text-align: left;">Lot_expired_date</th>\n          <th scope="col" style="text-align: left;">Opname_quantity1</th>\n          <th scope="col" style="text-align: left;">Opname_quantity2</th>\n          <th scope="col" style="text-align: left;">Opname_quantity3</th>\n          <th scope="col" style="text-align: left;">Count_by1</th>\n          <th scope="col" style="text-align: left;">Count_by2</th>\n          <th scope="col" style="text-align: left;">Count_by3</th>\n          <th scope="col" style="text-align: left;">Count_date1</th>\n          <th scope="col" style="text-align: left;">Count_date2</th>\n          <th scope="col" style="text-align: left;">Count_date3</th>\n          <th scope="col" style="text-align: left;">Opname_date</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor="let item of get_data_opname_detail">\n          <th nowrap scope="row">{{item.Opname_id}}</th>\n          <td nowrap>{{item.Locator_id}}</td>\n          <td nowrap>{{item.Locator_code}}</td>\n          <td nowrap>{{item.Item_code}}</td>\n          <td nowrap>{{item.Item_name}}</td>\n          <td nowrap>{{item.Lot_number}}</td>\n          <td nowrap>{{item.SubInventoryCode}}</td>\n          <td nowrap>{{item.Lot_expired_date}}</td>\n          <td nowrap>{{item.Opname_quantity1}}</td>\n          <td nowrap>{{item.Opname_quantity2}}</td>\n          <td nowrap>{{item.Opname_quantity3}}</td>\n          <td nowrap>{{item.Count_by1}}</td>\n          <td nowrap>{{item.Count_by2}}</td>\n          <td nowrap>{{item.Count_by3}}</td>\n          <td nowrap>{{item.Count_date1}}</td>\n          <td nowrap>{{item.Count_date2}}</td>\n          <td nowrap>{{item.Count_date3}}</td>\n          <td nowrap>{{item.Opname_date}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n</ion-content>\n`/*ion-inline-end:"E:\PROJECT\opname\src\pages\listopnameserverdetail\listopnameserverdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_post_provider__["a" /* PostProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListopnameserverdetailPage);
    return ListopnameserverdetailPage;
}());

//# sourceMappingURL=listopnameserverdetail.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		289,
		7
	],
	"../pages/listopname/listopname.module": [
		290,
		6
	],
	"../pages/listopnamedetail/listopnamedetail.module": [
		291,
		5
	],
	"../pages/listopnameserverdetail/listopnameserverdetail.module": [
		292,
		4
	],
	"../pages/login/login.module": [
		293,
		3
	],
	"../pages/opnameproccess/opnameproccess.module": [
		294,
		2
	],
	"../pages/searchlocator/searchlocator.module": [
		295,
		1
	],
	"../pages/searchsubinventory/searchsubinventory.module": [
		296,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_barcode_scanner__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_post_provider__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_Storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_dashboard_dashboard__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_searchsubinventory_searchsubinventory__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_searchlocator_searchlocator__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_opnameproccess_opnameproccess__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_listopname_listopname__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_listopnamedetail_listopnamedetail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_listopnameserverdetail_listopnameserverdetail__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_searchsubinventory_searchsubinventory__["a" /* SearchsubinventoryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_searchlocator_searchlocator__["a" /* SearchlocatorPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_opnameproccess_opnameproccess__["a" /* OpnameproccessPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_listopname_listopname__["a" /* ListopnamePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_listopnamedetail_listopnamedetail__["a" /* ListopnamedetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_listopnameserverdetail_listopnameserverdetail__["a" /* ListopnameserverdetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_Storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listopname/listopname.module#ListopnamePageModule', name: 'ListopnamePage', segment: 'listopname', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listopnamedetail/listopnamedetail.module#ListopnamedetailPageModule', name: 'ListopnamedetailPage', segment: 'listopnamedetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listopnameserverdetail/listopnameserverdetail.module#ListopnameserverdetailPageModule', name: 'ListopnameserverdetailPage', segment: 'listopnameserverdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opnameproccess/opnameproccess.module#OpnameproccessPageModule', name: 'OpnameproccessPage', segment: 'opnameproccess', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searchlocator/searchlocator.module#SearchlocatorPageModule', name: 'SearchlocatorPage', segment: 'searchlocator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searchsubinventory/searchsubinventory.module#SearchsubinventoryPageModule', name: 'SearchsubinventoryPage', segment: 'searchsubinventory', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_searchsubinventory_searchsubinventory__["a" /* SearchsubinventoryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_searchlocator_searchlocator__["a" /* SearchlocatorPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_opnameproccess_opnameproccess__["a" /* OpnameproccessPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_listopname_listopname__["a" /* ListopnamePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_listopnamedetail_listopnamedetail__["a" /* ListopnamedetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_listopnameserverdetail_listopnameserverdetail__["a" /* ListopnameserverdetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__providers_post_provider__["a" /* PostProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, storage, sqlite, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.storage = storage;
        this.sqlite = sqlite;
        this.splashScreen = splashScreen;
        this.platform.ready().then(function () {
            _this.statusBar.backgroundColorByHexString("#ffffff");
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.storage.get("session_user_login_oracle").then(function (res) {
            if (res == null) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */];
            }
        });
        this.createDatabaseSqlite();
    }
    MyApp.prototype.createDatabaseSqlite = function () {
        this.sqlite.create({ name: "vci_mobile_oracle.db", location: "default" }).then(function (db) {
            db.executeSql("CREATE TABLE IF NOT EXISTS oracle_opname_header \
                    (\
                      Opname_id VARCHAR(50), \
                      Opname_date VARCHAR(50), \
                      subinventorycode VARCHAR(50), \
                      send_status INTEGER \
                    )", []).then(function (res) {
                console.log("Success create oracle_opname_header", res);
            }).catch(function (e) {
                console.log("Failed create oracle_opname_header", e);
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
                    )", []).then(function (res) {
                console.log("Success create oracle_opname_detail", res);
            }).catch(function (e) {
                console.log("Failed create oracle_opname_detail", e);
            });
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\PROJECT\opname\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"E:\PROJECT\opname\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_provider__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var HomePage = (function () {
    function HomePage(navCtrl, actionSheetCtrl, platform, postPvdr, storage, loadingCtrl, toastCtrl, alertCtrl, barcodeScanner) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.postPvdr = postPvdr;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.barcodeScanner = barcodeScanner;
        this.opnamedate = new Date().toISOString();
        this.qty_type = 'Kg';
        this.val = '';
        this.getDataSubinventory();
        this.storage.get("subinventory").then(function (res) {
            console.log(res);
            _this.itemx = [];
            for (var i = 0; i < res.length; i++) {
                var str_name = res[i].Subinvetory_Code + " " + res[i].Subinventory_name;
                _this.itemx.push({
                    Subinvetory_Code: res[i].Subinvetory_Code,
                    Subinventory_name: res[i].Subinventory_name,
                    Creation_date: res[i].Creation_date,
                    Locator_type: res[i].Locator_type,
                    CodeSearch: str_name,
                });
            }
            _this.initializeItems();
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
    HomePage.prototype.itemSelected = function (item) {
        this.selected = item;
        this.val = '';
    };
    HomePage.prototype.getCodeItem = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedItemCode = barcodeData.text;
            console.log('Result', _this.scannedItemCode);
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    HomePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Menu',
            buttons: [
                {
                    text: 'Synchronize',
                    handler: function () {
                        // console.log('Destructive clicked');
                        _this.getSync();
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.presentLoading = function (x) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                content: x,
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        return [4 /*yield*/, this.loader.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    HomePage.prototype.getSync = function () {
        var _this = this;
        var body = {
            aksi: 'getSync',
        };
        this.presentLoading('Please wait..');
        this.postPvdr.postData(body, 'Sync').subscribe(function (data) {
            var alertpesan = data.msg;
            if (data.success) {
                _this.loader.dismiss();
                _this.storage.set('subinventory', data.result);
            }
            else {
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: alertpesan,
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            _this.loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Pehatian',
                subTitle: 'Sinkronisasi produk gagal',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    HomePage.prototype.getDataSubinventory = function () {
        var _this = this;
        this.storage.get("subinventory").then(function (res) {
            console.log(res);
            _this.itemx = [];
            for (var i = 0; i < res.length; i++) {
                var str_name = res[i].Subinvetory_Code + " " + res[i].Subinventory_name;
                _this.itemx.push({
                    Subinvetory_Code: res[i].Subinvetory_Code,
                    Subinventory_name: res[i].Subinventory_name,
                    Creation_date: res[i].Creation_date,
                    Locator_type: res[i].Locator_type,
                    CodeSearch: str_name,
                });
            }
            _this.initializeItems();
        });
    };
    HomePage.prototype.initializeItems = function () {
        this.items = this.itemx;
    };
    HomePage.prototype.getItems = function (ev) {
        var _this = this;
        this.initializeItems();
        this.val = ev.target.value;
        if (this.val == '') {
            this.val = '';
        }
        if (this.val && this.val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.Subinvetory_Code.toLowerCase().indexOf(_this.val.toLowerCase()) > -1);
            });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\PROJECT\opname\src\pages\home\home.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Opname Oracle\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentActionSheet()">\n        <ion-icon name="ellipsis-vertical-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label stacked>Opname Date</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="opnamedate" readonly></ion-datetime>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label stacked>Sub Inventory</ion-label>\n        <ion-input clearInput="true" clearOnEdit="true" type="text" placeholder="search inventory" (input)="getItems($event)" [(ngModel)]="selected"></ion-input>\n        <!-- <p>Barang Dalam Perjalan CWH ke Cabang Regional Barat</p> -->\n      </ion-item>\n      <ion-list *ngIf=" val != \'\' ">\n        <button ion-item *ngFor="let item of items" (click)="itemSelected(item.Subinvetory_Code)">\n          {{ item.Subinvetory_Code }}\n          <p>{{ item.Subinventory_name }}</p>\n        </button>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label stacked>Locator</ion-label>\n        <ion-input clearInput="true" clearOnEdit="true" type="text" placeholder="search locator" (input)="getItems_($event)"></ion-input>\n      </ion-item>\n      <ion-list *ngIf=" val != \'\' ">\n        <button ion-item *ngFor="let itemasd of itemsasd" (click)="itemSelected(item)">\n          {{ itemasd }}\n        </button>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label stacked>Item</ion-label>\n        <ion-input type="text" placeholder="search item" [(ngModel)]="scannedItemCode"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-3 padding>\n      <button ion-button round clear block icon-only color="danger" (click)="getCodeItem()">\n        <ion-icon name="qr-code-outline"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label stacked>Lot</ion-label>\n        <ion-input type="text" placeholder="input lot"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-3 padding>\n      <button ion-button round color="danger" clear block icon-only>\n        <ion-icon name="qr-code-outline"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label stacked>Exp Date</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="expdate"></ion-datetime>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label stacked>Quantity ({{qty_type}})</ion-label>\n        <ion-input class="qty" type="decimal" placeholder="{{qty_type}}"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-label stacked>Status</ion-label>\n        <ion-select [(ngModel)]="status" interface="popover">\n          <ion-option value="nes" selected>Same on hand</ion-option>\n          <ion-option value="n64">Not same on hand</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <br>\n\n  <div padding>\n    <button ion-button block class="submit" color="goldenrod">Submit</button>\n  </div>\n\n  <!-- <div padding>\n    <ion-chip color="dark" tappable>\n      <ion-label color="goldenrod">Secondary w/ Dark label</ion-label>\n    </ion-chip>\n  </div> -->\n\n\n\n</ion-content>`/*ion-inline-end:"E:\PROJECT\opname\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_post_provider__["a" /* PostProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
//provider api
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostProvider = (function () {
    function PostProvider(http) {
        this.http = http;
        // PC
        // server: string = "http://192.168.0.81/vci_mobile_api/index.php/mobile_opname_app/"
        this.server = "http://app.vci.co.id:88/vci_mobile_api/index.php/mobile_opname_app/";
    }
    PostProvider.prototype.postData = function (body, file) {
        // let type = "application/json; charset=UTF-8";
        var type = "application/x-www-form-urlencoded";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.server + file, JSON.stringify(body), options).map(function (res) { return res.json(); });
    };
    PostProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PostProvider);
    return PostProvider;
}());

//# sourceMappingURL=post-provider.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opnameproccess_opnameproccess__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__listopname_listopname__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__listopnamedetail_listopnamedetail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_post_provider__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, alertCtrl, barcodeScanner, storage, sqlite, platform, postPvdr, loadingCtrl, toastCtrl, actionSheetCtrl) {
        // this.storage.set('opnameid', 0);
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.barcodeScanner = barcodeScanner;
        this.storage = storage;
        this.sqlite = sqlite;
        this.platform = platform;
        this.postPvdr = postPvdr;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.todaydate = new Date().toISOString();
        this.storage.get('session_user_login_oracle').then(function (res) {
            console.log(res);
            _this.emlpoyee_id = res[0].employee_id;
            _this.username = res[0].username;
            _this.full_name = res[0].employee_name;
            _this.jabatan = res[0].jabatan_name;
            _this.divisi = res[0].divisi_name;
        });
    }
    DashboardPage_1 = DashboardPage;
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.ionViewDidEnter = function () {
        this.countItem();
        this.countItemOpnameId();
        this.searchitem = '';
    };
    DashboardPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Menu',
            buttons: [
                {
                    text: 'Sync Data',
                    handler: function () {
                        _this.getSync();
                    }
                },
                {
                    text: 'List Opname',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__listopname_listopname__["a" /* ListopnamePage */]);
                    }
                },
                {
                    text: 'Logout',
                    role: 'destructive',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                        _this.storage.clear();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DashboardPage.prototype.getCodeItem = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            if (barcodeData.cancelled == true) {
                _this.navCtrl.pop();
            }
            else {
                _this.scannedItemCode = barcodeData.text;
                var itemscan = _this.scannedItemCode;
                var item = itemscan.split('*');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__opnameproccess_opnameproccess__["a" /* OpnameproccessPage */], {
                    itemcode: item[0], itemname: item[1], uom: item[2], lot: item[3], rgdate: item[4], exprdate: item[5]
                });
            }
        }).catch(function (err) {
            console.log('Error', err);
        });
        // this.navCtrl.setRoot(OpnameproccessPage)
    };
    DashboardPage.prototype.flashScan = function () {
        var _this = this;
        setTimeout(function () {
            _this.search.setFocus();
        }, 500);
    };
    DashboardPage.prototype.getItems = function (event) {
        this.scannedItemCode = event.data;
        console.log(this.scannedItemCode);
        var itemscan = this.scannedItemCode;
        var item = itemscan.split('*');
        console.log('item 1 : ', item[1]);
        if (item[1] != undefined) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__opnameproccess_opnameproccess__["a" /* OpnameproccessPage */], {
                itemcode: item[0].trim(), itemname: item[1], uom: item[2], lot: item[3], rgdate: item[4], exprdate: item[5]
            });
        }
    };
    DashboardPage.prototype.countItem = function () {
        var _this = this;
        this.sqlite.create({
            name: 'vci_mobile_oracle.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('select Opname_id from oracle_opname_detail where send_status = ? group by Opname_id', [0]).then(function (res) {
                if (res.rows.length > 0) {
                    console.log("Success SELECT table oracle_opname_detail", res);
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.totalpending = res.rows.length;
                        console.log('jumlah opname header yg belum ke kirim ', res.rows.length);
                    }
                }
            }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_detail", e); });
        });
    };
    DashboardPage.prototype.countItemOpnameId = function () {
        var _this = this;
        this.sqlite.create({
            name: 'vci_mobile_oracle.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('select Opname_id as opnameid,count(Opname_id) as tot_item, count_date1 as date from oracle_opname_detail where send_status = ? group by Opname_id order by count_date1 desc', [0]).then(function (res) {
                if (res.rows.length > 0) {
                    console.log("Success SELECT count(opname_id) on table oracle_opname_detail", res);
                    _this.opname_item_arr = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.opname_item_arr.push({
                            opname_id: res.rows.item(i).opnameid,
                            tot_item: res.rows.item(i).tot_item,
                            count_date1: res.rows.item(i).date
                        });
                        console.log("opname_id", res.rows.item(i).opnameid);
                        console.log("tot_item", res.rows.item(i).tot_item);
                        console.log("count_date1", res.rows.item(i).date);
                    }
                }
            }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_detail", e); });
        });
    };
    DashboardPage.prototype.sendAllPending = function () {
        var _this = this;
        this.selectAllPendingOpnameDetail();
        var confirm = this.alertCtrl.create({
            enableBackdropDismiss: false,
            // title: 'Send All Pending Opaname?',
            mode: 'ios',
            message: 'Send All Pending Opaname?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.sendTransactionDet();
                    }
                }
            ]
        });
        confirm.present();
    };
    DashboardPage.prototype.selectAllPendingOpnameDetail = function () {
        var _this = this;
        // Detail
        this.sqlite.create({
            name: 'vci_mobile_oracle.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('select * from oracle_opname_detail where send_status = ?', [0]).then(function (res) {
                if (res.rows.length > 0) {
                    console.log("Success SELECT table oracle_opname_detail", res);
                    _this.oracle_opname_detail = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.oracle_opname_detail.push({
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
                    console.log('oracle_opname_detail Data ', _this.oracle_opname_detail);
                }
            }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_detail", e); });
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
    };
    DashboardPage.prototype.sendTransactionDet = function () {
        var _this = this;
        var body = {
            oracle_opname_detail: this.oracle_opname_detail,
            aksi: 'send_opname_det'
        };
        this.presentLoading('Please wait..');
        this.postPvdr.postData(body, 'Transaction').subscribe(function (data) {
            if (data.success) {
                // send trans_so_det
                // this.sendTransactionHeader();
                // update status
                _this.sqlite.create({
                    name: 'vci_mobile_oracle.db',
                    location: 'default'
                }).then(function (db) {
                    db.executeSql('UPDATE oracle_opname_detail SET send_status = ?', [1])
                        .then(function (res) {
                        console.log("Success update table oracle_opname_detail ", res);
                    })
                        .catch(function (e) { return console.log("Failed update table oracle_opname_detail", e); });
                });
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Send data opname success',
                    duration: 2000,
                    position: 'middle'
                });
                toast.present();
                // this.countItem();
                // this.countItemOpnameId();
                _this.navCtrl.setRoot(DashboardPage_1);
            }
            else {
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Transaksi Detail Tidak Terkirim',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            _this.loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Pehatian',
                subTitle: 'Tidak tersabung dengan Internet, cek kembali signal atau kuota internet anda. [Detail]',
                // buttons: ['OK']
                buttons: [
                    {
                        text: 'Kirim Ulang',
                        handler: function () {
                            _this.sendTransactionDet();
                        }
                    },
                    {
                        text: 'Ok',
                        handler: function () {
                            // code here
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    DashboardPage.prototype.sendTransactionHeader = function () {
        var _this = this;
        var body = {
            oracle_opname_header: this.oracle_opname_header,
            aksi: 'send_opname_header'
        };
        // this.presentLoading('Please wait..');
        this.postPvdr.postData(body, 'Transaction').subscribe(function (data) {
            if (data.success) {
                // update status
                _this.sqlite.create({
                    name: 'vci_mobile_oracle.db',
                    location: 'default'
                }).then(function (db) {
                    db.executeSql('UPDATE oracle_opname_header SET send_status = ?', [1])
                        .then(function (res) {
                        console.log("Success update table oracle_opname_header ", res);
                    })
                        .catch(function (e) { return console.log("Failed update table oracle_opname_header", e); });
                });
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Send data opname success',
                    duration: 2000,
                    position: 'middle'
                });
                toast.present();
                // this.countItem();
                // this.countItemOpnameId();
                _this.navCtrl.setRoot(DashboardPage_1);
            }
            else {
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Transaksi Detail Tidak Terkirim',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            _this.loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Pehatian',
                subTitle: 'Tidak tersabung dengan Internet, cek kembali signal atau kuota internet anda. [Header]',
                // buttons: ['OK']
                buttons: [
                    {
                        text: 'Kirim Ulang',
                        handler: function () {
                            _this.sendTransactionHeader();
                        }
                    },
                    {
                        text: 'Ok',
                        handler: function () {
                            // code here
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    DashboardPage.prototype.openListDetail = function (opnameid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__listopnamedetail_listopnamedetail__["a" /* ListopnamedetailPage */], { opnameid: opnameid });
    };
    DashboardPage.prototype.presentLoading = function (x) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                content: x,
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        return [4 /*yield*/, this.loader.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    DashboardPage.prototype.getSync = function () {
        var _this = this;
        var body = {
            aksi: 'getSync',
        };
        this.presentLoading('Please wait..');
        this.postPvdr.postData(body, 'Sync').subscribe(function (data) {
            var alertpesan = data.msg;
            if (data.success) {
                // this.loader.dismiss();
                _this.storage.set('subinventory', data.result);
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
                _this.getMasterLocator();
            }
            else {
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: alertpesan,
                    duration: 1000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            _this.loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Pehatian',
                subTitle: 'Sinkronisasi produk gagal',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    DashboardPage.prototype.getMasterLocator = function () {
        var _this = this;
        var body = {
            aksi: 'getLocator',
        };
        // this.presentLoading('Please wait..');
        this.postPvdr.postData(body, 'Sync').subscribe(function (data) {
            var alertpesan = data.msg;
            if (data.success) {
                _this.loader.dismiss();
                _this.storage.set('locator', data.result);
                var toast = _this.toastCtrl.create({
                    message: 'Sync Success',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: alertpesan,
                    duration: 1000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            _this.loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Pehatian',
                subTitle: 'Sinkronisasi produk gagal',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('search'),
        __metadata("design:type", Object)
    ], DashboardPage.prototype, "search", void 0);
    DashboardPage = DashboardPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"E:\PROJECT\opname\src\pages\dashboard\dashboard.html"*/`<ion-header>\n  <ion-navbar padding>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentActionSheet()">\n        <ion-icon md="menu-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-searchbar [(ngModel)]="searchitem" #search placeholder="Use scanner flash" (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card class="azz-card-noshadow">\n    <ion-card-header>\n      <!-- <ion-item style="margin-top: 0%; margin-bottom: 7%;">\n        <ion-icon (click)="presentActionSheet()" md="menu-outline" color="primary" item-end></ion-icon>\n      </ion-item> -->\n      <ion-note item-end>\n        {{todaydate | date:\'EEEE, dd MMMM yyyy\'}}\n      </ion-note><br><br>\n      <h2>\n        <b>{{full_name}}</b>\n        <p>{{jabatan}}</p>\n      </h2>\n    </ion-card-header>\n    <ion-card-content>\n      <button class="azz-button-noshadow" color="goldenrod" block ion-button icon-end (click)="getCodeItem()">\n        Scan QR\n        <ion-icon md="qr-code-outline"></ion-icon>\n      </button>\n      <br>\n      <button class="azz-button-noshadow" color="primary" block ion-button icon-end (click)="flashScan()">\n        Flash Scan\n        <ion-icon md="flash-outline"></ion-icon>\n      </button>\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n  \n  <div *ngIf="totalpending">\n    <ion-list>\n      <ion-item>\n        <p style="font-size: 18px; font-weight: 700;">Pending Opname ({{totalpending}})</p>\n        <ion-note tappable style="font-size: 13px; color: blue;" (click)="sendAllPending()" item-end>\n          Send All\n        </ion-note>\n      </ion-item>\n    </ion-list>\n\n    <div>\n      <ion-card class="azz-card" *ngFor="let item of opname_item_arr">\n        <ion-item no-lines (click)="openListDetail(item.opname_id)">\n          <ion-label style="padding-top: 8px;">\n              <h5 style="color: grey;">{{ item.count_date1 | date:\'dd-MMMM-yyyy\'}}</h5>\n              <h2><b>{{ item.opname_id }}</b></h2>\n          </ion-label>\n          <ion-note item-end><p style="color: orangered;">{{ item.tot_item }} Items</p></ion-note>\n        </ion-item>\n      </ion-card>\n    </div>\n  </div>\n\n</ion-content>\n`/*ion-inline-end:"E:\PROJECT\opname\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_9__providers_post_provider__["a" /* PostProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], DashboardPage);
    return DashboardPage;
    var DashboardPage_1;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_post_provider__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, toastCtrl, loadingCtrl, postPvdr, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.postPvdr = postPvdr;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.username = "";
        this.password = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                content: "",
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        return [4 /*yield*/, this.loader.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    LoginPage.prototype.Login = function () {
        var _this = this;
        if (this.username == "" && this.password == "") {
            var toast = this.toastCtrl.create({
                message: 'Username dan Password tidak boleh kosong.',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (this.username == "" || this.password == "") {
            var toast = this.toastCtrl.create({
                message: 'Username atau Password tidak boleh kosong.',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else {
            var body = {
                username: this.username,
                password: this.password,
                aksi: 'login_system'
            };
            this.presentLoading();
            this.postPvdr.postData(body, 'Login').subscribe(function (data) {
                var alertpesan = data.msg;
                if (data.success) {
                    _this.storage.set('session_user_login_oracle', data.result);
                    _this.loader.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
                }
                else {
                    _this.loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: alertpesan,
                        duration: 2000,
                        position: 'top'
                    });
                    toast.present();
                }
            }, function (error) {
                _this.loader.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Pehatian',
                    subTitle: 'Internet tidak tersambung, cek kembali signal atau kuota internet Anda.',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\PROJECT\opname\src\pages\login\login.html"*/`<ion-content padding>\n\n  <!-- <div style="padding-top: 20%;">\n\n    <p style="text-align: center; font-size: 24px;" class="tittleee"><b>Salesman</b> Application</p>\n\n    <ion-list style="padding-top: 10%;">\n\n      <div padding>\n\n        <div style="border: 1px solid rgb(195, 191, 191); border-radius: 10px;">\n          <ion-input type="text" placeholder="Username" autocapitalize="none" [(ngModel)]="username"></ion-input>\n        </div>\n\n        <div style="border: 1px solid rgb(195, 191, 191); border-radius: 10px;margin-top: 3%;">\n          <ion-input type="password" placeholder="Password" autocapitalize="none" [(ngModel)]="password"></ion-input>\n        </div>\n\n        <p style="color: blue; text-align: right;font-size: 11px;">\n          <a href="https://wa.me/+628111931478" style="text-decoration:none;">\n            Lupa password\n          </a>\n        </p>\n\n      </div>\n\n      <button ion-button block color=\'goldenrod\' class="azz-button" (click)="Login()">Login</button>\n\n    </ion-list>\n\n  </div> -->\n\n</ion-content>\n\n<ion-footer no-border padding>\n\n  <!-- <ion-list>\n\n    <div>\n      <img src="assets/imgs/logovcibaru.png" alt="logo" class="logo-vci">\n    </div>\n\n    <ion-item class="azz-input" no-lines>\n      <ion-label style="color: black;" floating>Username</ion-label>\n      <ion-input style="color: black;" type="text" autocapitalize="none" [(ngModel)]="username"></ion-input>\n    </ion-item>\n\n    <ion-item class="azz-input" no-lines>\n      <ion-label style="color: black;" floating>Password</ion-label>\n      <ion-input style="color: black;" type="password" autocapitalize="none" [(ngModel)]="password"></ion-input>\n    </ion-item>\n\n    <ion-item class="azz-input"></ion-item>\n\n    <button ion-button block color=\'goldenrod\' class="azz-button" (click)="Login()">Login</button>\n\n  </ion-list> -->\n\n  <ion-list>\n\n    <div padding>\n\n      <p style="font-size: 24px;" class="tittleee"><b>Victoria Care Indonesia</b></p>\n      <p style="font-size: 11px; margin-top: -4%;margin-bottom: 15%;" class="tittleee">Opname App</p>\n\n      <div style="border: 1px solid rgb(195, 191, 191); border-radius: 10px;">\n        <ion-input type="text" placeholder="Username" autocapitalize="none" [(ngModel)]="username"></ion-input>\n      </div>\n\n      <div style="border: 1px solid rgb(195, 191, 191); border-radius: 10px;margin-top: 3%;">\n        <ion-input type="password" placeholder="Password" autocapitalize="none" [(ngModel)]="password"></ion-input>\n      </div>\n\n      <p style="color: blue; text-align: right; font-size: 11px;">\n        <a href="https://wa.me/+628111931478" style="text-decoration:none;">\n          Forgot password\n        </a>\n      </p>\n\n    </div>\n\n    <button ion-button block color=\'goldenrod\' class="azz-button" (click)="Login()">Login</button>\n\n  </ion-list>\n\n\n</ion-footer>\n`/*ion-inline-end:"E:\PROJECT\opname\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_post_provider__["a" /* PostProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListopnamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_Storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listopnamedetail_listopnamedetail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_post_provider__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__listopnameserverdetail_listopnameserverdetail__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var ListopnamePage = (function () {
    function ListopnamePage(sqlite, storage, postPvdr, loadingCtrl, toastCtrl, alertCtrl, navCtrl, navParams) {
        this.sqlite = sqlite;
        this.storage = storage;
        this.postPvdr = postPvdr;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listopname = "pending";
    }
    ListopnamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListopnamePage');
    };
    ListopnamePage.prototype.presentLoading = function (x) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                content: x,
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        return [4 /*yield*/, this.loader.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ListopnamePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.countItem();
        this.countItemOpnameId();
        this.countItemSend();
        this.countItemOpnameIdSend();
        this.storage.get('session_user_login_oracle').then(function (res) {
            _this.username = res[0].username;
        });
    };
    ListopnamePage.prototype.countItem = function () {
        var _this = this;
        this.sqlite.create({
            name: 'vci_mobile_oracle.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('select Opname_id from oracle_opname_detail where send_status = ? group by Opname_id', [0]).then(function (res) {
                if (res.rows.length > 0) {
                    console.log("Success SELECT table oracle_opname_detail", res);
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.totalpending = res.rows.length;
                        console.log('jumlah opname header yg belum ke kirim ', res.rows.length);
                    }
                }
            }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_detail", e); });
        });
    };
    ListopnamePage.prototype.countItemOpnameId = function () {
        var _this = this;
        this.sqlite.create({
            name: 'vci_mobile_oracle.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('select Opname_id as opnameid,count(Opname_id) as tot_item, count_date1 as date from oracle_opname_detail where send_status = ? group by Opname_id order by count_date1 desc', [0]).then(function (res) {
                if (res.rows.length > 0) {
                    console.log("Success SELECT count(opname_id) on table oracle_opname_detail", res);
                    _this.opname_item_arr = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.opname_item_arr.push({
                            opname_id: res.rows.item(i).opnameid,
                            tot_item: res.rows.item(i).tot_item,
                            count_date1: res.rows.item(i).date
                        });
                        console.log("opname_id", res.rows.item(i).opnameid);
                        console.log("tot_item", res.rows.item(i).tot_item);
                        console.log("count_date1", res.rows.item(i).date);
                    }
                }
            }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_detail", e); });
        });
    };
    ListopnamePage.prototype.countItemSend = function () {
        var _this = this;
        this.sqlite.create({
            name: 'vci_mobile_oracle.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('select Opname_id from oracle_opname_detail where send_status = ? group by Opname_id', [1]).then(function (res) {
                if (res.rows.length > 0) {
                    console.log("Success SELECT table oracle_opname_detail", res);
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.totalsend = res.rows.length;
                        console.log('jumlah opname header yg belum ke kirim ', res.rows.length);
                    }
                }
            }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_detail", e); });
        });
    };
    ListopnamePage.prototype.countItemOpnameIdSend = function () {
        var _this = this;
        this.sqlite.create({
            name: 'vci_mobile_oracle.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('select Opname_id as opnameid,count(Opname_id) as tot_item, count_date1 as date from oracle_opname_detail where send_status = ? group by Opname_id order by count_date1 desc', [1]).then(function (res) {
                if (res.rows.length > 0) {
                    console.log("Success SELECT count(opname_id) on table oracle_opname_detail", res);
                    _this.opname_item_send_arr = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.opname_item_send_arr.push({
                            opname_id: res.rows.item(i).opnameid,
                            tot_item: res.rows.item(i).tot_item,
                            count_date1: res.rows.item(i).date
                        });
                        console.log("opname_id", res.rows.item(i).opnameid);
                        console.log("tot_item", res.rows.item(i).tot_item);
                        console.log("count_date1", res.rows.item(i).date);
                    }
                }
            }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_detail", e); });
        });
    };
    ListopnamePage.prototype.openListDetail = function (opnameid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__listopnamedetail_listopnamedetail__["a" /* ListopnamedetailPage */], { opnameid: opnameid });
    };
    ListopnamePage.prototype.sendAllPending = function () {
        var _this = this;
        this.selectAllPendingOpnameDetail();
        var confirm = this.alertCtrl.create({
            enableBackdropDismiss: false,
            // title: 'Send All Pending Opaname?',
            mode: 'ios',
            message: 'Send All Pending Opaname?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.sendTransactionDet();
                    }
                }
            ]
        });
        confirm.present();
    };
    ListopnamePage.prototype.selectAllPendingOpnameDetail = function () {
        var _this = this;
        // Detail
        this.sqlite.create({
            name: 'vci_mobile_oracle.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('select * from oracle_opname_detail where send_status = ?', [0]).then(function (res) {
                if (res.rows.length > 0) {
                    console.log("Success SELECT table oracle_opname_detail", res);
                    _this.oracle_opname_detail = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.oracle_opname_detail.push({
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
                    console.log('oracle_opname_detail Data ', _this.oracle_opname_detail);
                }
            }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_detail", e); });
        });
        // header
        this.sqlite.create({
            name: 'vci_mobile_oracle.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('select * from oracle_opname_header where send_status = ?', [0]).then(function (res) {
                if (res.rows.length > 0) {
                    console.log("Success SELECT table oracle_opname_header", res);
                    _this.oracle_opname_header = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.oracle_opname_header.push({
                            Opname_id: res.rows.item(i).Opname_id,
                            Opname_date: res.rows.item(i).Opname_date,
                            subinventorycode: res.rows.item(i).subinventorycode
                        });
                    }
                    console.log('oracle_opname_header Data ', _this.oracle_opname_header);
                }
            }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_header", e); });
        });
    };
    ListopnamePage.prototype.sendTransactionDet = function () {
        var _this = this;
        var body = {
            oracle_opname_detail: this.oracle_opname_detail,
            aksi: 'send_opname_det'
        };
        this.presentLoading('Please wait..');
        this.postPvdr.postData(body, 'Transaction').subscribe(function (data) {
            if (data.success) {
                // send trans_so_det
                // this.sendTransactionHeader();
                // update status
                _this.sqlite.create({
                    name: 'vci_mobile_oracle.db',
                    location: 'default'
                }).then(function (db) {
                    db.executeSql('UPDATE oracle_opname_detail SET send_status = ?', [1])
                        .then(function (res) {
                        console.log("Success update table oracle_opname_detail ", res);
                    })
                        .catch(function (e) { return console.log("Failed update table oracle_opname_detail", e); });
                });
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Send data opname success',
                    duration: 2000,
                    position: 'middle'
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
            }
            else {
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Transaksi Detail Tidak Terkirim',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            _this.loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Pehatian',
                subTitle: 'Tidak tersabung dengan Internet, cek kembali signal atau kuota internet anda. [Detail]',
                // buttons: ['OK']
                buttons: [
                    {
                        text: 'Kirim Ulang',
                        handler: function () {
                            _this.sendTransactionDet();
                        }
                    },
                    {
                        text: 'Ok',
                        handler: function () {
                            // code here
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    ListopnamePage.prototype.sendTransactionHeader = function () {
        var _this = this;
        var body = {
            oracle_opname_header: this.oracle_opname_header,
            aksi: 'send_opname_header'
        };
        // this.presentLoading('Please wait..');
        this.postPvdr.postData(body, 'Transaction').subscribe(function (data) {
            if (data.success) {
                // update status
                _this.sqlite.create({
                    name: 'vci_mobile_oracle.db',
                    location: 'default'
                }).then(function (db) {
                    db.executeSql('UPDATE oracle_opname_header SET send_status = ?', [1])
                        .then(function (res) {
                        console.log("Success update table oracle_opname_header ", res);
                    })
                        .catch(function (e) { return console.log("Failed update table oracle_opname_header", e); });
                });
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Send data opname success',
                    duration: 2000,
                    position: 'middle'
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
            }
            else {
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Transaksi Detail Tidak Terkirim',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            _this.loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Pehatian',
                subTitle: 'Tidak tersabung dengan Internet, cek kembali signal atau kuota internet anda. [Header]',
                buttons: [
                    {
                        text: 'Kirim Ulang',
                        handler: function () {
                            _this.sendTransactionHeader();
                        }
                    },
                    {
                        text: 'Ok',
                        handler: function () {
                            // code here
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    ListopnamePage.prototype.getOpnameDataServer = function () {
        var _this = this;
        var body = {
            username: this.username,
            aksi: 'get_data_opname'
        };
        this.presentLoading('Please wait..');
        this.postPvdr.postData(body, 'Transaction').subscribe(function (data) {
            if (data.success) {
                // Code here
                _this.loader.dismiss();
                _this.get_data_opname = [];
                for (var i = 0; i < data.result.length; i++) {
                    _this.get_data_opname.push({
                        'Opname_id': data.result[i].Opname_id,
                        'Count_date1': data.result[i].Count_date1,
                        'Opname_date': data.result[i].Opname_date
                    });
                }
            }
            else {
                _this.loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Empty',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            _this.loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Pehatian',
                subTitle: 'Tidak tersabung dengan Internet, cek kembali signal atau kuota internet anda.',
                buttons: [
                    {
                        text: 'Try Again',
                        handler: function () {
                            _this.getOpnameDataServer();
                        }
                    },
                    {
                        text: 'Ok',
                        handler: function () {
                            // code here
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    ListopnamePage.prototype.openListDetailOnServer = function (opnameid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__listopnameserverdetail_listopnameserverdetail__["a" /* ListopnameserverdetailPage */], { opnameid: opnameid });
    };
    ListopnamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listopname',template:/*ion-inline-start:"E:\PROJECT\opname\src\pages\listopname\listopname.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>List Opname</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="listopname">\n      <ion-segment-button value="pending">\n        Local\n      </ion-segment-button>\n      <ion-segment-button value="sent" (click)="getOpnameDataServer()">\n        Server\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div [ngSwitch]="listopname">\n    <ion-list *ngSwitchCase="\'pending\'">\n\n      <div *ngIf="totalpending">\n        <ion-list>\n          <ion-item>\n            <p style="font-size: 18px; font-weight: 700;">Pending Opname ({{totalpending}})</p>\n            <ion-note tappable style="font-size: 13px; color: blue;" (click)="sendAllPending()" item-end>\n              Send All\n            </ion-note>\n          </ion-item>\n        </ion-list>\n\n        <div>\n          <ion-card class="azz-card" *ngFor="let item of opname_item_arr">\n            <ion-item no-lines (click)="openListDetail(item.opname_id)">\n              <ion-label style="padding-top: 8px;">\n                  <h5 style="color: grey;">{{ item.count_date1 | date:\'dd-MMMM-yyyy\'}}</h5>\n                  <h2><b>{{ item.opname_id }}</b></h2>\n              </ion-label>\n              <ion-note item-end><p style="color: orangered;">{{ item.tot_item }} Items</p></ion-note>\n            </ion-item>\n          </ion-card>\n        </div>\n      </div>\n\n      <br>\n\n      <div>\n        <ion-list>\n          <ion-item>\n            <p style="font-size: 18px; font-weight: 700;">Send Opname ({{totalsend}})</p>\n            <!-- <ion-note tappable style="font-size: 13px; color: blue;" (click)="sendAllPending()" item-end>\n              Send All\n            </ion-note> -->\n          </ion-item>\n        </ion-list>\n\n        <div>\n          <ion-card class="azz-card" *ngFor="let item of opname_item_send_arr">\n            <ion-item no-lines (click)="openListDetail(item.opname_id)">\n              <ion-label style="padding-top: 8px;">\n                  <h5 style="color: grey;">{{ item.count_date1 | date:\'dd-MMMM-yyyy\'}}</h5>\n                  <h2><b>{{ item.opname_id }}</b></h2>\n              </ion-label>\n              <ion-note item-end><p style="color: orangered;">{{ item.tot_item }} Items</p></ion-note>\n            </ion-item>\n          </ion-card>\n        </div>\n      </div>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'sent\'">\n      <div>\n        <ion-card class="azz-card" *ngFor="let item of get_data_opname">\n          <ion-item no-lines (click)="openListDetailOnServer(item.Opname_id)">\n            <ion-label style="padding-top: 8px;">\n                <h5 style="color: grey;">{{ item.Count_date1 | date:\'dd-MMMM-yyyy\'}}</h5>\n                <h2><b>{{ item.Opname_id }}</b></h2>\n            </ion-label>\n            <ion-note item-end><p style="color: orangered;">sent</p></ion-note>\n          </ion-item>\n        </ion-card>\n      </div>\n    </ion-list>\n\n  </div>\n\n  \n\n</ion-content>\n`/*ion-inline-end:"E:\PROJECT\opname\src\pages\listopname\listopname.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_Storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_post_provider__["a" /* PostProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListopnamePage);
    return ListopnamePage;
}());

//# sourceMappingURL=listopname.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListopnamedetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListopnamedetailPage = (function () {
    function ListopnamedetailPage(sqlite, toastCtrl, navCtrl, navParams) {
        this.sqlite = sqlite;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getCurrentData(navParams.get('opnameid'));
    }
    ListopnamedetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListopnamedetailPage');
    };
    ListopnamedetailPage.prototype.getCurrentData = function (opnameid) {
        var _this = this;
        console.log(opnameid);
        this.opnameid = opnameid;
        this.sqlite.create({
            name: 'vci_mobile_oracle.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('select * from oracle_opname_detail a where a.opname_id = ? and send_status = 0', [_this.opnameid]).then(function (res) {
                if (res.rows.length > 0) {
                    _this.hidedelete = 0;
                    console.log("Success SELECT table oracle_opname_detail", res);
                    _this.opname_item_arr = [];
                    _this.opnamedate = res.rows.item(0).Opname_date;
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.opname_item_arr.push({
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
                        });
                    }
                    db.executeSql('select sum(Opname_quantity1) as Opname_quantity1 from oracle_opname_detail where send_status = 0 and opname_id = ?', [_this.opnameid]).then(function (res) {
                        if (res.rows.length > 0) {
                            console.log("Success SELECT table oracle_opname_detail", res);
                            _this.totalitem = res.rows.item(0).Opname_quantity1;
                            console.log("totalitem", _this.totalitem);
                        }
                    }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_detail", e); });
                }
                else {
                    _this.hidedelete = 1;
                    db.executeSql('select * from oracle_opname_detail a where a.opname_id = ? and send_status = 1', [_this.opnameid]).then(function (res) {
                        if (res.rows.length > 0) {
                            console.log("Success SELECT table oracle_opname_detail", res);
                            _this.opname_item_arr = [];
                            _this.opnamedate = res.rows.item(0).Opname_date;
                            for (var i = 0; i < res.rows.length; i++) {
                                _this.opname_item_arr.push({
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
                                });
                            }
                            db.executeSql('select sum(Opname_quantity1) as Opname_quantity1 from oracle_opname_detail where send_status = 1 and opname_id = ?', [_this.opnameid]).then(function (res) {
                                if (res.rows.length > 0) {
                                    console.log("Success SELECT table oracle_opname_detail", res);
                                    _this.totalitem = res.rows.item(0).Opname_quantity1;
                                    console.log("totalitem", _this.totalitem);
                                }
                            }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_detail", e); });
                        }
                        else {
                        }
                    }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_detail", e); });
                }
            }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_detail", e); });
        });
    };
    ListopnamedetailPage.prototype.deleteItem = function (i) {
        // const toast = this.toastCtrl.create({
        //   message: i,
        //   duration: 2000,
        //   position: 'top'
        // });
        // toast.present();
        var _this = this;
        this.sqlite.create({
            name: 'vci_mobile_oracle.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('delete from oracle_opname_detail where Count_date1 = ?', [i]).then(function (res) {
                console.log("Success delete item", res);
                var toast = _this.toastCtrl.create({
                    message: 'Item Deleted',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
                _this.sqlite.create({
                    name: 'vci_mobile_oracle.db',
                    location: 'default'
                }).then(function (db) {
                    db.executeSql('select * from oracle_opname_detail a where a.opname_id = ? and send_status = 0', [_this.opnameid]).then(function (res) {
                        if (res.rows.length > 0) {
                            console.log("Success SELECT table oracle_opname_detail", res);
                            console.log("subinventorycode", res.rows.item(0).subinventorycode);
                            _this.opname_item_arr = [];
                            _this.opnamedate = res.rows.item(0).Opname_date;
                            for (var i_1 = 0; i_1 < res.rows.length; i_1++) {
                                _this.opname_item_arr.push({
                                    rowid: i_1 + 1,
                                    Opname_id: res.rows.item(i_1).Opname_id,
                                    Locator_id: res.rows.item(i_1).Locator_id,
                                    Locator_code: res.rows.item(i_1).Locator_code,
                                    Item_code: res.rows.item(i_1).Item_code,
                                    Item_name: res.rows.item(i_1).Item_name,
                                    Lot_number: res.rows.item(i_1).Lot_number,
                                    Lot_expired_date: res.rows.item(i_1).Lot_expired_date,
                                    Opname_quantity1: res.rows.item(i_1).Opname_quantity1,
                                    Opname_quantity2: res.rows.item(i_1).Opname_quantity2,
                                    Opname_quantity3: res.rows.item(i_1).Opname_quantity3,
                                    Count_by1: res.rows.item(i_1).Count_by1,
                                    Count_by2: res.rows.item(i_1).Count_by2,
                                    Count_by3: res.rows.item(i_1).Count_by3,
                                    Count_date1: res.rows.item(i_1).Count_date1,
                                    Count_date2: res.rows.item(i_1).Count_date2,
                                    Count_date3: res.rows.item(i_1).Count_date3,
                                    send_status: res.rows.item(i_1).send_status,
                                    SubInventoryCode: res.rows.item(i_1).SubInventoryCode,
                                    Opname_date: res.rows.item(i_1).Opname_date
                                });
                            }
                            db.executeSql('select sum(Opname_quantity1) as Opname_quantity1 from oracle_opname_detail where send_status = 0 and opname_id = ?', [_this.opnameid]).then(function (res) {
                                if (res.rows.length > 0) {
                                    console.log("Success SELECT table oracle_opname_detail", res);
                                    _this.totalitem = res.rows.item(0).Opname_quantity1;
                                    console.log("totalitem", _this.totalitem);
                                }
                                else {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
                                }
                            }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_detail", e); });
                        }
                        else {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
                        }
                    }).catch(function (e) { return console.log("Failed SELECT table oracle_opname_detail", e); });
                });
            }).catch(function (e) { return console.log("Failed delete item", e); });
        });
    };
    ListopnamedetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listopnamedetail',template:/*ion-inline-start:"E:\PROJECT\opname\src\pages\listopnamedetail\listopnamedetail.html"*/`<!--\n  Generated template for the ListopnamedetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Opname Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div padding class="sticky">\n    <ion-row>\n      <ion-col col-4>Opname ID</ion-col>\n      <ion-col>: {{opnameid}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>Date Opname</ion-col>\n      <ion-col>: {{opnamedate}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>Total Quantity</ion-col>\n      <ion-col>: {{totalitem}}</ion-col>\n    </ion-row>\n  </div>\n\n  <div padding class="table-responsive fitscreen">\n    <table class="table">\n      <thead class="thead-dark">\n        <tr>\n          <th scope="col" style="text-align: left;">No</th>\n          <th scope="col" style="text-align: left;">Opname ID</th>\n          <th scope="col" style="text-align: left;">Locator_id</th>\n          <th scope="col" style="text-align: left;">Locator_code</th>\n          <th scope="col" style="text-align: left;">Item_code</th>\n          <th scope="col" style="text-align: left;">Item_name</th>\n          <th scope="col" style="text-align: left;">Lot_number</th>\n          <th scope="col" style="text-align: left;">SubInventoryCode</th>\n          <th scope="col" style="text-align: left;">Lot_expired_date</th>\n          <th scope="col" style="text-align: left;">Opname_quantity1</th>\n          <th scope="col" style="text-align: left;">Opname_quantity2</th>\n          <th scope="col" style="text-align: left;">Opname_quantity3</th>\n          <th scope="col" style="text-align: left;">Count_by1</th>\n          <th scope="col" style="text-align: left;">Count_by2</th>\n          <th scope="col" style="text-align: left;">Count_by3</th>\n          <th scope="col" style="text-align: left;">Count_date1</th>\n          <th scope="col" style="text-align: left;">Count_date2</th>\n          <th scope="col" style="text-align: left;">Count_date3</th>\n          <th scope="col" style="text-align: left;">Opname_date</th>\n          <th scope="col" style="text-align: left;" *ngIf="hidedelete == 0">Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor="let item of opname_item_arr">\n          <th nowrap scope="row">{{item.rowid}}</th>\n          <th nowrap scope="row">{{item.Opname_id}}</th>\n          <td nowrap>{{item.Locator_id}}</td>\n          <td nowrap>{{item.Locator_code}}</td>\n          <td nowrap>{{item.Item_code}}</td>\n          <td nowrap>{{item.Item_name}}</td>\n          <td nowrap>{{item.Lot_number}}</td>\n          <td nowrap>{{item.SubInventoryCode}}</td>\n          <td nowrap>{{item.Lot_expired_date}}</td>\n          <td nowrap>{{item.Opname_quantity1}}</td>\n          <td nowrap>{{item.Opname_quantity2}}</td>\n          <td nowrap>{{item.Opname_quantity3}}</td>\n          <td nowrap>{{item.Count_by1}}</td>\n          <td nowrap>{{item.Count_by2}}</td>\n          <td nowrap>{{item.Count_by3}}</td>\n          <td nowrap>{{item.Count_date1}}</td>\n          <td nowrap>{{item.Count_date2}}</td>\n          <td nowrap>{{item.Count_date3}}</td>\n          <td nowrap>{{item.Opname_date}}</td>\n          <td nowrap *ngIf="hidedelete == 0"><a (click)="deleteItem(item.Count_date1)">Delete</a></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n</ion-content>\n`/*ion-inline-end:"E:\PROJECT\opname\src\pages\listopnamedetail\listopnamedetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListopnamedetailPage);
    return ListopnamedetailPage;
}());

//# sourceMappingURL=listopnamedetail.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map