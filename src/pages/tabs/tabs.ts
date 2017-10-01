import { Component } from '@angular/core';

import { AddTechnoPage } from '../add-techno/add-techno';
import { SchedulePage } from '../schedule/schedule';
import { ScheduleListPage } from '../schedule-list/schedule-list';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AddTechnoPage;
  tab3Root = SchedulePage;
  tab4Root = ScheduleListPage;

  constructor() {

  }
}
