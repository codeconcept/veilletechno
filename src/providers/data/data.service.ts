import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Technology} from '../../models/technology';

@Injectable()
export class DataService {

  technologies : Technology[] = [
    { name: 'Angular', category: 'Front'},
    { name: 'PWA', category: 'Hybride'},
    { name: 'Ionic', category: 'Hybride'},
    { name: 'Node', category: 'Backend'}
  ];

  categories: string[] = ['Front', 'Back', 'FullStack', 'Hybride', 'Autre'];

  priorities: string[] = ['dès que possible', 'cette semaine', 'ce mois', 'ce trimestre', 'ce semestre', 'cette année', 'un jour'];  

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getAllTechnologies() {
    console.log(this.technologies);
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

}
