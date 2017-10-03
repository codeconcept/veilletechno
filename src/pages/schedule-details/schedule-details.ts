import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Schedule } from '../../models/schedule';
import { SchedulePage } from '../schedule/schedule';
import { DataService } from '../../providers/data/data.service';

@Component({
  selector: 'page-schedule-details',
  templateUrl: 'schedule-details.html',
})
export class ScheduleDetailsPage {

  schedule: Schedule;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService) {
  }

  ionViewWillLoad() {
    this.schedule = this.navParams.get('schedule');
    console.log(this.schedule);
  }

  edit(schedule: Schedule) {
    this.navCtrl.push(SchedulePage, { schedule });
  }

  delete(schedule: Schedule) {
    this.dataService.delete(schedule.id);
    this.navCtrl.pop();
  }

}
