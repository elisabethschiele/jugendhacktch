import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
//import { AlterController } from 'ionic-angular';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {

  searchTerm: string = '';
  items: any;
  filteredItems: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public storage: Storage) {
    this.getPflanzen();
  }

  getPflanzen() {

    this.restProvider.getData().then(data => {
      this.items = data;
      console.log(this.items);
      this.setFilteredItems();
    });

  }

  setFilteredItems() {

      this.filteredItems = this.filterItems(this.searchTerm);

  }


  filterItems(searchTerm){

    return this.items.filter((item) => {
      return item.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  addPlant(item){
    //this.storage.set('pflanze', "Efeu");
    this.storage.get('pflanze').then((val) =>  {
        /*console.log('pflanze', JSON.parse(val));
        this.a = Array(val);
        console.log(item);
        console.log(this.a);*/
        //console.log(item);
        //console.log(val);
          var a = {};
          if(val != null){
            a = val + (JSON.stringify(item));
          }
          else{
            a = JSON.stringfy(item);
          }
          this.storage.set('pflanze', a);
          console.log(a);
      });
  }

  deleteAll(){
console.log('loeschen');
    this.storage.remove('pflanze').then((val) =>  {
      this.storage.get('pflanze').then((val2) => {
        //console.log(JSON.stringify(val2));
        if (val2 == '') console.log('leer');
      });
    });

  }

}
