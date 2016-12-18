import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: "Learning JavaScript Data Structures and Algorithms - Second Edition",
    rating: 4.54321,
    numeroPaginas: 341,
    preco: 44.39,
    dataLancamento: new Date(2016,9,3),
    url: 'http://a.co/2UXVy5g'
  }

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string;

  addCurso(valor){
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos(){
    
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim()===''){
      return this.livros;
    }
    return this.livros.filter((v) => {
      if(v.toLocaleLowerCase().indexOf(this.filtro) >= 0){
        return true;
      }
      return false;
    });

  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assincrono'), 2000)
  });

  valorAsync2 = Observable.interval(2000)
    .map(valor => 'Valor assincrono 2') 

  constructor() { }

  ngOnInit() {
  }

}
