import { Routes } from '@angular/router';
import { ListProdutos } from './list-produtos/list-produtos';
import { FormProdutos } from './form-produto/form-produto';
import { TabelaMeusProdutos } from './tabela-meus-produtos/tabela-meus-produtos';
import { TabelaCategorias } from './tabela-categorias/tabela-categorias';
import { FormCategoria } from './form-categoria/form-categoria';
import { Login } from './login/login';
import { authGuard } from './auth/auth-guard-guard';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'inicio', component: ListProdutos, canActivate: [authGuard] },
    { path: 'vender', component: FormProdutos, canActivate: [authGuard] },
    { path: 'meus-produtos', component: TabelaMeusProdutos, canActivate: [authGuard] },
    { path: 'edit/:id', component: FormProdutos, canActivate: [authGuard] },
    { path: 'categorias', component: TabelaCategorias, canActivate: [authGuard] },
    { path: 'categorias/novo', component: FormCategoria, canActivate: [authGuard] },
    { path: 'categorias/edit/:id', component: FormCategoria, canActivate: [authGuard] }
];
