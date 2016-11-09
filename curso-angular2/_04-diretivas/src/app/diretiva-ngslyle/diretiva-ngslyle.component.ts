import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngslyle',
  templateUrl: './diretiva-ngslyle.component.html',
  styleUrls: ['./diretiva-ngslyle.component.scss']
})
export class DiretivaNgslyleComponent implements OnInit {

  ativo: boolean = false;
  tamanhoFonte: number = 10;

  constructor() { }

  ngOnInit() {
  }

  onClickMudarAtributo(){
    this.ativo = !this.ativo;
  }

}
