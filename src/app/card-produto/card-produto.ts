import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../produto';
import { ModalDetalheProduto } from '../modal-detalhe-produto/modal-detalhe-produto';
import { MoedaPipe } from '../moeda-pipe';
import { CategoriaCorPipe } from '../categoria-cor-pipe';


@Component({
  selector: 'app-card-produto',
  imports: [CommonModule, ModalDetalheProduto, MoedaPipe , CategoriaCorPipe],
  templateUrl: './card-produto.html',
  styleUrls: ['./card-produto.css']
})
export class CardProduto {
  @Input() produto: Produto = { id: 1, titulo: 'Produto 1', preco: 100 };

  
}
