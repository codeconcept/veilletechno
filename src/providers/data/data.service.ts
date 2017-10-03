import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Technology} from '../../models/technology';
import { Schedule } from '../../models/schedule';

import Dexie from 'dexie';

@Injectable()
export class DataService extends Dexie {

  schedules: Dexie.Table<Schedule, number>;

  technologies: Technology[] = [
    { name: 'Angular', category: 'Front'},
    { name: 'PWA', category: 'Hybride'},
    { name: 'Ionic', category: 'Hybride'},
    { name: 'Node', category: 'Backend'}
  ];

  // schedules: Schedule[] = [];
  
  categories: string[] = ['Front', 'Back', 'FullStack', 'Hybride', 'Autre'];

  priorities: string[] = ['basse', 'moyenne', 'haute'];  

  constructor(public http: HttpClient) {
    super('ScheduleDatabase');
    this.version(1).stores({
      schedules: '++id, name'
    })
  }

  getAllTechnologies() {
    return this.technologies;
  }

  getAllCategories() {
    return this.categories;
  }

  getAllPriorities() {
    return this.priorities;
  }

  search(term: string) {
    return this.technologies.filter(tech => tech.name.toLocaleLowerCase().includes(term));
  }

  addTechnology(technology: Technology) {
    this.technologies = [...this.technologies, technology];
    console.log(this.technologies);
  }

  createSchedule(schedule: Schedule) {
    // this.schedules = [...this.schedules, schedule];
    this.schedules.add(schedule);
  }

  getAllSchedules(): Dexie.Promise<Schedule[]> {
    // return this.schedules;
    return this.schedules.toArray()
  }

}
