import { Injectable } from '@angular/core';
import { SupabaseApi } from './supabase-api';
import { Produto } from './produto';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private usuarioLogado: Usuario = {
    id: 1,
    nomeCompleto: 'Lucas da Silva',
    cpf: '123.456.789-00',
    dataNascimento: '2000-01-01',
    email: 'lucas@email.com',
    senha: '123456',
  };

  constructor(private supabaseApi: SupabaseApi) {}

  async listar(): Promise<Produto[]> {
    const { data, error } = await this.supabaseApi.supabase.from('produtos').select('*').order('id', { ascending: true });
    if (error) throw error;
    return data || [];
  }

  async inserir(produto: Produto): Promise<void> {
    // Remover dataPublicacao do objeto enviado, garantir só datapublicacao
    const { dataPublicacao, ...produtoSemData } = produto;
    const { error } = await this.supabaseApi.supabase.from('produtos').insert([
      {
        ...produtoSemData,
        fotos: produto.fotos ?? [],
        usuarioId: this.usuarioLogado.id,
        datapublicacao: new Date().toISOString(),
      },
    ]);
    if (error) throw error;
  }

  async buscarPorId(id: number): Promise<Produto | null> {
    const { data, error } = await this.supabaseApi.supabase.from('produtos').select('*').eq('id', id).single();
    if (error) throw error;
    return data || null;
  }

  async editar(id: number, produto: Produto): Promise<void> {
    const { error } = await this.supabaseApi.supabase.from('produtos').update(produto).eq('id', id);
    if (error) throw error;
  }

  async deletar(id: number): Promise<void> {
    const { error } = await this.supabaseApi.supabase.from('produtos').delete().eq('id', id);
    if (error) throw error;
  }

  async listarProdutosDoUsuario(): Promise<Produto[]> {
    const { data, error } = await this.supabaseApi.supabase.from('produtos').select('*').eq('usuarioId', this.usuarioLogado.id).order('id', { ascending: true });
    if (error) throw error;
    return data || [];
  }
}
