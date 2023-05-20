import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'herencia_angular';
  valor1:number;
  valor2:number;
  valor3:number;
  resultado:string="";
  constructor(){
    this.valor1 = this.numeroAleatorio();
    this.valor2 = this.numeroAleatorio();
    this.valor3 = this.numeroAleatorio();
  }
  numeroAleatorio(){
    return Math.trunc(Math.random()*6)+1
  }

  lanzar(){
    this.valor1 = this.numeroAleatorio();
    this.valor2 = this.numeroAleatorio();
    this.valor3 = this.numeroAleatorio();
    this.resultadoApuesta();
  }

  resultadoApuesta(){
    if(this.valor1 == this.valor2 && this.valor1 == this.valor3 && this.valor2 == this.valor3)
    this.resultado = "¡Usted es ganador!"

    else
    this.resultado = "¡Usted es perdedor!"
  }
}

