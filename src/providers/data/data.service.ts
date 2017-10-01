import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Technology} from '../../models/technology';

@Injectable()
export class DataService {

  technologies : Technology[] = [
    { name: 'Angular', category: 'Front'},
    { name: 'PWA', category: 'Hybride'},
    { name: 'Ionic', category: 'Hybride'},
    { name: 'Node', category: 'Backend'}
  ];

  

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  getAllTechnologies() {
    return this.technologies;
  }

  searchTechnology(term) {
    
  }

}
