import { Component } from '@angular/core';

import { NewPage } from '../new/new';
import { RegalPage } from '../regal/regal';
import { StatistikenPage } from '../statistiken/statistiken';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = StatistikenPage;
  tab2Root = RegalPage;
  tab3Root = NewPage;
  tab4Root = Kontakt

  constructor() {

  }
}
