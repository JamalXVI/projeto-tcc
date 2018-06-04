import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('estado', [
      state("inicio", style({
        "background-position-y": "0px"
      })),
      state("fim", style({
        "background-position-y": "-415px"
      })),
      transition('inicio => fim', animate('1500ms ease-in')),
      transition('fim => inicio', animate('1500ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'app';
  estado = "inicio";
  repeticoesEspera = 2;
  contadorRepeticoes = 0;
  constructor() {
    let timer = Observable.timer(2000, 4500);
    timer.subscribe(() => this.verificarMudancaEstado());
  }
  verificarMudancaEstado() {
    this.estado = this.estado == "fim" ? "inicio" : "fim";
  }
}
