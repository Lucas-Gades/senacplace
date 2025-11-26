import { Component } from '@angular/core';
import { ProdutoService } from '../produto-service';
import { Produto } from '../produto';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalDetalheProduto } from '../modal-detalhe-produto/modal-detalhe-produto';
import { FiltroPesquisaPipe } from '../filtro-pesquisa-pipe';
import { MoedaBrPipe } from '../moeda-br-pipe';



@Component({
  selector: 'app-tabela-meus-produtos',
  imports: [ CommonModule, RouterLink, FormsModule, FiltroPesquisaPipe, MoedaBrPipe, ModalDetalheProduto],
  templateUrl: './tabela-meus-produtos.html',
  styleUrl: './tabela-meus-produtos.css'
})
export class TabelaMeusProdutos {
  meusProdutos: Produto[] = [];
  nomePesquisa = "";
  modalRef?: ModalDetalheProduto;

  constructor(private produtoService: ProdutoService) {
    this.carregarMeusProdutos();
  }

  async carregarMeusProdutos() {
    this.meusProdutos = await this.produtoService.listarProdutosDoUsuario();
  }

  async deletar(id?: number) {
    const produto = this.meusProdutos.find(p => p.id === id);
    if (produto && confirm(`Tem certeza que deseja excluir o produto "${produto.titulo}"?`)) {
      await this.produtoService.deletar(id!);
      alert(`O produto "${produto.titulo}" foi deletado com sucesso!`);
      await this.carregarMeusProdutos();
    } else {
      alert("Ação de exclusão cancelada.");
    }
  }
}
