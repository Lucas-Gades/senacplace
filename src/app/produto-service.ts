import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private proxId = 7;


    private usuarioLogado: Usuario = { 
    id: 1,
    nomeCompleto: 'Lucas da Silva',
    cpf: '123.456.789-00',
    dataNascimento: '2000-01-01',
    email: 'lucas@email.com',
    senha: '123456'
  };


  listaProdutos: Produto[] = [
     { id: 1, usuarioId: 1, titulo: 'Bicicleta Aro 29', categoria: 'Esportes', condicao: 'Usado', descricao: 'Bicicleta em bom estado, ideal para trilhas.', preco: 1200, fotos: ['https://example.com/bike1.jpg'], formasPagamento: ['Dinheiro', 'Cartão'], aceitaTroca: false, cidade: 'Porto Alegre', opcoesEntrega: ['Retirada no local'], contato: '(51) 99999-9999', dataPublicacao: new Date('2024-01-15') },
  { id: 2, usuarioId: 2, titulo: 'Smartphone XYZ', categoria: 'Eletrônicos', condicao: 'Novo', descricao: 'Smartphone com câmera de alta resolução e bateria duradoura.', preco: 2500, fotos: ['https://example.com/phone1.jpg'], formasPagamento: ['Dinheiro', 'Cartão', 'Pix'], aceitaTroca: true, cidade: 'Canoas', opcoesEntrega: ['Envio Correios'], contato: '(51) 99876-5432', dataPublicacao: new Date('2024-02-20') },
  { id: 3, usuarioId: 3, titulo: 'Livro "Aprendendo Angular"', categoria: 'Livros', condicao: 'Usado', descricao: 'Livro didático sobre desenvolvimento web com Angular.', preco: 80, fotos: ['https://example.com/book1.jpg'], formasPagamento: ['Dinheiro'], aceitaTroca: false, cidade: 'Gravataí', opcoesEntrega:['Envio Correios'], contato: '(51) 98765-4321', dataPublicacao: new Date('2024-03-10') },
  { id: 4, usuarioId: 1, titulo: 'Tênis Esportivo', categoria: 'Calçados', condicao: 'Novo', descricao: 'Tênis confortável para corrida e academia.', preco: 350, fotos: ['https://example.com/tenis1.jpg'], formasPagamento: ['Dinheiro', 'Cartão', 'Pix'], aceitaTroca: false, cidade: 'Viamão', opcoesEntrega: ['Retirada no local'], contato: '(51) 91234-5678', dataPublicacao: new Date('2024-04-01') },
  { id: 5, usuarioId: 1, titulo: 'Camiseta Casual', categoria: 'Roupas', condicao: 'Usado', descricao: 'Camiseta em ótimo estado, tamanho M.', preco: 45, fotos: ['https://example.com/camiseta1.jpg'], formasPagamento: ['Dinheiro', 'Cartão'], aceitaTroca: true, cidade: 'São Leopoldo', opcoesEntrega: ['Retirada no local'], contato: '(51) 91234-5678', dataPublicacao: new Date('2024-04-05') },
  { id: 6, usuarioId: 1, titulo: 'Mesa de Escritório', categoria: 'Móveis', condicao: 'Usado', descricao: 'Mesa em madeira com gavetas, perfeita para home office.', preco: 280, fotos: ['https://example.com/mesa1.jpg'], formasPagamento: ['Dinheiro'], aceitaTroca: false, cidade: 'Pelotas', opcoesEntrega: ['Retirada no local'], contato: '(51) 91234-5678', dataPublicacao: new Date('2024-04-10') }
  ];
 
  inserir(produto: any){
    produto.id = this.proxId++;
    produto.usuarioId = this.usuarioLogado.id; 
    produto.dataPublicacao = new Date(); 
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
  listarProdutosDoUsuario(): Produto[] {
  return this.listaProdutos.filter(produto => produto.usuarioId === this.usuarioLogado.id);
}


  private getIndice(id?:number) {
    return this.listaProdutos.findIndex(
      produto => produto.id == id
    );
  }


}
