import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() valor!: number;
  @Output() valorChange = new EventEmitter();
  // @Output() valorAlterado = new EventEmitter();


  contador = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

  diminuirContador() {
    console.log("Voce clicou em negativo");
    this.valor = --this.valor;
    this.valorChange.emit(this.valor);

  }

  aumentarContador() {
    console.log("Voce clicou em positivo");
    this.valor = ++this.valor;
    this.valorChange.emit(this.valor);

  }


}
