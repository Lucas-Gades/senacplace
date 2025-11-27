import { Component, inject } from '@angular/core';
import { Categoria } from '../categoria';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../categoria-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto-service';

@Component({
  selector: 'app-form-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-categoria.html',
  styleUrls: ['./form-categoria.css']
})
export class FormCategoria {
  categoria = new Categoria();
  botaoAcao = "Adicionar"
  id?: number;
  categoriaService = inject(CategoriaService);
  route = inject(ActivatedRoute);
  router = inject(Router);


  constructor() {
    this.id = +this.route.snapshot.params['id'];
    if (this.id) {
      this.botaoAcao = 'Editar';
      this.categoriaService.listarCategoria().then(categorias => {
        const cat = categorias.find(c => c.id == this.id);
        this.categoria = cat ? cat : new Categoria();
      });
    }
  }

  async salvar() {
    try {
      if (this.id) {
        await this.categoriaService.editar(this.id, this.categoria);
        alert('Categoria editada com sucesso!');
        this.router.navigate(['/categorias']);
      } else {
        await this.categoriaService.inserir(this.categoria);
        alert('Categoria cadastrada com sucesso!');
        this.categoria = new Categoria();
        this.router.navigate(['/categorias']);
      }
    } catch (error) {
      console.error('Erro ao salvar categoria:', error);
      alert('Erro ao salvar categoria!');
    }
  }
                                                                                                        
  voltar() {
    this.router.navigate(['/categorias']);
  }
}
