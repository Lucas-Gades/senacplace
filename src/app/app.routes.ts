import { Routes } from '@angular/router';
import { ListProdutos } from './list-produtos/list-produtos';
import { FormProdutos } from './form-produto/form-produto';

export const routes: Routes = [
    { path: '', component: ListProdutos},
    { path: 'vender', component: FormProdutos},
];
