import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moeda'
})
export class MoedaPipe implements PipeTransform {
  transform(valor: number | undefined): string {
    if(!valor) return "";
    const valorDecimal = valor.toFixed(2);
    const valorDecimalBr = valorDecimal.replace('.', ',');
    const valorMoeda = `R$ ${valorDecimalBr}`;
    return valorMoeda;
  }

}
