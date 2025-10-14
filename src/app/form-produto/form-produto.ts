import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../produto-service';
import { Produto } from '../produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-produtos',
  imports: [FormsModule, JsonPipe],
  templateUrl: './form-produto.html',
  styleUrl: './form-produto.css'
})
export class FormProdutos {
  id?: number;
  produto = new Produto();
  botaoAcao = "Cadastrar"

  produtoService = inject(ProdutoService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    this.id = +this.route.snapshot.params['id'];
    if(this.id) {
      this.botaoAcao = "Editar";
      this.produto = this.produtoService.buscarPorId(this.id) || new Produto();
    }
  }

  salvar(){ 
    if(this.id) {//Editar
      this.produtoService.editar(this.id, this.produto);
      alert("Produto editado com sucesso!")
    }
    else {
      this.produtoService.inserir(this.produto);
      alert("Produto cadastrado com sucesso!")
      this.produto = new Produto();  
    } 
  }

  voltar() {
    this.router.navigate(['/tabela'])
  }

}
