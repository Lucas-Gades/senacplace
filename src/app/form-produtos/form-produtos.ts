import { JsonPipe , CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule ,  } from '@angular/forms';
import { ProdutoService } from '../produto-service';
import { CategoriaService } from '../categoria-service';
import { Produto } from '../produto';
import { Categoria } from '../categoria';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastService } from '../toast-service';

@Component({
  selector: 'app-form-produtos',
  imports: [FormsModule, JsonPipe , CommonModule],
  templateUrl: './form-produtos.html',
  styleUrl: './form-produtos.css'
})
export class FormProdutos {
  id?: number;
  produto = new Produto();
  botaoAcao = "Publicar"

  produtoService = inject(ProdutoService);
  categoriaService = inject(CategoriaService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  toastService = inject(ToastService);
  listaCategorias: Categoria[] = [];

  constructor() {
    this.id = +this.route.snapshot.params['id'];
    this.carregarCategorias();
    if (this.id) {
      this.botaoAcao = 'Editar';
      this.produtoService.buscarPorId(this.id).then(produto => {
        this.produto = produto || new Produto();
      });
    }
  }

  async carregarCategorias() {
    this.listaCategorias = await this.categoriaService.listarCategoria();
  }

  erroContato = false;

validarCelular() {
  if (!this.produto.contato) {
    this.erroContato = false;
    return;
  }
  const numeros = this.produto.contato.replace(/\D/g, '');
  
  this.erroContato = numeros.length !== 11;
  
  this.produto.contato = numeros;
}

  async salvar() {
    try {
      if (this.id) {
        await this.produtoService.editar(this.id, this.produto);
        this.toastService.show('Produto editado com sucesso!', 'success');
        this.router.navigate(['/meus-produtos']);
      } else {
        await this.produtoService.inserir(this.produto);
        this.toastService.show('Produto cadastrado com sucesso!', 'success');
        this.produto = new Produto();
        this.router.navigate(['/meus-produtos']);
      }
    } catch (error) {
      console.error('Erro detalhado ao salvar produto:', error);
      this.toastService.show('Erro ao salvar produto!', 'error');
    }
  }

  voltar() {
    this.router.navigate(['/meus-produtos']);
  }

}
