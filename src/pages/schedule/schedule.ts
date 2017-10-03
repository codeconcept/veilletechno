import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

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


  constructor(public navCtrl: NavController, private dataService: DataService, private toastCtrl: ToastController) {

  }

  ionViewWillLoad() {
    this.technologies = this.dataService.getAllTechnologies(); 
    this.categories = this.dataService.getAllCategories(); 
    this.priorities = this.dataService.getAllPriorities();
  }

  createSchedule() {
    this.dataService.createSchedule(this.schedule);
    this.toastCtrl.create({
      message: 'votre tâche a été créée',
      position: 'middle',
      duration: 1000,
      cssClass: 'ok'
    }).present();
    this.resetSchedule();
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
