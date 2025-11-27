import { Component } from '@angular/core';
import { CategoriaService } from '../categoria-service';
import { Categoria } from '../categoria';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../toast.component';

@Component({
  selector: 'app-tabela-categorias',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './tabela-categorias.html',
  styleUrl: './tabela-categorias.css'
})
export class TabelaCategorias {
  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private toastService: ToastService
  ) {
    this.carregarCategorias();
  }

  async carregarCategorias() {
    this.categorias = await this.categoriaService.listarCategoria();
  }

  async deletar(id?: number) {
    const categoria = this.categorias.find(c => c.id === id);
    if (categoria && confirm(`Tem certeza que deseja excluir a categoria "${categoria.nomecategoria}"?`)) {
      await this.categoriaService.deletar(id!);
      this.toastService.show(`A categoria "${categoria.nomecategoria}" foi deletada com sucesso!`, 'success');
      await this.carregarCategorias();
    }
  }
}
