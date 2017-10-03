import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { Schedule } from '../../models/schedule';
import { Technology } from '../../models/technology';
import { DataService } from '../../providers/data/data.service';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  schedule: Schedule = {
    name: '',
    date: '',
    duration: 0,
    priority: '',
    remark: '',
    technology: { name: '', category: ''}
  }; 

  technologies: Technology[];  
  categories: string[];
  priorities: string[];

  isInEditMode = false;

  constructor(public navCtrl: NavController, private navParams: NavParams, private dataService: DataService, private toastCtrl: ToastController) {

  }

  ionViewWillEnter() {
    this.dataService.getAllTechnologies().then(data => this.technologies = data);
    this.categories = this.dataService.getAllCategories(); 
    this.priorities = this.dataService.getAllPriorities();
    if(this.navParams.get('schedule')) {
      this.isInEditMode =  true;
      this.schedule = this.navParams.get('schedule');
    }
  }

  createSchedule() {
    if(!this.isInEditMode) {
      this.dataService.createSchedule(this.schedule);
      this.toastCtrl.create({
        message: 'votre tâche a été créée',
        position: 'middle',
        duration: 1000,
        cssClass: 'ok'
      }).present();
      this.resetSchedule();
    } else {
      this.dataService.edit(this.schedule);
      this.toastCtrl.create({
        message: 'votre tâche a été modifiée',
        position: 'middle',
        duration: 1000,
        cssClass: 'okEdit'
      }).present();
    }
  }

  resetSchedule() {
      this.schedule =  {
        name: '',
        date: '',
        duration: 0,
        priority: '',
        remark: '',
        technology: { name: '', category: ''}
    }
  }

}
