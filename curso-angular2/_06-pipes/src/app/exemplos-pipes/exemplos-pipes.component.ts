import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
