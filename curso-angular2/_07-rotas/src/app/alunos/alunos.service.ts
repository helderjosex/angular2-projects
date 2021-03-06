import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
      {id:1, name: "Aluno 01", email: "aluno01@email.com"},
      {id:2, name: "Aluno 02", email: "aluno02@email.com"},
      {id:3, name: "Aluno 03", email: "aluno03@email.com"}
  ];

  getAll(){
    return this.alunos;
  }

  getAluno(id: number){
    let alunos = this.getAll();
    for (let i = 0; i < alunos.length;i++){
      let aluno = alunos[i];
      if(aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

  constructor() { }

}
