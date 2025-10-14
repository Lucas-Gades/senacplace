import { Component } from '@angular/core';
import { CardProduto } from "../card-produto/card-produto";
import { ProdutoService } from '../produto-service';
import { Produto } from '../produto';


@Component({
  selector: 'app-list-produtos',
  imports: [CardProduto],
  templateUrl: './list-produtos.html',
  styleUrl: './list-produtos.css'
})
export class ListProdutos {
 listaProdutos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {
    this.listaProdutos = this.produtoService.listar();
  }
}
