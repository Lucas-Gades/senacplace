import { Component } from '@angular/core';
import { CategoriaService } from '../categoria-service';
import { Categoria } from '../categoria';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabela-categorias',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './tabela-categorias.html',
  styleUrl: './tabela-categorias.css'
})
export class TabelaCategorias {
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {
    this.carregarCategorias();
  }

  async carregarCategorias() {
    this.categorias = await this.categoriaService.listarCategoria();
  }

  async deletar(id?: number) {
    const categoria = this.categorias.find(c => c.id === id);
    if (categoria && confirm(`Tem certeza que deseja excluir a categoria "${categoria.nomeCategoria}"?`)) {
      await this.categoriaService.deletar(id!);
      alert(`A categoria "${categoria.nomeCategoria}" foi deletada com sucesso!`);
      await this.carregarCategorias();
    } else {
      alert("Ação de exclusão cancelada.");
    }
  }
}
