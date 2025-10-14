import { Injectable } from '@angular/core';
import { Produto } from './produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private proxId = 6;
  listaProdutos: Produto[] = [
    { id: 1, usuarioId: 1, titulo: 'Bicicleta Aro 29', categoria: 'Esportes', condicao: 'Usado', descricao: 'Bicicleta em bom estado, ideal para trilhas.', preco: 1200, fotos: ['https://example.com/bike1.jpg'], formasPagamento: ['Dinheiro', 'Cartão'], aceitaTroca: false, cidade: 'São Paulo', opcoesEntrega: ['Retirar no local'], contato: '(11) 91234-5678', observacoes: 'Negociável', dataPublicacao: new Date('2024-01-15') },
    { id: 2, usuarioId: 2, titulo: 'Smartphone XYZ', categoria: 'Eletrônicos', condicao: 'Novo', descricao: 'Smartphone com câmera de alta resolução e bateria duradoura.', preco: 2500, fotos: ['https://example.com/phone1.jpg'], formasPagamento: ['Dinheiro', 'Cartão', 'Pix'], aceitaTroca: true, cidade: 'Rio de Janeiro', opcoesEntrega: ['Correios', 'Retirar no local'], contato: '(21) 99876-5432', observacoes: '', dataPublicacao: new Date('2024-02-20') },
    { id: 3, usuarioId: 3, titulo: 'Livro "Aprendendo Angular"', categoria: 'Livros', condicao: 'Usado', descricao: 'Livro didático sobre desenvolvimento web com Angular.', preco: 80, fotos: ['https://example.com/book1.jpg'], formasPagamento: ['Dinheiro'], aceitaTroca: false, cidade: 'Belo Horizonte', opcoesEntrega: ['Correios'], contato: '(31) 98765-4321', observacoes: 'Capa levemente desgastada', dataPublicacao: new Date('2024-03-10') },
  ];

 
  inserir(produto: any){
    produto.id = this.proxId++;
    this.listaProdutos.push(produto);
  }  

  listar() {
    return this.listaProdutos;
  }

  buscarPorId(id?: number) {
    const produto = this.listaProdutos.find(
      produto => produto.id == id
    );
    return Object.assign({}, produto);
  }

  editar(id: number, produto: Produto) {
    const indice = this.getIndice(id);
    if(indice >= 0) {
      this.listaProdutos[indice] = produto;
    }
  }

  deletar(id?:number) {
    const indice = this.getIndice(id);
    if(indice >=0){
      this.listaProdutos.splice(indice, 1);
    }
  }

  private getIndice(id?:number) {
    return this.listaProdutos.findIndex(
      produto => produto.id == id
    );
  }
}
