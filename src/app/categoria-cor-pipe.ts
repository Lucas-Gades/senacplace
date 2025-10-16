import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoriaCor'
})
export class CategoriaCorPipe implements PipeTransform {

  private cores: { [key: string]: string } = {
    'Esportes': 'bg-success',
    'Eletrônicos': 'bg-primary',
    'Livros': 'bg-warning',
    'Calçados': 'bg-info',
    'Roupas': 'bg-secondary',
    'Móveis': 'bg-dark'
  };

  transform(categoria?: string): string {
    return categoria ? this.cores[categoria] || 'bg-primary' : 'bg-primary';
  }
}

