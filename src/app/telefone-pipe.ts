import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {
  transform(value: string | number | undefined): string {
    if (!value) return '';

    // Remove tudo que não for número
    let num = value.toString().replace(/\D/g, '');

    // Formato mínimo de 10 dígitos (DD + 8 ou 9 números)
    if (num.length === 10) {
      return `(${num.slice(0,2)}) ${num.slice(2,6)}-${num.slice(6,10)}`;
    } else if (num.length === 11) {
      return `(${num.slice(0,2)}) ${num.slice(2,7)}-${num.slice(7,11)}`;
    } else {
      return value.toString(); // retorna original se não tiver 10 ou 11 dígitos
    }
  }
}