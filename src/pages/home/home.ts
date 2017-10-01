import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { DataService } from '../../providers/data/data.service';

import { Technology } from '../../models/technology';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  technologies: Technology[];

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, private dataService: DataService) {
  }

  ionViewWillLoad() {
    const loader = this.loadingCtrl.create({
      content: 'veuillez patienter'
    });
    loader.present();
    this.technologies = this.dataService.getAllTechnologies();
    loader.dismiss();
  }

}
