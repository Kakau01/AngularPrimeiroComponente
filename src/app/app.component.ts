import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  palavra = 'CARRO';
  favoriteColor = 'green';
  titulo = "Seja Bem Vindo!!!"
  valorInput = 0;
  //primeira funcao que é chamada quando a classe é instanciada
  constructor() {
    
  }

  eventoRecebido($event:any) {
    console.log("App Componente: Evento Recebido: ",  $event)
  }

  
 
}

