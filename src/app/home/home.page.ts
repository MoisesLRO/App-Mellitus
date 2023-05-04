import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(
    private navCtrl: NavController
  ) {}

  async Cadastrar(){
    this.navCtrl.navigateForward('cadastro')
  }

  async Entrar(){
    this.navCtrl.navigateForward('home-principal')
  }

}
