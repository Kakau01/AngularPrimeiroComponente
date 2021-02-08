import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  //receber propriedades do componente pai app
  @Input() palavra!: string;
  @Input() color!: string;
  @Output() clicado = new EventEmitter();


  imageURL = 'https://image.winudf.com/v2/image1/Y29tLnRhbWFyYWFwcHMuY3V0ZWxpdHRsZWtpdHRlbnNfc2NyZWVuXzRfMTU1ODgxNDI0Nl8wNDc/screen-4.jpg?fakeurl=1&type=.jpg';
  // valorInput = ''
  valorInput = 0;


  constructor() { }

  ngOnInit(): void {
  }

  onClick($event: any) {
    console.log("Clicou!", $event);
  }

  valorDoInput($event: any) {
      this.valorInput = $event.target.value;
      
  }

  onClickBotaoEmissor($event: any) {
    console.log("Devo emitir info para o componente pai");
    this.clicado.emit($event);
  }

  receberEvento($event:any){
    this.valorInput  = $event;
    console.log("Mensagem recebida pelo pai: ", $event);
    console.log(this.valorInput);
  }



  


}
