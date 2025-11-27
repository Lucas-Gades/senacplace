import { Routes } from '@angular/router';
import { ListCardProdutos } from './list-card-produtos/list-card-produtos';
import { FormProdutos } from './form-produtos/form-produtos';
import { TabelaProdutos } from './tabela-produtos/tabela-produtos';
import { TabelaCategorias } from './tabela-categorias/tabela-categorias';
import { FormCategoria } from './form-categoria/form-categoria';
import { Login } from './login/login';
import { authGuard } from './auth/auth-guard-guard';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'inicio', component: ListCardProdutos, canActivate: [authGuard] },
    { path: 'vender', component: FormProdutos, canActivate: [authGuard] },
    { path: 'meus-produtos', component: TabelaProdutos, canActivate: [authGuard] },
    { path: 'edit/:id', component: FormProdutos, canActivate: [authGuard] },
    { path: 'categorias', component: TabelaCategorias, canActivate: [authGuard] },
    { path: 'categorias/novo', component: FormCategoria, canActivate: [authGuard] },
    { path: 'categorias/edit/:id', component: FormCategoria, canActivate: [authGuard] }
];
