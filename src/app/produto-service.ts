import { Injectable } from '@angular/core';
import { SupabaseApi } from './supabase-api';
import { Produto } from './produto';


@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  constructor(private supabaseApi: SupabaseApi) {}

  async listar(): Promise<Produto[]> {
    const { data, error } = await this.supabaseApi.supabase.from('produtos').select('*').order('id', { ascending: true });
    if (error) throw error;
    return data || [];
  }

  async inserir(produto: Produto): Promise<void> {
    const { data: { user } } = await this.supabaseApi.supabase.auth.getUser();
    if (!user) throw new Error('Usuário não autenticado');

    // Remover id e dataPublicacao do objeto enviado
    const { id, dataPublicacao, ...produtoSemIdEData } = produto;
    const { error } = await this.supabaseApi.supabase.from('produtos').insert([
      {
        ...produtoSemIdEData,
        fotos: produto.fotos ?? [],
        usuarioId: user.id, // Usa o ID do usuário autenticado (UUID)
        dataPublicacao: new Date().toISOString(),
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
    // Remover id do objeto enviado para evitar erro de coluna identity
    const { id: idProduto, usuarioId, dataPublicacao, ...dadosEdicao } = produto;
    const { error } = await this.supabaseApi.supabase.from('produtos').update(dadosEdicao).eq('id', id);
    if (error) throw error;
  }

  async deletar(id: number): Promise<void> {
    const { error } = await this.supabaseApi.supabase.from('produtos').delete().eq('id', id);
    if (error) throw error;
  }

  async listarProdutosDoUsuario(): Promise<Produto[]> {
    const { data: { user } } = await this.supabaseApi.supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await this.supabaseApi.supabase.from('produtos').select('*').eq('usuarioId', user.id).order('id', { ascending: true });
    if (error) throw error;
    return data || [];
  }

  async notificarInteresse(idProduto: number, mensagem: string): Promise<any> {
    const { data, error } = await this.supabaseApi.supabase.functions.invoke('notificar-interesse', {
      body: { idProduto, mensagem }
    });
    
    if (error) throw error;
    return data;
  }
}
