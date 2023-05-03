import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //rootPage: any = 'SigninPage';

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
