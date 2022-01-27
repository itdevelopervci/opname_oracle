//provider api

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostProvider {

    // PC
    // server: string = "http://192.168.0.81/vci_mobile_api/index.php/mobile_opname_app/"
    server: string = "http://app.vci.co.id:88/vci_mobile_api/index.php/mobile_opname_app/"

    constructor(public http: Http) {

    }

    postData(body, file) {
        // let type = "application/json; charset=UTF-8";
        let type = "application/x-www-form-urlencoded";
        let headers = new Headers({ 'Content-Type': type });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.server + file, JSON.stringify(body), options).map(res => res.json());
    }


}