import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../toast-service'; // IMPORT atualizado

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.css'   // ← CORRIGIDO
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
}