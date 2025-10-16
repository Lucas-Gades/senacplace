import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from './produto';

@Pipe({
  name: 'filtroPesquisa',
  pure: false
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaProdutos: Produto[], nomePesquisa: string | undefined): Produto[] {
    if(!nomePesquisa || nomePesquisa?.length < 3){
      return listaProdutos;
    }
    
    return listaProdutos.filter( (produto) => {
      return produto.titulo?.toLowerCase().includes(nomePesquisa.toLocaleLowerCase());
    });
  }

}
