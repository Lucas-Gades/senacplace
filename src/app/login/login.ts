import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth-service';
import { Router } from '@angular/router';

import { ToastService } from '../toast-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  usuario = "";
  senha = "";
  erro = signal<boolean>(false);
  authService = inject(AuthService)
  router = inject(Router)
  toastService = inject(ToastService)

  async realizarLogin() {
    const logado = await this.authService.login(this.usuario, this.senha);
    if(logado) {
      this.toastService.show("Usuario logado com sucesso", 'success');        
      this.erro.set(false);
      this.router.navigate(['/inicio']);
    }
    else {
      this.erro.set(true);
      this.toastService.show("Erro ao realizar login", 'error');
    }
  }
}
