import { Component } from '@angular/core';
import { ProdutoService } from '../produto-service';
import { Produto } from '../produto';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-meus-produtos',
  imports: [ CommonModule , RouterLink],
  templateUrl: './meus-produtos.html',
  styleUrl: './meus-produtos.css'
})
export class MeusProdutos {
 meusProdutos: Produto[] = [];

    constructor(private produtoService: ProdutoService) {
      this.meusProdutos =  this.produtoService.listarProdutosDoUsuario();
  }

deletar(id?: number) {
  const produto = this.meusProdutos.find(p => p.id === id);
  if (produto && confirm(`Tem certeza que deseja excluir o produto "${produto.titulo}"?`)) {
    this.produtoService.deletar(id);
    alert(`O produto "${produto.titulo}" foi deletado com sucesso!`);
    this.meusProdutos = this.meusProdutos.filter(p => p.id !== id);
  } else {
    alert("Ação de exclusão cancelada.");
  }
}

}
