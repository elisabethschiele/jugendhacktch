import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Data } from '../../providers/data/data';
import { RestProvider } from '../../providers/rest/rest';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {

  searchTerm: string = '';
  items: any;
  filteredItems: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
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

}
