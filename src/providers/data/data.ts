import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
//export class DataProvider {

  //constructor(public http: HttpClient) {
    //console.log('Hello DataProvider Provider');
  //}
//}
export class Data {

    items: any;

    constructor(public http: Http) {

      this.items = [
          {title: 'pflanze1'},
          {title: 'pflanze2'},
          {title: 'pflanze3'}
      ]
    }

    filterItems(searchTerm){

      return this.items.filter((item) => {
        return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
    }

}
