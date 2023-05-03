import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss']
})
export class CadastroPage implements OnInit {
  imagem = "/src/assets/img/Artboard-1.jpeg";

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  cadastrando(){
    this.navCtrl.navigateForward('cadastro2')
  }

  voltar(){
    this.navCtrl.navigateForward('home')
  }
}
