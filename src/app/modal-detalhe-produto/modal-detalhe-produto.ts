import { Component, Input } from '@angular/core';
import { Produto } from '../produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-detalhe-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-detalhe-produto.html',
})
export class ModalDetalheProduto {
  @Input() produto?: Produto;
  showModal = false;

  abrir() {
    this.showModal = true;
  }

  fechar() {
    this.showModal = false;
  }
}
