import { Component, Input } from '@angular/core';
import { Produto } from '../produto';
import { CommonModule } from '@angular/common';
import { TelefonePipe } from '../telefone-pipe';


@Component({
  selector: 'app-modal-detalhe-produto',
  imports: [CommonModule , TelefonePipe],
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
