import { Component, Input } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto-service';
import { CommonModule } from '@angular/common';
import { TelefonePipe } from '../telefone-pipe';
import { inject } from '@angular/core';


import { ToastService } from '../toast-service';

@Component({
  selector: 'app-modal-detalhe-produto',
  imports: [CommonModule , TelefonePipe],
  templateUrl: './modal-detalhe-produto.html',
})
export class ModalDetalheProduto {
  @Input() produto?: Produto;
  showModal = false;

  produtoService = inject(ProdutoService);
  toastService = inject(ToastService);

  abrir() {
    this.showModal = true;
  }

  fechar() {
    this.showModal = false;
  }

  async notificar() {
    if (!this.produto?.id) return;

    const mensagem = prompt('Digite uma mensagem para o vendedor:', 'Tenho interesse neste produto.');
    if (mensagem) {
      try {
        await this.produtoService.notificarInteresse(this.produto.id, mensagem);
        this.toastService.show('Notificação enviada com sucesso!', 'success');
        this.fechar();
      } catch (error: any) {
        console.error('Erro ao notificar:', error);
        if (error.status === 401) {
          this.toastService.show('Você precisa estar logado para enviar mensagens.', 'error');
        } else {
          this.toastService.show('Erro ao enviar notificação. Tente novamente.', 'error');
        }
      }
    }
  }
}
