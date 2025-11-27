import { Component } from '@angular/core';
import { ProdutoService } from '../produto-service';
import { Produto } from '../produto';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalDetalheProduto } from '../modal-detalhe-produto/modal-detalhe-produto';
import { FiltroPesquisaPipe } from '../filtro-pesquisa-pipe';
import { MoedaPipe } from '../moeda-pipe';


import { ToastService } from '../toast.component';

@Component({
  selector: 'app-tabela-produtos',
  imports: [ CommonModule, RouterLink, FormsModule, FiltroPesquisaPipe, MoedaPipe, ModalDetalheProduto],
  templateUrl: './tabela-produtos.html',
  styleUrl: './tabela-produtos.css'
})
export class TabelaProdutos {
  meusProdutos: Produto[] = [];
  nomePesquisa = "";
  modalRef?: ModalDetalheProduto;

  constructor(
    private produtoService: ProdutoService,
    private toastService: ToastService
  ) {
    this.carregarMeusProdutos();
  }

  async carregarMeusProdutos() {
    this.meusProdutos = await this.produtoService.listarProdutosDoUsuario();
  }

  async deletar(id?: number) {
    const produto = this.meusProdutos.find(p => p.id === id);
    if (produto && confirm(`Tem certeza que deseja excluir o produto "${produto.titulo}"?`)) {
      await this.produtoService.deletar(id!);
      this.toastService.show(`O produto "${produto.titulo}" foi deletado com sucesso!`, 'success');
      await this.carregarMeusProdutos();
    }
  }
}
