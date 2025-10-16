import { Injectable } from '@angular/core';
import { Categoria } from './categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private proxId = 6;

  listaCategorias: Categoria[] = [
    { id: 1, nomeCategoria: 'Eletrônicos' },
    { id: 2, nomeCategoria: 'Móveis' },
    { id: 3, nomeCategoria: 'Roupas' },
    { id: 4, nomeCategoria: 'Calçados' },
    { id: 5, nomeCategoria: 'Livros' },
    { id: 6, nomeCategoria: 'Esportes' }
  ];

  inserir(categoria: any){
    categoria.id = this.proxId++;
    this.listaCategorias.push(categoria);
  }  

  listarCategoria() {
    return this.listaCategorias;
  }

  buscarPorId(id?: number) {
    const categoria = this.listaCategorias.find(
      categoria => categoria.id == id
    );
    return Object.assign({}, categoria);
  }
  editar(id: number, categoria: Categoria) {
    const indice = this.getIndice(id);
    if(indice >= 0) {
      this.listaCategorias[indice] = categoria;
    }
  }

  deletar(id?:number) {
    const indice = this.getIndice(id);
    if(indice >=0){
      this.listaCategorias.splice(indice, 1);
    }
  }

  private getIndice(id?: number) {
    return this.listaCategorias.findIndex(
      categoria => categoria.id == id
    );
  }     
}
