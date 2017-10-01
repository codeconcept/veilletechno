import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from '../../providers/data/data.service';
import { Technology } from "../../models/technology";

@Component({
  selector: 'add-techno',
  templateUrl: 'add-techno.html'
})
export class AddTechnoPage {
  categories: string[];
  priorities: string[];

  technology: Technology = {name:'', category: ''};
  
  constructor(public navCtrl: NavController, private dataService: DataService) {

  }

  ionViewWillLoad() {
    this.categories = this.dataService.getAllCategories();
  }

  addTechnology() {
    this.dataService.addTechnology(this.technology);
    this.technology =  {name:'', category: ''};
  }

}
