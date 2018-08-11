import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiURL = 'http://beringen.odenwilusenz.ch:8099/api/getAll.php';
  
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  getData() {
    return new Promise(resolve => {
      this.http.get(this.apiURL).subscribe(data => {
          resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
