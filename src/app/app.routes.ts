import { Routes } from '@angular/router';
import { ListProdutos } from './list-produtos/list-produtos';
import { FormProdutos } from './form-produto/form-produto';
import { TabelaMeusProdutos } from './tabela-meus-produtos/tabela-meus-produtos';



export const routes: Routes = [
    { path: '', component: ListProdutos},
    { path: 'vender', component: FormProdutos},
    { path: 'meus-produtos', component: TabelaMeusProdutos},
    { path: 'edit/:id', component: FormProdutos },



];
