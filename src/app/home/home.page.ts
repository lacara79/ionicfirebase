import { ChangeDetectorRef, Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService, Pessoa } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  pessoa: any = [];
  lista: any =[];
  dataAtual = new Date();

  constructor(private dataService: DataService, private cd: ChangeDetectorRef, private alertCtrl: AlertController) {
    this.dataService.getPessoa().subscribe(res => {
      this.pessoa = res;
      console.log(this.pessoa['length']);
      console.log(this.dataAtual.getDate());
      this.cd.detectChanges();
    });
  }

  async gravar() {
    const alert = await this.alertCtrl.create({
      header: 'Adicionar novo',
      inputs: [
        {
          name: 'nome',
          placeholder: 'Entre com o Nome',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'gravar',
          handler: res => {
            this.dataService.addPessoa({ nome: res.nome});
          }
        }
      ]
    });

    await alert.present();
  }

  deletarPessoa(id: any){
    this.dataService.deletePessoa(id);
  }

  async exibirPessoa(id: any){

    const alertPessoa = await this.alertCtrl.create({
      header: 'Excluir',
      message: "Tem certeza que deseja excluir: ",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Sim',
          handler: res => {
            this.deletarPessoa(id);
          }
        }
      ]
    })
    alertPessoa.present()
  }


  
}