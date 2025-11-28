import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth-service'; 
import { ToastComponent } from './toast/toast'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule, ToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('senacplace');
  auth = inject(AuthService);
  router = inject(Router);

  sair() {
    this.auth.logout();
    this.router.navigate(['']);
  }
}
