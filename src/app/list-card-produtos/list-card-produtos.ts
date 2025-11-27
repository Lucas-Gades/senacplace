import { Component } from '@angular/core';
import { ProdutoService } from '../produto-service';
import { Produto } from '../produto';
import { CardProduto } from "../card-produto/card-produto";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltroPesquisaPipe } from '../filtro-pesquisa-pipe';

@Component({
  selector: 'app-list-card-produtos',
  imports: [FormsModule,CommonModule , FiltroPesquisaPipe , CardProduto], 

  templateUrl: './list-card-produtos.html',
  styleUrl: './list-card-produtos.css'
})
export class ListCardProdutos {
 listaProdutos: Produto[] = [];
 nomePesquisa = "";

  constructor(private produtoService: ProdutoService) {
    this.carregarProdutos();
  }

  async carregarProdutos() {
    this.listaProdutos = (await this.produtoService.listar()).reverse();
  }

}
