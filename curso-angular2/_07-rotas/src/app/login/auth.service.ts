import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(usuario: User){
    
    if(usuario.nome === 'usuario@email.com' && usuario.senha ==='123456'){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/'])
    }else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

}
