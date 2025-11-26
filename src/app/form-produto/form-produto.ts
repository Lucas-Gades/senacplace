import { JsonPipe , CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule ,  } from '@angular/forms';
import { ProdutoService } from '../produto-service';
import { Produto } from '../produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-produtos',
  imports: [FormsModule, JsonPipe , CommonModule],
  templateUrl: './form-produto.html',
  styleUrl: './form-produto.css'
})
export class FormProdutos {
  id?: number;
  produto = new Produto();
  botaoAcao = "Publicar"

  produtoService = inject(ProdutoService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    this.id = +this.route.snapshot.params['id'];
    if (this.id) {
      this.botaoAcao = 'Editar';
      this.produtoService.buscarPorId(this.id).then(produto => {
        this.produto = produto || new Produto();
      });
    }
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
        alert('Produto editado com sucesso!');
        this.router.navigate(['/meus-produtos']);
      } else {
        await this.produtoService.inserir(this.produto);
        alert('Produto cadastrado com sucesso!');
        this.produto = new Produto();
        this.router.navigate(['/meus-produtos']);
      }
    } catch (error) {
      console.error('Erro detalhado ao salvar produto:', error);
      alert('Erro ao salvar produto!');
    }
  }

  voltar() {
    this.router.navigate(['/meus-produtos']);
  }

}
