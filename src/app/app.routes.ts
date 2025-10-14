import { Routes } from '@angular/router';
import { ListProdutos } from './list-produtos/list-produtos';
import { FormProdutos } from './form-produto/form-produto';
import { MeusProdutos } from './meus-produtos/meus-produtos';


export const routes: Routes = [
    { path: '', component: ListProdutos},
    { path: 'vender', component: FormProdutos},
    { path: 'meus-produtos', component: MeusProdutos},
    { path: 'edit/:id', component: FormProdutos },



];
