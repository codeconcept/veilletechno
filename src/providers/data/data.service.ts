import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Technology} from '../../models/technology';
import { Schedule } from '../../models/schedule';

import Dexie from 'dexie';

@Injectable()
export class DataService {

  db;
  // schedules: Dexie.Table<Schedule, number>;

  // technologies: Technology[] = [
  //   { name: 'Angular', category: 'Front'},
  //   { name: 'PWA', category: 'Hybride'},
  //   { name: 'Ionic', category: 'Hybride'},
  //   { name: 'Node', category: 'Backend'}
  // ];

  // schedules: Schedule[] = [];
  
  categories: string[] = ['Front', 'Back', 'FullStack', 'Hybride', 'Autre'];

  priorities: string[] = ['basse', 'moyenne', 'haute'];  

  constructor(public http: HttpClient) {
    this.db = new Dexie('veilletechno');
    this.db.version(1).stores({
      schedules: '++id, name',
      technologies: '++id'
    });
  }

  getAllTechnologies(): Dexie.Promise<Technology[]> {
    return this.db.technologies.toArray();
  }

  getAllCategories() {
    return this.categories;
  }

  getAllPriorities() {
    return this.priorities;
  }

  search(term: string):  Dexie.Promise<Technology[]> {
    return this.db.technologies
      .toArray()
      .then(data => {
        // console.log(data);
        return data.filter(tech => this.nameIncludesTerm(tech, term));
      });
  }

  nameIncludesTerm(technology, term) {
    console.log(technology, term.toLocaleLowerCase(), technology.name.toLocaleLowerCase());
    return technology.name.toLocaleLowerCase().includes(term.toLocaleLowerCase());
  }

  addTechnology(technology: Technology) {
    this.db.technologies.add(technology);
  }

  createSchedule(schedule: Schedule) {
    this.db.schedules.add(schedule);
  }

  getAllSchedules(): Dexie.Promise<Schedule[]> {
    return this.db.schedules.toArray()
  }

  edit(schedule: Schedule) {
    this.db.schedules.update(schedule.id, schedule);
  }

  delete(scheduleId) {
    this.db.schedules.delete(scheduleId);
  }

}
