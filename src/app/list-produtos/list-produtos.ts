import { Component } from '@angular/core';
import { ProdutoService } from '../produto-service';
import { Produto } from '../produto';
import { CardProduto } from "../card-produto/card-produto";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltroPesquisaPipe } from '../filtro-pesquisa-pipe';

@Component({
  selector: 'app-list-produtos',
  imports: [FormsModule,CommonModule , FiltroPesquisaPipe , CardProduto], 

  templateUrl: './list-produtos.html',
  styleUrl: './list-produtos.css'
})
export class ListProdutos {
 listaProdutos: Produto[] = [];
 nomePesquisa = "";

  constructor(private produtoService: ProdutoService) {
    this.listaProdutos = this.produtoService.listar();
  }

}
