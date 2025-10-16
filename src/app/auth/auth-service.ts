
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Usuários mockados
  private usuarios = [
    { usuario: 'admin', senha: '1234', token: 'mock-token-admin' },
    { usuario: 'user', senha: 'abcd', token: 'mock-token-user' }
  ];

  login(username: string, senha: string): Observable<boolean> {
    const user = this.usuarios.find(u => u.usuario === username && u.senha === senha);
    if (user) {
      sessionStorage.setItem('token', user.token);
      sessionStorage.setItem('usuario', user.usuario);
      return of(true);
    } else {
      return of(false);
    }
  }

  estaLogado(): boolean {
    const token = sessionStorage.getItem('token');
    return token !== undefined && token !== null;
  }
    ehAdmin(): boolean { 
    const usuario = sessionStorage.getItem('usuario');
    return usuario === 'admin';
  }

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
  }
}
