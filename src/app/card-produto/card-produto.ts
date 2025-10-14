import { Component , Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../produto';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css'
})
export class CardProduto {
  @Input() produto: Produto = { id:1, titulo:"Produto 1", preco: 100 };

  
}
