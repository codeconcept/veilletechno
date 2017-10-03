import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from "../../providers/data/data.service";
import { Schedule } from '../../models/schedule';

@Component({
  selector: 'page-schedule-list',
  templateUrl: 'schedule-list.html',
})
export class ScheduleListPage {
  schedules: Schedule[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService) {
  }

  ionViewWillEnter() {
    this.dataService.getAllSchedules()
      .then(data => this.schedules = data);
  }

}
